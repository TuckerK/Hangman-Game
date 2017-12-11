var champions = [
  "ashe",
  "caitlyn",
  "corki",
  "draven",
  "ezreal",
  "graves",
  "jhin",
  "jinx",
  "kalista",
  "kindred",
  "kogmaw",
  "missfortune",
  "quinn",
  "sivir",
  "tristana",
  "twitch",
  "varus",
  "vayne",
  "xayah"
];

var chosenWord = "";
var letterGuessed = [];
var displayArray = [];
var wordLetters = [];
var wrongLetters = [];
var underscores = 0;

var wins = 0;
var losses = 0;
var guessLimit = 10;

function begin() {
  guessLimit = 10;
  displayArray = [];
  wrongLetters = [];
  chosenWord = champions[Math.floor(Math.random() * champions.length)];

  console.log(chosenWord);

  wordLetters = chosenWord.split("");

  displayArray.join("%");

  underscores = wordLetters.length;  
  document.getElementById("directions").innerHTML = "Press some letters, Summoner!";

  for (var i = 0; i < chosenWord.length; i++) {
    displayArray.push(" _ ");
  }
  console.log(displayArray);
  document.getElementById("wrongLetters").innerHTML = wrongLetters;
  
  document.getElementById("displayArray").innerHTML = displayArray;
  
}

function wordLogic(x) {
  var inWord = false;
  for (var i = 0; i < underscores; i++) {
    if (chosenWord[i] === x) {
      inWord = true;
    }
  }
  if(inWord){
  for (var j = 0; j < underscores; j++){
    if (chosenWord[j] === x){
      displayArray[j] = x;
    }
  }
  console.log(displayArray);
} else {
  wrongLetters.push(x);
  document.getElementById("wrongLetters").innerHTML = wrongLetters + "";  
  guessLimit--;
}
document.getElementById("displayArray").innerHTML = displayArray;
}

function end(){
  if(wordLetters.toString() === displayArray.toString()){
    wins++;
    begin();
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("directions").innerHTML = "You Win! Try Again!";
    document.getElementById("victory-audio").play();      
    
    
  }else if(guessLimit == 0){
    losses++;
    begin();
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("directions").innerHTML = "You Lose! Try Again!";
    document.getElementById("defeat-audio").play();  
    
  }
}

begin();

document.onkeyup = function(event) {
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase("");
  document.getElementById("directions").innerHTML = "Press some letters, Summoner!";    
  wordLogic(letterGuessed);
  end();
  
};
