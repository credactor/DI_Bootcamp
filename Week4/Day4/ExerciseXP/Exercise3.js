// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example: http://www.java2s.com/example/javascript/dom-event/addeventlistenermouseover-mouseover.html

let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName('strong');
}
function highlight() {
    getBoldItems();
    for (const item of allBoldItems) {
        item.style.color = 'blue';
    }
}
function returnItemsToDefault() {
    getBoldItems();
    for (const item of allBoldItems) {
        item.style.color = 'black';
    }
}

const p = document.querySelector('p');
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);