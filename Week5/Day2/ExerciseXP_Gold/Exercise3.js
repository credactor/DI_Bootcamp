// What is the value of [i]? -> newArray?

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})

console.log(newArray) // -> [2, 4, 8, 10, 16, 18]