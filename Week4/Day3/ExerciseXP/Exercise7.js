// Take a look at this link for help: https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript
// The point of this challenge is to display a list of two books on your browser.
//     In the body of the HTML page, create an empty section:
//     <section class="listBooks"></section>
//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//         title,
//         author,
//         image : a url,
//         alreadyRead : which is a boolean (true or false).
//     Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
//     Requirements : All the instructions below need to be coded in the js file:
//         Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//         For each book :
//             You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//             The width of the image has to be set to 100px.
//             If the book is already read. Set the color of the book’s details to red.

allBooks = [{title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', 
image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
alreadyRead: false}, {title: 'Winnie-the-Pooh', author: 'A.A. Milne ', image: 'https://m.media-amazon.com/images/I/71Joy8rn38L._AC_UF894,1000_QL80_.jpg', alreadyRead: true}];
 
for (book in allBooks) {
    item = document.createElement('div');    
    text = allBooks[book].title + " written by " + allBooks[book].author
    textnode = document.createTextNode(text);
    item.appendChild(textnode);
    if (allBooks[book].alreadyRead) {
        item.style.color = 'red';
    }    
    document.getElementsByClassName('listBooks')[0].appendChild(item);
    document.getElementsByTagName('div')[book].setAttribute('id', 'book'+book);
    img = document.createElement('img');
    img.src = allBooks[book].image;
    img.width = '100';
    container = document.querySelector('#book'+book);
    container.append(img);
}