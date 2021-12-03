const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf-8");

input = input.split("\n");

let horizontalPosition = 0;
let depth = 0;

for (let i = 0; i < input.length; i++) {
  const element = input[i];

  const myArray = element.split(" ");

  if (myArray[0] === "forward") {
    horizontalPosition += parseInt(myArray[1]);
  }

  if (myArray[0] === "down") {
    depth += parseInt(myArray[1]);
  }

  if (myArray[0] === "up") {
    depth -= parseInt(myArray[1]);
  }
}

let finalDepth = horizontalPosition * depth;
console.log("Final depth =", finalDepth);

// Part 2
horizontalPosition = 0;
depth = 0;

let aim = 0;

for (let i = 0; i < input.length; i++) {
  const element = input[i];

  const myArray = element.split(" ");

  if (myArray[0] === "forward") {
    horizontalPosition += parseInt(myArray[1]);
    depth += aim * parseInt(myArray[1]);
  }

  if (myArray[0] === "down") {
    aim += parseInt(myArray[1]);
  }

  if (myArray[0] === "up") {
    aim -= parseInt(myArray[1]);
  }
}

let realFinalDepth = horizontalPosition * depth;
console.log("Real final depth =", realFinalDepth);
