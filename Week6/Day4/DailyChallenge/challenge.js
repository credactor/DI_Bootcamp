// Challenge Task: Integrating Everything
// 1. Create a file named challenge.js.
// 2. In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.
// 3. Use the greet function to greet the user, display the colorful message, and read and display the file’s content.
// 4. Run challenge.js using Node.js and see the complete challenge in action.
// By completing this challenge, you’ll have a Node.js application that demonstrates module system usage, integration of NPM modules, and file operations. It’s a comprehensive exercise that brings together concepts from the previous exercises into a single daily challenge.

import { greet } from "./greeting.js";
import { colorMes } from "./colorful-message.js";
import  { rf } from "./read-file.js";

console.log(greet("Lily"));
console.log(colorMes());
rf("./files/file-data.txt");