import { readFileSync } from "node:fs";

const input = readFileSync("2015/day02/input.txt", "utf-8").trim();

let lines = input.split("\n");
let totalWrappingPaper = 0;
let totalRibbon = 0;

for (const line of lines) {
    let [l, w, h] = line.split("x").map(Number);
    let surface = 2 * (l * w + w * h + h * l);
    let extraWrappingPaper = Math.min(l * w, w * h, h * l);
    let wrappingPaper = surface + extraWrappingPaper;

    let sorted = [l, w, h].sort((a, b) => a - b);
    let length = 2 * sorted[0] + 2 * sorted[1]; let extraRibbon = l * w * h;
    let ribbon = length + extraRibbon;

    totalWrappingPaper += wrappingPaper;
    totalRibbon += ribbon
}

console.log('Total wrapping paper needed:', totalWrappingPaper + 'feet²');
console.log("Total ribbon needed:", totalRibbon + 'feet');