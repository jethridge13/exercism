export default class Acronym {
  static parse(phrase: string): string {
    const words = phrase.split(/[\s-]+/g)
    let acronym = ''
    for (const word of words) {
        const uppercaseLetters = word.match(/([A-Z][a-z]+)/g)
        if (uppercaseLetters) {
            for (const newWord of uppercaseLetters) {
                acronym += newWord.charAt(0)
            }
        } else {
            acronym += word.charAt(0)
        }
    }
    acronym = acronym.toUpperCase()
    return acronym
  }
}
