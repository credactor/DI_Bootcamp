// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
// In this exercise you work with the HTML code presented below.
// Follow these steps :
//     Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
//     Make sure the values are not empty
//     Write a story that uses each of the values.
//     Make sure you check the console for errors when playing the game.
//     Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

function getInput(e) {
    e.preventDefault();
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert ("Please fill in all fields!");
        return;
    }
    const madLibsArr = [
        `${adjective} ${person} was ${verb} in ${place} and had ${noun}.`,
        `While ${noun} in ${adjective} ${place}, ${person} had ${verb}.`,
        `${person} loves to travel to ${place} with ${adjective} ${noun} while ${verb}.`,
      ];
      const randomIndex = Math.floor(Math.random() * madLibsArr.length);
      document.getElementById("story").textContent = madLibsArr[randomIndex];

}

const btn = document.getElementById("lib-button");
btn.addEventListener("click", getInput);