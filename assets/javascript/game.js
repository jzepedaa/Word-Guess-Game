// alert("im here");

//Main Global Arrays

//activity 21 events finding a function
//that grabs a letter when clicked on the document

var teamsList = [
  "barcelona",
  "chelsea",
  "juventus",
  "liverpool",
  "manchesterunited",
  "psg",
  "realmadrid",
  "manchestercity",
  "atleticomadrid",
  "borussiadortmund"
];

//function to randomnize the array for chosen word
var chosenWord = "";

chosenWord = teamsList[Math.floor(Math.random() * teamsList.length)];
console.log(chosenWord);

//break up chosen word an array
var letters = [];

//how to build the array
// var letters = chosenWord.split("");
// console.log(letters);

//start game function
//run the randomnized word "line 24"
//run split on chosen word "line 30"
//grab blanksAndAnswers, run forloop and push in the number of blanks for
//i < chosenLetterBlanks
//show user how many blanks they have

//function to compare usersChoice to letters
var chosenLettersBlanks = letters.length;
//blank equals the length of the letters array
var blanks = 0;
//hold the let letter choices and blanks
var blanksAndAnswers = [];
//counting the number of wins and loses
var winsCount = 0;
var lossCount = 0;
//total guesses
var totalGuesses = 10;
//guesses left
var guessesLeft = 0;
//wrong guesses inside if array
var wrongGuesses = 0;

// How to grab the letters and display on screen
var userText = document.getElementById("blanks");
document.onkeyup = function(event) {
  console.log(event);
  userText.textContent = event.key;
};
