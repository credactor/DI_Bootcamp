// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

function answer(list, target) {
    for (i in list) {
        for (j = Number(i) + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                return [list[i], list[j]]
            }
        }
    }
}

a = [1,2,3,5,7];
x = 4;
console.log(answer(a, x));