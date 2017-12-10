var champions = [
  "Ashe",
  "Caitlyn",
  "Corki",
  "Draven",
  "Ezreal",
  "Graves",
  "Jhin",
  "Jinx",
  "Kalista",
  "Kindred",
  "Kogmaw",
  "MissFortune",
  "Quinn",
  "Sivir",
  "Tristana",
  "Twitch",
  "Varus",
  "Vayne",
  "Xayah"
];

var chosenWord = "";
var letterGuessed = [];
var displayArray = [];
var wordLetters = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessLimit = 10;

function begin() {
  //sets guess limit to 10 in the beginning and in new instances
  guessLimit = 10;
  //clears out display for new instance
  displayArray = [];
  //clears out the letters guessed for new instance
  wrongLetters = [];

  //chooses a random word from the array
  chosenWord = champions[Math.floor(Math.random() * champions.length)];

  console.log(chosenWord);

  //separates the chosen word letters into individual strings
  wordLetters = chosenWord.split("");

  //loops through chosen word to display underscores for each digit
  for (var i = 0; i < chosenWord.length; i++) {
    displayArray.push("_");
  }
  console.log(displayArray);
}

function wordLogic(x) {
  var inWord = false;
  for (i = 0; i < chosenWord; i++) {
    if (chosenWord[i] === x) {
        inWord = true;
    }
  }
}

begin();

document.onkeyup = function(event) {
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase;
  wordLogic();
};
