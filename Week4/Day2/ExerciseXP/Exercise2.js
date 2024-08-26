// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["blue", "yellow", "green", "pink"];
suffix = ["st", "nd", "rd", "th"]
for (let i in colors) {
    let n;
    n = parseInt(i) + 1;
    console.log("My #"+n,"choice is", colors[i])
}

for (let i in colors) {
    let n;
    n = parseInt(i) + 1;
    console.log("My",n+suffix[i],"choice is", colors[i])
}