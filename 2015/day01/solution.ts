import { readFileSync } from "node:fs";

const input = readFileSync("2015/day01/input.txt", "utf-8").trim();

let floor = 0;
let position = 0;
let basementPosition: number | null = null;

for (const char of input) {
    position++;
    if (char === "(") {
        floor++;
    } else if (char === ")") {
        floor--;
    } else {
        throw new Error('Error');
    }
    if (floor === -1 && basementPosition === null) {
        basementPosition = position;
    }
}

console.log('Santa is on floor:', floor);
console.log('Santa enters the basement at position:', basementPosition);
