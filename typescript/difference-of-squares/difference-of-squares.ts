class Squares {

	sumOfSquares = 0
	squareOfSum: number;
	difference: number;

	constructor(n:number) {
		this.squareOfSum = Math.pow(Math.floor(((n * n) + n) / 2), 2);
		for (let i = 1; i <= n; i++) {
			this.sumOfSquares += Math.pow(i, 2);
		}
		this.difference = this.squareOfSum - this.sumOfSquares;
	}
}

export default Squares;
