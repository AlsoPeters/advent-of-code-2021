const fs = require('fs');

let input = fs.readFileSync('testInput.txt', 'utf-8');

input = input.split('\n');
//input = input.split('\r');
console.log(input);

let gammaRate = [];
let epsilonRate = [];

let gammaZeroCounter = 0;
let gamaOneCounter = 0;

const resetGammaCounters = () => {
  gammaZeroCounter = 0;
  gamaOneCounter = 0;
};

for (let i = 0; i < input.length; i++) {
  let element = input[i];

  let myArray = element.trimEnd();
  console.log(myArray);

  for (let j = 0; j < element.length; j++) {
    if (element.charAt(j) === '0') {
      gammaZeroCounter += 1;
    }

    if (element.charAt(j) === '1') {
      gamaOneCounter += 1;
    }

    console.log('Gamma zero counter is:', gammaZeroCounter);

    console.log('Gamma one counter is:', gamaOneCounter);
  }
  if (gammaZeroCounter < gamaOneCounter) {
    gammaRate.push(0);
    resetGammaCounters();
  } else {
    gammaRate.push(1);
    resetGammaCounters();
  }
}

console.log('Gamma rate array is:', gammaRate);
