// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

while (true) {
    let text = prompt('Enter a number >= 10:');
    if (isNaN(text)) {
        console.log('Not a number!');
    } else {
        num = parseInt(text);
        console.log(num);
        if (num >= 10) {
            break;
        }
    }
}