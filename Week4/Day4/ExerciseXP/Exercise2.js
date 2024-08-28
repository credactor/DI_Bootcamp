// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
//     use event.preventDefault(), why ?
//     get the values of the input tags,
//     make sure that they are not empty,
//     create an li per input value,
//     then append them to a the <ul class="usersAnswer"></ul>, below the form.

console.log(document.getElementsByTagName('form'));
console.log(document.getElementById('fname'));
console.log(document.getElementById('lname'));
console.log(document.querySelector("[name=firstname]"));
console.log(document.querySelector("[name=lastname]"));

function getInput(e) {
    e.preventDefault();
    const fname = document.querySelector("[name=firstname]").value;
    const lname = document.querySelector("[name=lastname]").value;
    if (fname === "" || lname === "") {
        alert ("Please fill in all fields!");
        return;
    }
    ul = document.getElementsByClassName("usersAnswer")[0];
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.innerText = fname;
    li2.innerText = lname;
    ul.append(li1, li2);
}

const btn = document.getElementById("submit");
btn.addEventListener("click", getInput);
// form.addEventListener("submit", getInput);