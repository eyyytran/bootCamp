const spiral = matrix => {
    let n = matrix.length
    const results = []

    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1
    let direction = 'right'
    while (startColumn <= endColumn && startRow <= endRow) {
        if (direction === 'right') {
            for (let i = startColumn; i <= endColumn; i++) {
                results.push(matrix[startRow][i])
            }
            startRow += 1
            direction = 'down'
        } else if (direction === 'down') {
            for (let i = startRow; i <= endRow; i++) {
                results.push(matrix[i][endColumn])
            }
            endColumn -= 1
            direction = 'left'
        } else if (direction === 'left') {
            for (let i = endColumn; i >= startColumn; i -= 1) {
                results.push(matrix[endRow][i])
            }
            endRow -= 1
            direction = 'up'
        } else if (direction === 'up') {
            for (let i = endRow; i >= startRow; i -= 1) {
                results.push(matrix[i][startColumn])
            }
            startColumn += 1
            direction = 'right'
        }
    }
    return results
}

matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(spiral(matrix1))
