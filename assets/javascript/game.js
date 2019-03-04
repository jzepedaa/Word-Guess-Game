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

// var tempTeam = new Array();

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

//document.addEventListener("keypress", (event) => {
//let keyword = String.fromCharCode(event.keycode)
//if(chosenWord.indexOf(keyword) > -1){

//i have the teams pictures. i was wonting them to be prompted to the screen
//and have the user basically try and type out the team based off the logo

//function to display the results
function display() {
  document.getElementById("guessesLeftCounter").innerHTML = totalGuesses;
  document.getElementById("blanks").innerHTML = blanksAndAnswers.join("");
  document.getElementById("wrongGuessesCounter").innerHTML = wrongGuess.join(
    ""
  );
}
//function if you guessed the right team
var won = function() {
  winsCount++;
  document.getElementById("status").innerHTML =
    " You Won!!" + " " + "Press any letter for next club!";
  document.getElementById("winCounter").innerHTML = winsCount;
  wordGuessGame.start();
};
//function if you lost and did not guess the word
var lost = function() {
  lossCount++;
  document.getElementById("status").innerHTML =
    "You Lost" + " " + "Press any letter for the next club!";
  document.getElementById("lossesCounter").innerHTML = lossCount;
  wordGuessGame.start();
};
//function to reset the wrong guessed letters
var reset = function() {
  totalGuesses = 10;
  document.querySelector("#wrongGuessesCounter").innerHTML = "";
};

//still trying to figure out how to make a picture
//pop up for every random word picked......

//constant values throughout the game
const wordGuessGame = {
  // function to start of the game
  start: function() {
    //starts total guesses at 10
    totalGuesses = 10;
    //gets a random word from array
    chosenWord = teamsList[Math.floor(Math.random() * teamsList.length)];
    //split brings word from array
    letters = chosenWord.split("");
    //grabs the length of the word
    bare = letters.length;
    //makes the array to any
    blanksAndAnswers = [];
    //makes an array for wrong guesses
    wrongGuess = [];
    //pushes out underscores for length of word
    for (var i = 0; i < bare; i++) {
      blanksAndAnswers.push("_");
    }
    console.log(chosenWord);

    // var replacingImage = function() {
    //   var tempTeam = chosenWord;

    //   if (tempTeam === "barcelona") {
    //     document.getElementById("clubLogo").src =
    //       "assets/images/BarcelonaLogo.png";
    //   }

    // var img = document.createElement("img");

    // img.src = "assets/images/BarcelonaLogo.png";
    // var src = document.getElementById("x");

    // src.appendChild(img);

    //   function ReplacingImage(){

    //     document.getElementById("x").src="image2.png"

    // }

    // if (chosenWord.innerHTML === "barcelona") {
    //   document.getElementById("clubLogo").src =
    //     "assets/images/BarcelonaLogo.png";
    //   $logo.addClass("../assets/images/BarcelonaLogo.png");
    //   $("#clubLogo").html(
    //     "<img src=' ../assets/images/BarcelonaLogo.png' />"
    //   );
    //   document.getElementById("clubLogo").innerHTML =
    //     '<img src="../assets/images/BarcelonaLogo.png"/>';
    // }

    //team logo image

    display();
  },
  //function that checks if guessed letter matches the word
  checker: function(letter) {
    //function to set chosen letter always to false
    var letterInWord = false;

    //for loop to see if the letter guessed matches a letter in word
    for (var j = 0; j < bare; j++) {
      if (chosenWord[j] === letter) {
        letterInWord = true;
        blanksAndAnswers[k] = letter;
      }
    }
    if (letterInWord) {
      for (var k = 0; k < bare; k++) {
        if (chosenWord[k] == letter) {
          blanksAndAnswers[k] = letter;
        }
      }
      //subtracts 1 from the total guesses if letter not in the word
    } else {
      wrongGuess.push(letter);
      totalGuesses--;
    }
  },
  //function for the end of the game
  end: function() {
    display();
    //calls for the won and reset function if you guessed the correct letters for the word
    if (letters.toString() === blanksAndAnswers.toString()) {
      won();
      reset();
      //calls for lost and reset functions if you have ran out of guesses
    } else if (totalGuesses === 0) {
      lost();
      reset();
    }
  }
};
//starts the game
wordGuessGame.start();

//grabs the letter pressed
document.addEventListener("keypress", event => {
  guessesLeft = String.fromCharCode(event.which).toLocaleLowerCase();
  wordGuessGame.checker(guessesLeft);
  wordGuessGame.end();
});
