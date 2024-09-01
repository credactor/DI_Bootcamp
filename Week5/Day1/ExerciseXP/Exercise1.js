// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:  -> 3
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? -> error

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console: -> 0; 5
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ? -> error

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console: -> hello
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    console.log(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console: -> test
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? -> nothing will change

//#5
let a = 2;
if (true) {
    let a = 5;
    console.log(`in the if block ${a}`);
}
console.log(`outside of the if block ${a}`);

// #5.1 - run the code in the console -> 5; 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ? -> nothing will change