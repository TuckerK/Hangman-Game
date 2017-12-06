// var words = ["this", "that", "some", "words"];
var words = {
    1: "launch",
    2: "orbit",
    3: "station",
    4: "houston",
    5: "nasa"
};

for (var key in words){
    console.log("The word is "+ words[key]);


var lettersGuessed = [];


document.onkeyup = function(event){
    var userChoice = event.keyCode();
    
    if(userChoice == words[key].charAt()){
    console.log("correct guess");
    } else {
        lettersGuessed.push(userChoice);
        console.log("wrong guess");
    }
};

}
