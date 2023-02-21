let playerScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector('.playerScore');
const scoreComputer = document.querySelector('.computerScore');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');
const choiceWindow = document.querySelector('.choiceWindow');
const whoWins = document.querySelector('.whoWins');

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
