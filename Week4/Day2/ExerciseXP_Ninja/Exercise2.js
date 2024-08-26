// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
//     Create a function called findAvg(gradesList) that takes an argument called gradesList.
//     Your function must calculate and console.log the average.
//     If the average is above 65 let the user know they passed
//     If the average is below 65 let the user know they failed and must repeat the course.
//         Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
//         Hint One function must call the other.

function findAvg(gradesList) {
    return gradesList.reduce((a, b) => (a + b)) / gradesList.length;
}

function passTest(gradesList) {
    avg = findAvg(gradesList);
    console.log("Your average grade is", avg.toFixed(2));
    if (avg > 65) {
        console.log("You passed!");
    }
    else {
        console.log("You failed and must repeat the course.");
    }
}
passTest([55, 97, 45, 68, 72, 64])