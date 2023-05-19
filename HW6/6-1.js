function vadd(a, b) {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same length');
    }
  
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(a[i] + b[i]);
    }
  
    return result;
  }
  