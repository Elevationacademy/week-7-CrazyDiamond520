const newMatrix = function(numR, numC){
    const matrix = []
    let num = 1
    for(let r=0; r<numR; r++){
        matrix.push([])
        for(let c = 0; c<numC; c++){
            matrix[r].push(num++)
        }
    }
    return matrix
}

const printMatrix = function(matrix){
    for(let r=0; r<matrix.length; r++){
        let line = ""
        for(let c=0; c<matrix[r].length; c++){
            line+= ( matrix[r][c]+ "\t" )
        }
        console.log(line)
    }
}

const alter = function(matrix, rowNum, colNum, newValue){
    matrix[rowNum][colNum = newValue]
}

const newMatrix1 = newMatrix(5,5)
printMatrix(newMatrix1)