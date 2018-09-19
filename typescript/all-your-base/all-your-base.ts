class Converter {

	convert(sequence: number[], origBase: number, targetBase: number): number[] {
		if (origBase < 2) {
			throw new Error('Wrong input base');
		}
		if (targetBase < 2 || !Number.isInteger(targetBase)) {
			throw new Error('Wrong output base');
		}
		if (sequence.length === 0 ||
			sequence[0] === 0 && sequence.length > 1 ||
			!sequence.every(value => {
				return value >= 0 && value < origBase;
			})) {
			throw new Error('Input has wrong format');
		}
		if (sequence.length === 1 && sequence[0] === 0) { return [0]; }
		sequence = this.toDecimal(sequence, origBase);
		if (targetBase === 10) {
			return sequence;
		}
		return this.toCustomBase(sequence, targetBase);
	}

	/* 
	 *	Takes a sequence of any base and converts it to decimal
	 */
	private toDecimal(sequence: number[], base: number): number[] {
		let power = 0;
		let newSequence:number[] = [];
		let result = 0
		sequence.reverse().forEach(digit => {
			result += digit * Math.pow(base, power);
			power++;
		});
		while (result > 0) {
			newSequence.push(result % 10)
			result = Math.floor(result / 10);
		}
		return newSequence.reverse();
	}

	/*
	 *	Takes a sequence of decimal numbers and converts it to the target base
	 */
	private toCustomBase(sequence: number[], base: number): number[] {
		let newSequence:number[] = [];
		let power = 0;
		let sum = 0;
		sequence.reverse().forEach(digit => {
			sum += digit * Math.pow(10, power);
			power++;
		});

		while (sum >= base) {
			newSequence.unshift(sum % base);
			sum = Math.floor(sum / base);
		}
		if (sum > 0) {
			newSequence.unshift(sum);
		}
		return newSequence;
	}

}

export default Converter;
