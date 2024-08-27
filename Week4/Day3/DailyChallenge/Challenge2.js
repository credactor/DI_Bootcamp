// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

text = "How vexingly quick daft zebras jump";
words = text.split(' ');
words_sorted = Array.from(words);
words_sorted.sort((a, b) => b.length - a.length)
longest = words_sorted[0].length;
header = "*".repeat(longest + 4);
console.log(header);
for (word of words) {
    line = "* " + word;
    for (i = 0; i < longest-word.length; i++) {
        line += " ";
    }
    console.log(line + " *");
}
console.log(header);