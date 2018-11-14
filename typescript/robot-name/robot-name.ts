export default class RobotName {
    name: string

    constructor() {
        this.name = this._generateName()
    }

    resetName(): void {
        this.name = this._generateName()
    }

    private _generateName(): string {
        let name = ''
        for (let i = 0; i < 2; i++) {
            name += this._generateRandomCharacter()
        }

        for (let i = 0; i < 3; i++) {
            name += Math.floor(Math.random() * 9)
        }

        return name
    }

    private _generateRandomCharacter(): string {
        const rangeOfLetters = 25
        const startOfUpperCaseLetters = 65
        return String.fromCharCode((Math.random() * rangeOfLetters) + startOfUpperCaseLetters)
    }
}
