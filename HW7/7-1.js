function monthToIndex(month) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const index = months.indexOf(month);
  
    if (index !== -1) {
      return index + 1;
    } else {
      return -1; // 如果輸入的月份無效，返回 -1 表示錯誤
    }
  }
  