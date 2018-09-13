class ArmstrongNumbers {
	static isArmstrongNumber(n:number) {
		const original = n;
		const power	= n.toString().length;
		let sum = 0;
		while (n > 0) {
			sum += Math.pow((n % 10), power);
			n = Math.floor(n/10);
		}
		return sum == original;
	}
}

export default ArmstrongNumbers
