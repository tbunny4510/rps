let playerScore = 0;
let computerScore = 0;
let randomizer = () => Math.floor(Math.random() * 3);

const scorePlayer = document.querySelector('.playerScore');
const scoreComputer = document.querySelector('.computerScore');
const choiceWindow = document.querySelector('.choiceWindow');
const whoWins = document.querySelector('.whoWins');
const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
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
