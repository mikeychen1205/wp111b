function truthTable(n) {
    if (n <= 0) {
      return [[]];
    } else if (n === 1) {
      return [[0], [1]];
    }
    
    let subTable = truthTable(n - 1);
    let table = [];
    
    for (let i = 0; i < subTable.length; i++) {
      let row1 = subTable[i].slice();
      row1.push(0);
      let row2 = subTable[i].slice();
      row2.push(1);
      table.push(row1, row2);
    }
    
    return table;
  }
  