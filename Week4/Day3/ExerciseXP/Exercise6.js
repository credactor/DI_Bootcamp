// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
//     First, create a new <li> tag (use the createElement method).
//     Create a new text node with “Logout” as its specified text.
//     Append the text node to the newly created list node (<li>).
//     Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

document.getElementsByTagName('div')[0].setAttribute('id', 'socialNetworkNavigation');
newListItem = document.createElement('li');
newTextNode = document.createTextNode('Logout');
newListItem.appendChild(newTextNode);
document.getElementsByTagName('ul')[0].appendChild(newListItem);
document.getElementsByTagName('ul')[0].firstElementChild.textContent;
document.getElementsByTagName('ul')[0].lastElementChild.textContent;