'use strict';
// function getComputerPlay() {
//   return ['rock', 'paper', 'scissors'][parseInt(Math.random() * 3)];
// }
const getComputerPlay = () => ['rock', 'paper','scissors'][parseInt(Math.random() * 3)];

function playRound(playerGuess, computerGuess) {
 playerGuess = playerGuess.toLowerCase();
  if (
    playerGuess !== 'rock' &&
    playerGuess !== 'paper' &&
    playerGuess !== 'scissors'
  ) {
    console.log('Invalid Input');
    return;
  }
  if (playerGuess === computerGuess) {
    console.log("It's a tie!");
    return;
  }
  const winData = ({
    rock:     {scissors: true},
    paper:    {rock:    true },
    scissors: {paper:    true}
  });
  return winData[playerGuess][computerGuess]? 'win': 'lose';
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerGuess = prompt('rock, paper, or scissors?');
    computerGuess = getComputerPlay();
    const result = playRound(playerGuess, computerGuess);
    if (result === 'win') {
      playerScore++;
      console.log(`You win! ${playerGuess.toLowerCase()} beats ${computerGuess}.`);
    } else if (result === 'lose') {
      computerScore++;
      console.log(`You lose! ${computerGuess} beats ${playerGuess.toLowerCase()}.`);
    }
    console.log({ playerScore, computerScore });
  }
}
game();

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;

//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);