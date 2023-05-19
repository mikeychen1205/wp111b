function repeat(f, n) {
    return Array.from({ length: n }, f);
  }
  
  // 使用 repeat(Math.random, 10) 生成 10 个隨機数
  const randomNumbers = repeat(Math.random, 10);
  console.log(randomNumbers);
  