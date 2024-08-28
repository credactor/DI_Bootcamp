function sayHi() {
    alert("Hello World");
  }
function addPar () {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    if (document.getElementById("container").childElementCount < 5) {
        document.getElementById("container").appendChild(p);
        return;
    }
    stopNow;
}
function stopNow() {
    clearInterval(timer);
}

setTimeout(sayHi, 2000);
setTimeout(addPar, 2000);
let timer = setInterval(addPar, 2000);
const btn = document.getElementById("clear");
btn.addEventListener("click", stopNow);

