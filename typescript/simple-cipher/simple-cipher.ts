class SimpleCipher {

	key:string;

    lowerCaseASCIIStartIndex = 97;
    lowerCaseASCIIEndIndex = 122;
    rangeOfValidCharacters = 26;

	constructor(key:string = undefined) {
		if (key === undefined) {
			let keyArr = [];
			while (keyArr.length < 100) {
				let r = Math.floor(Math.random() * this.rangeOfValidCharacters) + this.lowerCaseASCIIStartIndex;
				keyArr.push(String.fromCharCode(r));
			}
			key = keyArr.join('');
		}
        if (key.length === 0 ||
            key.split('').some(element => {
                return !/^[a-z]+$/.test(element);
            })) {
            throw new Error('Bad key');
        }
		this.key = key;
	}

    _encodeAndDecodeHelper(input: string, method:string):string {
        let newInput = input.split('');
        newInput.forEach((char, index, arr) => {
            let charInt = char.charCodeAt(0);
            if (method.toLowerCase() === 'encode') {
                charInt += this.key[index % this.key.length].charCodeAt(0) - this.lowerCaseASCIIStartIndex;
            } else {
                charInt -= this.key[index % this.key.length].charCodeAt(0) - this.lowerCaseASCIIStartIndex;
            }
            if (charInt > this.lowerCaseASCIIEndIndex) { charInt -= (this.lowerCaseASCIIEndIndex+1) }
            else if (charInt < this.lowerCaseASCIIStartIndex) { charInt += (this.lowerCaseASCIIEndIndex+1) }
            charInt = this.lowerCaseASCIIStartIndex + (charInt % this.lowerCaseASCIIStartIndex)
            arr[index] = String.fromCharCode(charInt);
        });
        return newInput.join('');
    }

    encode(input: string):string {
        return this._encodeAndDecodeHelper(input, 'encode');
    }

    decode(input: string):string {
        return this._encodeAndDecodeHelper(input, 'decode');
    }
}

export default SimpleCipher
