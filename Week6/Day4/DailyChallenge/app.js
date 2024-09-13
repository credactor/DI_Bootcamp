import { greet } from "./greeting.js";
import { colorMes } from "./colorful-message.js";
import  { rf } from "./read-file.js";

console.log(greet("Lily"));
console.log(colorMes());
rf("./files/file-data.txt");