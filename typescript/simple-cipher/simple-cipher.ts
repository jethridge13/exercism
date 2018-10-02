class SimpleCipher {

	readonly key:string;

    private static lowerCaseASCIIStartIndex = 97;
    private static lowerCaseASCIIEndIndex = 122;
    private static rangeOfValidCharacters = 26;

	constructor(key?:string) {
		if (key === undefined) {
			key = this._generateKey();
		}
        if (!this._isValidKey(key)) {
            throw new Error('Bad key');
        }
		this.key = key;
	}

    private _generateKey():string {
        let keyArr = [];
        while (keyArr.length < 100) {
            let r = Math.floor(Math.random() * SimpleCipher.rangeOfValidCharacters) + SimpleCipher.lowerCaseASCIIStartIndex;
            keyArr.push(String.fromCharCode(r));
        }
        return keyArr.join('');
    }

    private _isValidKey(key:string):boolean {
        if (key.length === 0 ||
            !/^[a-z]+$/.test(key)) {
            return false;
        }
        return true;
    }

    private _encodeAndDecodeHelper(input: string, encode:boolean):string {
        return input.split('').map((char, index) => {
            let charInt = char.charCodeAt(0);
            if (encode) {
                charInt += this.key[index % this.key.length].charCodeAt(0) - SimpleCipher.lowerCaseASCIIStartIndex;
            } else {
                charInt -= this.key[index % this.key.length].charCodeAt(0) - SimpleCipher.lowerCaseASCIIStartIndex;
            }
            if (charInt > SimpleCipher.lowerCaseASCIIEndIndex) { charInt -= (SimpleCipher.lowerCaseASCIIEndIndex+1) }
            else if (charInt < SimpleCipher.lowerCaseASCIIStartIndex) { charInt += (SimpleCipher.lowerCaseASCIIEndIndex+1) }
            charInt = SimpleCipher.lowerCaseASCIIStartIndex + (charInt % SimpleCipher.lowerCaseASCIIStartIndex)
            return String.fromCharCode(charInt);
        }).join('');
    }

    encode(input: string):string {
        return this._encodeAndDecodeHelper(input, true);
    }

    decode(input: string):string {
        return this._encodeAndDecodeHelper(input, false);
    }
}

export default SimpleCipher
