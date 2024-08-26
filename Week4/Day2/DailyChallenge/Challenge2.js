// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

stars = ""
for (let i = 0; i < 21; i++) {
    if ([0, 2, 5, 9, 14, 20].includes(i)){
        stars += "*\n"
    }
    else {
        stars += "* "
    }
}
console.log(stars)

stars = ""
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        stars += "* "
    }
    stars += "*\n"
}
console.log(stars)