console.log("Hello World!");
var userScore = 0;
var pcScore = 0;

var array = ['rock', 'paper', 'scissors'];

function playRound(userS, computerS){
    user = userS.toLowerCase();
    computer = computerS.toLowerCase();

    if(user == null || !(array.includes(user))){
        return "Please select a correct value";
    }

    if(user == 'rock'){
        if(computer == 'scissors'){
            userScore++;
            return "You win! Rock beats Scissors.";
        } else if(computer == 'paper') {
            pcScore++;
             return "You lose! Rock loses to Paper.";
        } else {
            return "You draw! Rock draws with Rock.";
        }
    } else if(user == 'scissors'){
        if(computer == 'paper'){
            userScore++;
            return "You win! Scissors beats Paper.";
        } else if(computer == 'rock') {
            pcScore++;
             return "You lose! Scissors loses to Rock.";
        } else {
            return "You draw! Scissors draws with Scissors.";
        }
    } else {
        if(computer == 'rock'){
            userScore++;
            return "You win! Paper beats Rock.";
        } else if(computer == 'scissors') {
            pcScore++;
             return "You lose! Paper loses to Scissors.";
        } else {
            return "You draw! Paper draws with Paper.";
        }
    }
}

function computerPlay(){
    return array[Math.floor(Math.random() * array.length)];
}

for(var i = 0; userScore < 3 && pcScore < 3; i++){
    var playerSelection = prompt("Please select one of Rock, Paper, Scissors: ");
    var computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

if(userScore > pcScore){
    console.log("Congratulations! You won the game.");
} else {
    console.log("You lost the game.");
}