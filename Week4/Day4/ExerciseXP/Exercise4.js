// Write a JavaScript program to calculate the volume of a sphere. 

const form = document.getElementById('MyForm');
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const r = Number(radius.value);
    if (isNaN(r)) {
        return;
    }
    const v = 4/3 * Math.PI * r ** 3;
    volume.value = v;
}

