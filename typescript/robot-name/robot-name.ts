const alreadyGeneratedNames = new Map<string, number>()

export default class RobotName {
    name: string

    constructor() {
        this.name = this._generateName()
    }

    resetName(): void {
        let name:string = ''
        let genName = true
        while (genName) {
            name = this._generateName()
            if (!alreadyGeneratedNames.has(name)) {
                genName = false
                alreadyGeneratedNames.set(name, 1)
            }
        }
        this.name = name
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
