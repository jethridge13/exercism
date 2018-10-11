class Matrix {

    private readonly matrix: number[][]

    constructor(matrixString: string) {
        const columns = matrixString.split('\n')
        const rows = []
        for (const column of columns) {
            rows.push(column.split(' ').map((x) => parseInt(x, 10)))
        }
        this.matrix = rows
    }

    rows(row: number): number[] {
        return this.matrix[row]
    }

    columns(column: number): number[] {
        const columns: number[] = []
        this.matrix.forEach((x) => columns.push(x[column]))
        return columns
    }
}

export default Matrix
