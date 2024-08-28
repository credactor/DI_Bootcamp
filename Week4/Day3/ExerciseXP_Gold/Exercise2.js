// Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(name) {
    words = name.split(' ');
    letters = "";
    for (word in words) {
        letters += words[word][0].toUpperCase();
    }
    return letters.split('').join('. ')+".";
}

console.log(abbrevName("Robert Louis Stevenson"));