class Words {

	count(phrase: string): Map<string, number> {
		let countedPhrases = new Map();
		const words = phrase.split(/\s/);
		for (let word of words){
			if (word === '') { continue }
			word = word.toLowerCase();
			if (countedPhrases.has(word)) {
				countedPhrases.set(word, countedPhrases.get(word) + 1);
			} else {
				countedPhrases.set(word, 1);
			}
		}
		return countedPhrases;
	}
}

export default Words;
