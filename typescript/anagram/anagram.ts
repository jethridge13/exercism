export default class Anagram {

    private readonly wordMap: Map<string, number>
    private readonly word: string

    constructor(word: string) {
        this.word = word
        this.wordMap = this._getCharCount(word)
    }

    matches(...wordList: string[]): string[] {
        return wordList.filter((x: string) => {
            return x.toLowerCase() !== this.word.toLowerCase() &&
            this._isMatch(x)
        })
    }

    private _getCharCount(word: string): Map<string, number> {
        word = word.toLowerCase()
        const wordMap = new Map<string, number>()
        for (const char of word) {
            let charCount = wordMap.get(char)
            if (!charCount) {
                charCount = 0
            }
            charCount++
            wordMap.set(char, charCount)
        }
        return wordMap
    }

    private _isMatch(word: string): boolean {
        const candidateMap = this._getCharCount(word)
        if (candidateMap.size !== this.wordMap.size) {
            return false
        }
        for (const key of candidateMap.keys()) {
            if (candidateMap.get(key) !== this.wordMap.get(key)) {
                return false
            }
        }
        return true
    }
}
