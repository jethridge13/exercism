class ProteinTranslation {

    static proteinLookup = new Map([
        ['AUG', 'Methionine'],
        ['UUUUUC', 'Phenylalanine'],
        ['UUAUUG', 'Leucine'],
        ['UCUUCCUCAUCG', 'Serine'],
        ['UAUUAC', 'Tyrosine'],
        ['UGUUGC', 'Cysteine'],
        ['UGG', 'Tryptophan'],
        ['UAA', 'STOP'],
        ['UAG', 'STOP'],
        ['UGA', 'STOP']
    ])

    static proteins(sequence: string): string[] {
        const codons = sequence.match(/(.{1,3})/g)
        if (!codons) {
            return ['']
        }
        return this._lookupProteins(codons)
    }

    static _lookupProteins(codons: string[]): string[] {
        let currentSequence = ''
        const proteins: string[] = []
        for (const codon of codons) {
            console.log(currentSequence)
            currentSequence += codon
            console.log(currentSequence)
            if (this.proteinLookup.has(currentSequence)) {
                const newProtein = this.proteinLookup.get(currentSequence)
                if (newProtein === 'STOP') {
                    return proteins
                }
                if (newProtein !== undefined) {
                    console.log('New protein!')
                    proteins.push(newProtein)
                    currentSequence = ''
                }
            }
        }
        return proteins
    }
}

export default ProteinTranslation
