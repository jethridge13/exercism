class Pangram {

    private readonly _isPangram: boolean
    private readonly alphabetCount = 26

    constructor(input: string) {
        this._isPangram = this._parsePangram(input)
    }

    private _parsePangram(input: string): boolean {
        const characterMap = new Map()
        input = input.toLowerCase()
        for (const char of input) {
            if (this._isValidNewCharacter(characterMap, char)) {
                characterMap.set(char, 1)
                if (characterMap.size === this.alphabetCount) {
                    return true
                }
            }
        }
        return false
    }

    private _isValidNewCharacter(charMap: Map<string, string>, char: string): boolean {
        return /^[a-z]$/.test(char) && !charMap.get(char)
    }

    isPangram(): boolean {
        return this._isPangram
    }
}

export default Pangram
