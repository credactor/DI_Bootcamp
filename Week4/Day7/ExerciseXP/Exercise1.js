// Clean the room function:
// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function order(numbers) {
    let ordered = Array.from(new Set(numbers));
    ordered = ordered.sort(function(a, b) {return a - b;});
    reduced = {};
    for (num of numbers) {
        if (Object.keys(reduced).includes(String(num))) {
            reduced[num] ++;
        }
        else {
            reduced[num] = 1;
        }
    }
    result = [];
    for (num of ordered) {
        if (reduced[Number(num)] > 1) {
            result.push(new Array(reduced[Number(num)]).fill(num));
        }
        else {
            result.push(num);
        }
    }
    return result;
}

list = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(order(list));