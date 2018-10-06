class Bob {
    private isAskingQuestion(phrase: string): boolean {
        return phrase.endsWith('?')
    }

    private isYelling(phrase: string): boolean {
        return phrase === phrase.toUpperCase() &&
            /[A-Za-z]+/.test(phrase)
    }

    private isSayingNothing(phrase: string): boolean {
        return /^\s*$/.test(phrase)
    }

    hey(phrase: string) {
        if (this.isSayingNothing(phrase)) {
            return 'Fine. Be that way!'
        } else if (this.isYelling(phrase)) {
            return 'Whoa, chill out!'
        } else if (this.isAskingQuestion(phrase)) {
            return 'Sure.'
        } else {
            return 'Whatever.'
        }
    }
}

export default Bob
