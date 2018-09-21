class SimpleCipher {

	key:string;

	constructor(key:string = 'null') {
		// Need to include accept no argument but reject ''
		// Therefore, using null as a keyword string
		if (key.length === 0 ||
			key.split('').some(element => {
				return !isNaN(parseInt(element)) || /^[A-Z]+$/.test(element);
			})) {
			throw new Error('Bad key');
		}
		if (key === 'null') {
			let keyArr = [];
			while (keyArr.length < 100) {
				let r = Math.floor(Math.random() * 26) + 97;
				keyArr.push(String.fromCharCode(r));
			}
			key = keyArr.join('');
		}
		this.key = key;
	}

    encode(input: string):string {
        let newInput = input.split('');
        newInput.forEach((char, index, arr) => {
        	let charInt = char.charCodeAt(0);
        	// Lowercase ASCII letters start at 97
        	charInt += this.key[index % this.key.length].charCodeAt(0) - 97;
        	if (charInt > 122) { charInt -= 123}
        	charInt = 97 + (charInt % 97)
        	arr[index] = String.fromCharCode(charInt);
        });
        return newInput.join('');
    }

    decode(input: string):string {
        let newInput = input.split('');
        newInput.forEach((char, index, arr) => {
        	let charInt = char.charCodeAt(0);
        	// Lowercase ASCII letters start at 97
        	charInt -= this.key[index % this.key.length].charCodeAt(0) - 97;
        	if (charInt < 97) { charInt += 123 }
        	charInt = 97 + (charInt % 97)
        	arr[index] = String.fromCharCode(charInt);
        });
        return newInput.join('');
    }
}

export default SimpleCipher
