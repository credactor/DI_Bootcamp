// 1. Add the code above, to your HTML file
// 2. Using Javascript: 
//     1. Retrieve the div and console.log it 
//     2. Change the name “Pete” to “Richard”. 
//     3. Delete the second <li> of the second <ul>. 
//     4. Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// 3. Using Javascript:
//     1. Add a class called student_list to both of the <ul>'s. 
//     2. Add the classes university and attendance to the first <ul>.
// 4. Using Javascript:
//     1. Add a “light blue” background color and some padding to the <div>. 
//     2. Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>) 
//     3. Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>) 
//     4. Change the font size of the whole body.
// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div). 


console.log(document.getElementsByTagName('div'));
document.getElementsByTagName("li")[1].textContent = "Richard";
a = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[1];
document.getElementsByTagName("ul")[1].removeChild(a);
for (let i = 0; i < 2; i++) {
    document.getElementsByTagName("ul")[i].getElementsByTagName("li")[0].textContent = "Stan";}

document.getElementsByTagName("ul")[0].classList.add('student_list');
document.getElementsByTagName("ul")[1].classList.add('student_list');
document.getElementsByTagName("ul")[0].classList.add('university', 'attendance');

document.getElementsByTagName('div')[0].style.backgroundColor = 'lightblue';
document.getElementsByTagName('div')[0].style.padding = '10px';
document.getElementsByTagName("ul")[1].lastElementChild.style.display = 'None';
document.getElementsByTagName("ul")[0].lastElementChild.style.border = '3px solid';
document.getElementsByTagName('body')[0].style.fontSize = '20px';

