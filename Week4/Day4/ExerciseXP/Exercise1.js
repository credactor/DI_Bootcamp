// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

console.log(document.querySelector("article > h1").textContent);
const art = document.querySelector("article");
art.lastElementChild.remove();
const h2 = document.querySelector("article > h2");
h2.addEventListener ("click", changeBackground);
const h3 = document.querySelector("article > h3");
h3.addEventListener ("click", hideH3);
document.querySelector("h1").addEventListener ("click", randomSize);

function randomSize () {
    r = Math.floor(Math.random() * 101);
    document.querySelector("h1").style.fontSize = r+'px';
}
function changeBackground() {
    h2.style.backgroundColor = 'red';
}
function hideH3() {
    h3.style.display = 'None';
}
function makebold() {
    paragraphs = document.querySelectorAll("p");
    for (const p of paragraphs) {
        p.style.fontWeight = '800';
    }
}
function makeFade () {
    p2.classList.add("fadeout");
}

const btn = document.createElement("button");
btn.textContent = "Bold!";
btn.addEventListener("click", makebold);
art.appendChild(btn);

const p2 = document.querySelectorAll("p")[1];
p2.addEventListener("mouseover", makeFade);