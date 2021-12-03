const fs = require("fs");
let input = fs.readFileSync("testInput.txt", "utf-8");
input = input.split("\n");
console.log(input);
console.log(input.length);
let gammaRate = [];
let epsilonRate = [];

let gammaZeroCounter = 0;
let gamaOneCounter = 0;

const resetGammaCounters = () => {
  gammaZeroCounter = 0;
  gamaOneCounter = 0;
};

const findGammaRate = (char) => {
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element.charAt(char) === "0") {
      gammaZeroCounter += 1;
    }

    if (element.charAt(0) === "1") {
      gamaOneCounter += 1;
    }
  }

  if (gammaZeroCounter < gamaOneCounter) {
    gammaRate.push(0);
    resetGammaCounters();
  } else {
    gammaRate.push(1);
    resetGammaCounters();
  }
};

let charIncrease = 0;

for (let i = 0; i < input.length; i++) {
  findGammaRate(charIncrease);
  charIncrease += 1;
}

const gammaRateToString = () => {
  let gamaRate = gamaRate.join("");
};

gammaRateToString();

console.log("Gamma zero counter is:", gammaZeroCounter);
console.log("Gamma one counter is:", gamaOneCounter);
console.log("Gamma rate array is:", gammaRate);
