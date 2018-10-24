class Matrix {

    // private readonly matrix: number[][]
    readonly rows: number[][]
    readonly columns: number[][]

    constructor(matrixString: string) {
        const rows = matrixString.split('\n')
        this.rows = rows.map((row: string): number[] => {
            return this._parseStringToNumberArray(row)
        })
        
        this.columns = this._generateColumns(this.rows)
    }

    private _parseStringToNumberArray(s: string): number[] {
        return s.split(' ').map((x: string): number => parseInt(x, 10))
    }

    private _generateColumns(rows: number[][]): number[][] {
        const columns: number[][] = []
        for (const [columnIndex, row] of rows.entries()) {
            for (const [index, value] of row.entries()) {
                if (columns[index] === undefined) {
                    columns[index] = new Array()
                }
                columns[index][columnIndex] = value
            }
        }

        return columns
    }

}

export default Matrix
