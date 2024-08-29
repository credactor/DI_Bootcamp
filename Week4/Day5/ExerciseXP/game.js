const main = document.getElementById("main");
for (i = 0; i < 1440; i++) {
    cell = document.createElement('div');
    main.appendChild(cell);
}

let color = null;
let mousedown = false;
let btn = document.getElementsByTagName("button")[0];
let fill_blocks = document.querySelectorAll("#main > *");
let color_blocks = document.querySelectorAll("#sidebar > *");

main.addEventListener("mousedown", function(){
    mousedown = true;
})

main.addEventListener("mouseup", function(){
    mousedown = false;
})

btn.addEventListener("click", function(){
    for (block of fill_blocks){
        block.style.backgroundColor = "white";
    }
});

for (block of color_blocks){
    block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (block of fill_blocks){
    block.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    block.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}