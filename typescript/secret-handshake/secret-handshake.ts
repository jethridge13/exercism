export default class HandShake {

    private readonly commandList: string[]

    constructor(input: number) {
        this.commandList = []
        const binary = this._decimalToBinary(input)
        if (binary[4] === 1) {
            this.commandList.push('wink')
        }
        if (binary[3] === 1) {
            this.commandList.push('double blink')
        }
        if (binary[2] === 1) {
            this.commandList.push('close your eyes')
        }
        if (binary[1] === 1) {
            this.commandList.push('jump')
        }
        if (binary[0] === 1) {
            this.commandList = this.commandList.reverse()
        }
    }

    commands(): string[] {
        return this.commandList
    }

    private _decimalToBinary(input: number): number[] {
        const sequence: number[] = []
        while (input > 0) {
            sequence.push(input % 2)
            input = Math.floor(input / 2)
        }
        while (sequence.length < 5) {
            sequence.push(0)
        }
        return sequence.reverse()
    }
}
