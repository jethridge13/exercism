class RunLengthEncoding {
	static encode(phrase:string): string {
		let code = '';
		let count = 0;
		let currentChar = '';
		for (const char of phrase) {
			if (!currentChar) {
				currentChar = char;
				count++;
			} else if (char === currentChar) {
				count++;
			} else {
				count > 1 ? code += `${count}${currentChar}` : code += currentChar;
				currentChar = char;
				count = 1;
			}
		}
		count > 1 ? code += `${count}${currentChar}` : code += currentChar;
		return code;
	}

	static decode(code:string): string {
		let phrase = '';
		let currentNumberString = ''
		for (const char of code) {
			if (isNaN(parseInt(char))){
				if (!currentNumberString) { currentNumberString = '1' }
				phrase += new Array(Number(currentNumberString)).fill(char).join('');
				currentNumberString = '';
			} else {
				currentNumberString += char;
			}
		}
		return phrase;
	}
}

export default RunLengthEncoding
