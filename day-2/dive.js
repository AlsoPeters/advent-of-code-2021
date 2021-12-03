let testInput = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8');

let horizontalPosition = 0;
let depth = 0;

for (let i = 0; i < testInput.length; i++) {
  const element = testInput[i];

  const myArray = element.split(' ');

  if (myArray[0] === 'forward') {
    horizontalPosition += parseInt(myArray[1]);
    console.log(myArray[1]);
  }

  if (myArray[0] === 'down') {
    depth += parseInt(myArray[1]);
  } else if (myArray[0] === 'up') {
    depth -= parseInt(myArray[1]);
  }
}

let finalDepth = horizontalPosition * depth;
// console.log(input);
console.log(horizontalPosition);
console.log(depth);
console.log(finalDepth);
