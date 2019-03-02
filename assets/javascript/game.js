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

//break up chosen word an array
var letters = [];
//the length of the letters in the array
var bare = 0;
//hold the letter choices and blanks
var blanksAndAnswers = [];
//wrong guesses inside if array
var wrongGuess = [];
//guesses left
var guessesLeft = "";
//function to randomize the array for chosen word
var chosenWord = "";

//Counters
//counting the number of wins
var winsCount = 0;
//counting the number of
var lossCount = 0;
//total guesses
var totalGuesses = 10;

//how to build the array

//start game function
//run the randomized word
//run split on chosen word
//grab blanksAndAnswers, run forloop and push in the number of blanks for
//i < chosenLetterBlanks
//show user how many blanks they have

//function to compare usersChoice to letters
// var chosenLettersBlanks = letters.length;

// How to grab the letters and display on screen
// var userText = document.getElementById("blanks");
// document.onkeyup = function(event) {
//   console.log(event);
//   userText.textContent = event.key;
// };
//saw this on google and decided to try it out
//document.addEventListener("keypress", (event) => {
//let keyword = String.fromCharCode(event.keycode)
//if(chosenWord.indexOf(keyword) > -1){
// console.log(true)
//}

//trying to figure out where to add an if statement
//to +1 to losses when 0 guesses left

//displays the results throughout the game
function display() {
  document.getElementById("guessesLeftCounter").innerHTML = totalGuesses;
  document.getElementById("blanks").innerHTML = blanksAndAnswers.join("");
  document.getElementById("wrongGuessesCounter").innerHTML = wrongGuess.join(
    ""
  );
}

//displays that you have won
//adds 1 to the winscount
function won() {
  winsCount++;
  document.getElementById("status").innerHTML =
    " You Won!!" + " " + "Press any letter to to guess for next word!";
  document.getElementById("winCounter").innerHTML = winsCount;
  wordGuessGame.start();
}

//displays you have lost
//subtracts 1 from the total guesses
function lost() {
  lossCount++;

  document.getElementById("status").innerHTML =
    "You Lost" + " " + "Press any letter to start again for next word";
  document.getElementById("lossCounter").innerHTML = lossCount;
  wordGuessGame.start();
}

const wordGuessGame = {
  //picking a random word from the array teamsList
  //split used to get the word and display it horizontally on screen
  //answer comes out blank
  //all you see are underscores for the length of the word.
  start: function() {
    totalGuesses = 10;
    //randomly choosing a word from teamsList
    chosenWord = teamsList[Math.floor(Math.random() * teamsList.length)];
    //dosplaying the chosen word
    letters = chosenWord.split("");
    bare = letters.length;
    blanksAndAnswers = [];
    wrongGuess = [];
    for (var i = 0; i < bare; i++) {
      blanksAndAnswers.push("_");
    }
    display();

    // console.log(start);
  },

  //function to check what letter you pick and if they match the word
  checker: function(letter) {
    var letterInWord = false;
    for (var j = 0; j < bare; j++) {
      if (chosenWord[j] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (var k = 0; k < bare; k++) {
        if (chosenWord[k] == letter) {
          blanksAndAnswers[k] = letter;
        }
      }
    } else {
      wrongGuess.push(letter);
      totalGuesses--;
    }
  },
  //Function if you run out of guesses and lose
  end: function() {
    display();
    if (letters.toString() === blanksAndAnswers.toString()) {
      won();
    } else if (totalGuesses === 0) {
      lost();
    }
  }
};

//this needs to be here for when the game is over
//it will be called to start again
wordGuessGame.start();

// console.log(wordGuessGame);

//tracks the letters pressed for the entire page
//this section works with the

document.addEventListener("keypress", event => {
  guessesLeft = String.fromCharCode(event.which).toLocaleLowerCase();
  wordGuessGame.checker(guessesLeft);
  wordGuessGame.end();
});
