const fs = require('fs');

const numArray = fs.readFileSync('numbers.txt', 'utf-8');

let testArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let isGreater = 0;
for (i = 0, j = 1; i < testArray.length; i++, j++) {
  if (testArray[i] < testArray[j]) {
    isGreater++;
  }
}

console.log(isGreater);
