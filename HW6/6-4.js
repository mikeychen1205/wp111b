function mmul(a, b) {
    if (a[0].length !== b.length) {
      throw new Error('Number of columns in the first matrix must be equal to the number of rows in the second matrix');
    }
  
    const rowsA = a.length;
    const colsA = a[0].length;
    const colsB = b[0].length;
  
    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
      result[i] = new Array(colsB);
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  