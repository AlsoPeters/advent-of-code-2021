const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf-8");

input = input.split("\n");

let gammaRate = [];
let epsilonRate = [];

let gammaZeroCounter = [];
let gammaOneCounter = [];

const stringLength = input[0].split("");
stringLength.forEach(() => {
  gammaZeroCounter.push(0);
  gammaOneCounter.push(0);
});

for (let i = 0; i < input.length; i++) {
  let element = input[i];

  for (let j = 0; j < element.length; j++) {
    if (element.charAt(j) === "0") {
      gammaZeroCounter[j] += 1;
    } else {
      gammaOneCounter[j] += 1;
    }
  }
}

// this will make our Gamma rate and Epsilon rate arrays
for (k = 0; k < input[0].length; k++) {
  if (gammaZeroCounter[k] > gammaOneCounter[k]) {
    gammaRate.push(0);
    epsilonRate.push(1);
  } else {
    gammaRate.push(1);
    epsilonRate.push(0);
  }
}

// turning our Gamma and Epsilon arrays into numbers
let gammaRateNumber = gammaRate.join("");
let epsilonRateNumber = epsilonRate.join("");

// turn our Gamma & Epsilon rate numbers into decimals
let gammaDecimal = parseInt(gammaRateNumber, 2);
let epsilonDecimal = parseInt(epsilonRateNumber, 2);

let powerConsumption = gammaDecimal * epsilonDecimal;

console.log(
  "Gamma Zero Counter:",
  gammaZeroCounter,
  "Gamma One Counter:",
  gammaOneCounter
);

console.log("Gamma rate is:", gammaRate);
console.log("Epsilon rate is:", epsilonRate);
console.log("Gamma rate to a number is:", gammaRateNumber);
console.log("Gamma rate decimal is:", gammaDecimal);
console.log("Epsilon rate to a number is:", epsilonRateNumber);
console.log("Epsilon rate decimal is:", epsilonDecimal);
console.log("The power consumption is:", powerConsumption);
