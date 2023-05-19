function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
    
    let sequence = fibonacci(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
  