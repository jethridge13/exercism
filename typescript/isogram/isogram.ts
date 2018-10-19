class Isogram {
    static isIsogram(s: string): boolean {
        s = s.toLowerCase()
        const charCounts = new Map<string, number>()
        for (const char of s) {
            if (charCounts.has(char)) {
                return false
            }
            if (char !== '-' && char !== ' ') {
                charCounts.set(char, 1)
            }
        }
        return true
    }
}

export default Isogram
