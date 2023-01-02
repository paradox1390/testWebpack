import "./index.html"; // слежка за index.html c помощью html loader
import "./index.scss"; // слежка за index.scss c помощью css loader + style loader
import { mult, sum } from "./modules/calc";

console.log(mult(2, 4));
console.log(sum(3, 4));
