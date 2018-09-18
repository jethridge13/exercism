class BracketPush {

	originalString = '';
	private _isPaired: boolean;

	constructor(brackets: string) {
		this.originalString = brackets;
	}

	isPaired(): boolean {
		if (typeof this._isPaired === 'undefined') {
			let pairings: string[] = [];

			for (let i of this.originalString) {
				switch (i) {
					case '[':
					case '{':
					case '(':
						pairings.push(i)
						break;
					case ']':
						if (pairings.pop() !== '[') {
							this._isPaired = false;
							return false;
						}
						break;
					case '}':
						if (pairings.pop() !== '{') {
							this._isPaired = false;
							return false;
						}
						break;
					case ')':
						if (pairings.pop() !== '(') {
							this._isPaired = false;
							return false;
						}
						break;
				}
			}

			if (pairings.length > 0) {
				this._isPaired = false;
				return false;
			}

			this._isPaired = true;
			return true;

		} else {
			return this._isPaired;
		}
	}
}

export default BracketPush;
