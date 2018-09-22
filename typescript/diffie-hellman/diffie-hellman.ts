class DiffieHellman {

	p:number;
	g:number;

	constructor(p:number, g:number) {
		if (g > p) {
			throw new Error('Second prime must be less than the first');
		}
		if (!this.isPrime(p) || !this.isPrime(g)) {
			throw new Error('Arguments must be prime');
		}
		this.p = p;
		this.g = g;
	}

	getPublicKeyFromPrivateKey(n:number): number {
		if (n < 2) {
			throw new Error('Key must be positive and above 1');
		}
		if (n >= this.p) {
			throw new Error('Invalid key');
		}

		return Math.pow(this.g, n) % this.p;
	}

	getSharedSecret(privateKey:number, publicKey:number): number {
		return Math.pow(publicKey, privateKey) % this.p;
	}

	private isPrime(n:number): boolean {
		if (Math.abs(n) < 2) {
			return false;
		}
		for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}
}

export default DiffieHellman;
