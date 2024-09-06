// Part 1 : Quote generator
//     Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.
//     In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…
//     Populate the array with a few quotes that you like.
//     When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
//         Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
// Part 2 : Add buttons
//     In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
//         Important: Don’t forget to set the id of the new quotes
//     In the HTML file, under the displayed quote, create a few more buttons:
//         A button that gives the number of character inside each quote (space included)
//         A button that gives the number of character inside each quote (space NOT included)
//         A button that gives the number of words in each quote
//         A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.
// Part 3 : Filter form
//     Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.
//     Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

const quotes = [
{
    id: 0,
    like: 0,
    quote: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston"
},
{
    id: 1,
    like: 0,
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
},
{
    id: 2,
    like: 0,
    quote: "Intelligence without ambition is a bird without wings.",
    author: "Salvador Dali"
},
{
    id: 3,
    like: 0,
    quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    author: "Epictetus"
},
{
    id: 4,
    like: 0,
    quote: "We may encounter many defeats but we must not be defeated.",
    author: "May Angelou"
},
{
    id: 5,
    like: 0,
    quote: "Problems are not stop signs, they are guidelines.",
    author: "Robert H. Schuller"
},
{
    id: 6,
    like: 0,
    quote: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama"
},
{
    id: 7,
    like: 0,
    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author: "Ayn Rand"
},
{
    id: 8,
    like: 0,
    quote: "A somebody was once a nobody who wanted to and did.",
    author: "John Burroughs"
},
{
    id: 9,
    like: 0,
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Dennis P. Kimbro"
},
{
    id: 10,
    like: 0,
    quote: "Even if you’re on the right track, you’ll get run over if you just sit there.",
    author: "Will Rogers"
},
{
    id: 11,
    like: 0,
    quote: "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
    author: "Ray Kroc"
},
{
    id: 12,
    like: 0,
    quote: "Courage is the first of human qualities because it is the quality which guarantees all others.",
    author: "Winston Churchill"
},
{
    id: 13,
    like: 0,
    quote: "The great thing in this world is not so much where you stand, as in what direction you are moving.",
    author: "Oliver Wendell Holmes"
},
{
    id: 14,
    like: 0,
    quote: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: "Carl Bard"
},
{
    id: 15,
    like: 0,
    quote: "Speak less than you know; have more than you show.",
    author: "William Shakespeare"
},
{
    id: 16,
    like: 0,
    quote: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser"
},
{
    id: 17,
    like: 0,
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
},
{
    id: 18,
    like: 0,
    quote: "Do not let what you cannot do interfere with what you can do.",
    author: "John Wooden"
},
{
    id: 19,
    like: 0,
    quote: "Defeat is not bitter unless you swallow it.",
    author: "Joe Clark"
},
{
    id: 20,
    like: 0,
    quote: "An obstacle is often a stepping stone.",
    author: "Prescott"
},
{
    id: 21,
    like: 0,
    quote: "Don’t worry about failures, worry about the chances you miss when you don’t even try.",
    author: "Jack Canfield"
},
{
    id: 22,
    like: 0,
    quote: "Live each day as if your life had just begun.",
    author: "Johann Wolfgang Von Goethe"
},
{
    id: 23,
    like: 0,
    quote: "The secret to getting ahead is getting started.",
    author: "Mark Twain"
},
{
    id: 24,
    like: 0,
    quote: "The will to win, the desire to succeed, the urge to reach your full potential, these are the keys that will unlock the door to personal excellence.",
    author: "Confucius"
},
{
    id: 25,
    like: 0,
    quote: "Set your goals high and don’t stop until you get there.",
    author: "Bo Jackson"
},
{
    id: 26,
    like: 0,
    quote: "The world is full of magical things patiently waiting for our wits to grow sharper.",
    author: "Bertrand Russell"
},
{
    id: 27,
    like: 0,
    quote: "Let us make our future now, and let us make our dreams tomorrow’s reality.",
    author: "Malala Yousafzai"
},
{
    id: 28,
    like: 0,
    quote: "All you need is the plan, the road map, and the courage to press on to your destination.",
    author: "Earl Nightingale"
},
{
    id: 29,
    like: 0,
    quote: "The glow of one warm thought is to me worth more than money.",
    author: "Thomas Jefferson"
},
];

let selected = [];
let sample = 0;
let lastSelected = 0;

clearArrows();
document.getElementById("like").setAttribute('disabled', '');
lastQuote = undefined;

function clearArrows() {
    selected = [];
    sample = 0;
    lastSelected = 0;
    document.getElementById("found").textContent = sample;
    document.getElementById("prev").setAttribute('disabled', '');
    document.getElementById("next").setAttribute('disabled', '');
}

function displayQuote (index) {
    document.getElementById("quote").textContent = quotes[index].quote;
    document.getElementById("author").textContent = quotes[index].author;
    document.getElementById("numAll").textContent = quotes[index].quote.length;
    document.getElementById("numChr").textContent = quotes[index].quote.replace(/\s+/g, '').length;
    document.getElementById("numWords").textContent = (quotes[index].quote.match(/\S+/g) || []).length;
    document.getElementById("numLikes").textContent = quotes[index].like;
    document.getElementById("like").removeAttribute('disabled', '');
}

function arrowStatus(indexSelected) {
    indexSelected > 0 ? document.getElementById("prev").removeAttribute('disabled', '') :
    document.getElementById("prev").setAttribute('disabled', '');
    indexSelected < sample-1 ? document.getElementById("next").removeAttribute('disabled', '') :
    document.getElementById("next").setAttribute('disabled', '');
}

let gen = document.getElementById("generator");
gen.addEventListener("click", function(e) {
    clearArrows();    
    let randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex === lastQuote) {
        randomIndex === 0 ? randomIndex ++ : randomIndex --
    }
    lastQuote = randomIndex;
    displayQuote (randomIndex);
})

let like = document.getElementById("like");
like.addEventListener("click", function() {
    quotes[lastQuote].like ++;
    document.getElementById("numLikes").textContent = quotes[lastQuote].like;
})

const form1 = document.getElementById('form1');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    clearArrows();
      const formData = new FormData(form1);
    new_author = formData.get("new_author");
    new_quote = formData.get("new_quote");
    if (new_author != "" && new_quote != "") {
        lastQuote = quotes.length;
        quotes.push({id: lastQuote, like: 0, quote: new_quote, author: new_author});
        displayQuote (lastQuote);
    }
    else {
        alert("Both fields must be filled in!");
    }
});

document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault();
    clearArrows();
    let request = document.getElementById('request').value.toLowerCase();
    if (request !== "" ) {
        selected = quotes.filter((quote) => quote.author.toLowerCase().includes(request));
        sample = selected.length        
        document.getElementById("found").textContent = sample;
        if (sample > 0) {
            lastSelected = 0;
            checkDisplay();
}}})

document.getElementById("prev").addEventListener("click", (e) => {
    e.preventDefault();
    lastSelected --;
    checkDisplay();
})

document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    lastSelected ++;
    checkDisplay();
})

function checkDisplay() {
    lastQuote = selected[lastSelected].id;
    displayQuote (lastQuote);
    arrowStatus (lastSelected);
}