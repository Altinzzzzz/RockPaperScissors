/*for(var i = 0; userScore < 5 && pcScore < 5; i++){
    var playerSelection = prompt("Please select one of Rock, Paper, Scissors: ");
    var computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}*/

var main = document.querySelector('main');


var array = ['Rock', 'Paper', 'Scissors'];
const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');

const Rock = rockButton.id;
const Paper = paperButton.id;
const Scissors = scissorsButton.id;

var result = document.querySelector('.result');
var infResult = document.querySelector('.informativeResult');

var playerScore = document.querySelector('.playerScore');
var computerScore = document.querySelector('.computerScore');
var pScore = 0;
var cScore = 0;
var userQ = document.querySelector('.userQuestion');
var computerQ = document.querySelector('.computerQuestion');

var playAgain = document.querySelector('.inactive');
var pAB = document.querySelector('#inactiveButton');
var overlay = document.querySelector('.overlay');

function computerPlay(){
    return array[Math.floor(Math.random() * array.length)];
}

function playRoundR(){
    var computer = computerPlay();
    if(computer == 'Scissors'){
        
        userWon('Paper', 'Rock');
        testScore(pScore);

    } else if(computer == 'Paper') {
        
        computerWon('Rock', 'Paper');      
        testScore(cScore);

    } else {
        draw('Rock');
    }
}

function playRoundP(){
    var computer = computerPlay();
    if(computer == 'Rock'){
        
        userWon('Paper', 'Rock');
        testScore(pScore);

    } else if(computer == 'Scissors'){
        
        computerWon('Paper', 'Scissors');      
        testScore(cScore);

    } else {
        draw('Paper');
    }

}

function playRoundS(){
    var computer = computerPlay();
    if(computer == 'Paper'){

        userWon('Scissors', 'Paper');        
        testScore(pScore);

    } else if(computer == 'Rock') {
        
        computerWon('Scissors', 'Rock');      
        testScore(cScore);

    } else {
        draw('Scissors');
    }
}

function userWon(usersChoice, computersChoice){
    result.textContent = "You win!";
    result.style.color = "green";
    infResult.textContent = `${usersChoice} beats ${computersChoice}`;
    playerScore.textContent = ++pScore;
    userQ.style.color = "green";
    computerQ.style.color = "white";
}

function computerWon(usersChoice, computersChoice){
    result.textContent = "You lose!";
    result.style.color = "red";
    infResult.textContent = `${usersChoice} loses to ${computersChoice}`;
    computerScore.textContent = ++cScore;
    userQ.style.color = "white";
    computerQ.style.color = "red";
}

function draw(weapon){
    result.textContent = "You draw!";
    result.style.color = "white";
    infResult.textContent = `${weapon} draws with ${weapon}`;
    userQ.style.color = "white";
    computerQ.style.color = "white";
}

function testScore(Score){
    if(Score >= 5){
        if(Score == pScore){
            playAgain.firstElementChild.textContent = "You won";
            playAgain.firstElementChild.style.color = "green";
            playAgain.style.outline = "5px solid green";
            
        } else {
            playAgain.firstElementChild.textContent = "You lost"; 
            playAgain.firstElementChild.style.color = "red";
            playAgain.style.outline = "5px solid red"; 
        }

        main.style.opacity = "0.3";
        playAgain.style.display = "block";
        playAgain.lastElementChild.textContent = "Play Again?";
        overlay.style.display = "block";
    }
}

var whichOne;

whichOne = rockButton.addEventListener('click', playRoundR);
whichOne = paperButton.addEventListener('click', playRoundP);
whichOne = scissorsButton.addEventListener('click', playRoundS);


pAB.addEventListener('click', () => {
    playAgain.style.display = "none";
    
    pScore = 0;
    cScore = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    
    result.textContent = "Choose a weapon";
    result.style.color = "white";
    infResult.textContent = "First to score 5 points wins the game";
    
    userQ.style.color = "white";
    computerQ.style.color = "white";
    main.style.opacity = "1";
    overlay.style.display = "none";
});