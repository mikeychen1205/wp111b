class Matrix {
    constructor(m) {
      this.m = m;
    }
  
    add(b) {
      if (this.m.length !== b.m.length || this.m[0].length !== b.m[0].length) {
        throw new Error('矩陣大小不相符');
      }
  
      const result = [];
      for (let i = 0; i < this.m.length; i++) {
        const row = [];
        for (let j = 0; j < this.m[i].length; j++) {
          row.push(this.m[i][j] + b.m[i][j]);
        }
        result.push(row);
      }
  
      return new Matrix(result);
    }
  
    mul(b) {
      if (this.m[0].length !== b.m.length) {
        throw new Error('矩陣大小不相符');
      }
  
      const result = [];
      for (let i = 0; i < this.m.length; i++) {
        const row = [];
        for (let j = 0; j < b.m[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < this.m[i].length; k++) {
            sum += this.m[i][k] * b.m[k][j];
          }
          row.push(sum);
        }
        result.push(row);
      }
  
      return new Matrix(result);
    }
  }
  
  const madd = (a, b) => {
    const matrixA = new Matrix(a);
    const matrixB = new Matrix(b);
    return matrixA.add(matrixB).m;
  }
  
  const mmul = (a, b) => {
    const matrixA = new Matrix(a);
    const matrixB = new Matrix(b);
    return matrixA.mul(matrixB).m;
  }
  