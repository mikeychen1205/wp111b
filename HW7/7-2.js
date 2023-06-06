function count(list) {
    const cmap = {};
  
    for (let i = 0; i < list.length; i++) {
      const word = list[i];
      cmap[word] = (cmap[word] || 0) + 1;
    }
  
    return cmap;
  }
  