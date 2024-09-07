// Write a JavaScript function to find a word within a string.

function search_word(string, word) {
    return `${word} was found ${string.split(word).length - 1} times.`
}

console.log(search_word('The quick brown fox', 'fox'));