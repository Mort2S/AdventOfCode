import { readFileSync } from "node:fs";
import isOdd from "is-odd";

const input = readFileSync("2015/day03/input.txt", "utf-8").trim();

const visitedPart1 = new Set<string>(["0,0"]);
const visitedPart2 = new Set<string>(["0,0"]);

let x = 0;
let y = 0;

const santa = { x: 0, y: 0 };
const robo = { x: 0, y: 0 };

for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const current = isOdd(i) ? robo : santa;

    if (char === "^") {
        y++;
        current.y++;
    } else if (char === "v") {
        y--;
        current.y--;
    } else if (char === ">") {
        x++;
        current.x++;
    } else if (char === "<") {
        x--;
        current.x--;
    }

    visitedPart1.add(`${x},${y}`);
    visitedPart2.add(`${current.x},${current.y}`);
}

console.log("Part 1:", visitedPart1.size);
console.log("Part 2:", visitedPart2.size);