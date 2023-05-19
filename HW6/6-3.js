function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw new Error('Matrices must have the same dimensions');
    }
  
    const result = [];
    for (let i = 0; i < a.length; i++) {
      const row = [];
      for (let j = 0; j < a[0].length; j++) {
        row.push(a[i][j] + b[i][j]);
      }
      result.push(row);
    }
  
    return result;
  }
  