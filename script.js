let playerScore = 0;
let computerScore = 0;
let randomizer = () => Math.floor(Math.random() * 3);

const scorePlayer = document.querySelector('.playerScore');
const scoreComputer = document.querySelector('.computerScore');
const choiceWindow = document.querySelector('.choiceWindow');
const whoWins = document.querySelector('.whoWins');
const btns = document.querySelectorAll('button');

let tie = () => {
    whoWins.textContent = "It's a tie!";
}

let win = () => {
    whoWins.textContent = "You won!";
    playerScore++;
}

let lose = () => {
    whoWins.textContent = "Computer won!";
    computerScore++;
}

let rock = (playerSelection, computerSelection) =>
    (computerSelection === "scissors") ? win() :
        (computerSelection === "paper") ? lose() : tie();

let paper = (playerSelection, computerSelection) =>
    (computerSelection === "rock") ? win() :
        (computerSelection === "scissors") ? lose() : tie();

let scissors = (playerSelection, computerSelection) =>
    (computerSelection === "paper") ? win() :
        (computerSelection === "rock") ? lose() : tie();

function computerChoice(num) {
    switch(num) {
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissors';
    }
}

let final = (pScore, cScore) => {
    if(pScore > cScore) {
        choiceWindow.textContent = "You got to 5 wins first!";
        whoWins.textContent = "You win!";
    } else {
        choiceWindow.textContent = "Computer got to 5 wins first!";
        whoWins.textContent = "You lose!";
    }
}

let playRound = (playerChoice, compChoice) => {
    (playerChoice === "rock") ? rock(playerChoice, compChoice) :
        (playerChoice === "paper") ? paper(playerChoice, compChoice) :
        scissors(playerChoice, compChoice);

    choiceWindow.textContent = `${playerChoice} vs ${compChoice}`;
    scorePlayer.textContent = `Player: ${playerScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5)
        final(playerScore, computerScore);
};

btns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerChoice(randomizer()));
    });
});

/*
function updateScore(whoWins) {
    if(whoWins === "Player Wins") {
        playerScore++;
    } else if (whoWins === "Player Loses") {
        computerScore++;
    }
    scorePlayer.textContent = `Player: ${playerScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    scorePlayer.textContent = 'Player: 0';
    scoreComputer.textContent = 'Computer: 0';
}

rockButton.addEventListener('click', () => updateScore("Player Wins"));
paperButton.addEventListener('click', () => updateScore("Player Loses"));
scissorButton.addEventListener('click', () => reset());
*/
