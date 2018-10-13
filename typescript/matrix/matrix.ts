class Matrix {

    // private readonly matrix: number[][]
    readonly rows: number[][]
    readonly columns: number[][]

    constructor(matrixString: string) {
        const rows = matrixString.split('\n')
        this.rows = rows.map((row: string): number[] => {
            return this._parseStringToNumberArray(row)
        })
        
        const columns: number[][] = []
        for (const [columnIndex, row] of this.rows.entries()) {
            if (columns.length < columnIndex) {
                columns.push(new Array())
            }
            for (const [index, value] of row.entries()) {
                if (columns[columnIndex].length < index) {
                    columns[columnIndex].push(0)
                }
                columns[columnIndex][index] = value
            }
        }
    }

    private _parseStringToNumberArray(s: string): number[] {
        return s.split(' ').map((x: string): number => parseInt(x, 10))
    }

}

export default Matrix
