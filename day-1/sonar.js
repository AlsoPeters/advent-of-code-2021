const fs = require("fs");

let input = fs.readFileSync("numbers.txt", "utf-8");
input = input.split("\n");
input = input.map((item) => {
  if (item !== " " && item !== "") {
    return parseInt(item);
  }
});

// PART !

let greaterCount = 0;
for (i = 0; i < input.length; i++) {
  if (input[i] < input[i + 1]) {
    greaterCount++;
  }
}

console.log("Part 1: " + greaterCount);

// PART 2

greaterCount = 0;
for (i = 0; i < input.length; i++) {
  let windowOne = input[i] + input[i + 1] + input[i + 2];
  let windowTwo = input[i + 1] + input[i + 2] + input[i + 3];
  if (windowOne < windowTwo) {
    greaterCount++;
  }
}

console.log("Part 2: " + greaterCount);
