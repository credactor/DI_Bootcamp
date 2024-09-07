// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
// Using an array method, check if all the elements in the array are starters.
// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

const menu = [
    {type : "starter", name : "Houmous with Pita"},
    {type : "starter", name : "Vegetable Soup with Houmous peas"},
    {type : "dessert", name : "Chocolate Cake"}]

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

console.log("Is a dessert? ", menu.some((value) => {return value.type == "dessert"}));
console.log("All the elements are starters? ", menu.every((value) => {return value.type == "dessert"}));
if (menu.some((value) => {return value.type == "main course"}) == false) {
    menu.push({type : "main course", name : "Peking duck"});    
}

menu.forEach((course, index) => {
    menu[index].vegetarian = vegetarian.some((value) => 
        {return course.name.toLowerCase().includes(value.toLowerCase())});
});

console.log(menu);