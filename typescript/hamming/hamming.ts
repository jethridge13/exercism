export default class Hamming {

    compute(strand1: string, strand2: string) {
        if (strand1.length !== strand2.length) {
            throw new Error('DNA strands must be of equal length.')
        }

        let count = 0

        for (const [char1, char2] of this.zip(strand1, strand2)) {
            if (char1 !== char2) {
                count += 1
            }
        }

        return count
    }

    zip(list1: string, list2: string): string[][] {
        return list1.split('').map((x: string, i: number) => [x, list2[i]])
    }
}
