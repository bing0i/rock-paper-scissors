function computerPlay() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'error';
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  else if (playerSelection === 'scissors' && computerSelection === 'paper')
    return 1;
  else if (playerSelection === 'paper' && computerSelection === 'rock')
    return 1;
  else if (playerSelection === 'rock' && computerSelection === 'scissors')
    return 1;
  else return -1;
}
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach((button) =>
    button.addEventListener('click', function (e) {
      let computerSelection = computerPlay();
      let result = playRound(button.value, computerSelection);
      pResult = document.querySelector('.result');
      if (result === 1) {
        pResult.innerText =
          'You win, ' + button.value + ' beats ' + computerSelection;
        ++playerScore;
      } else if (result === -1) {
        pResult.innerText =
          'You lose, ' + computerSelection + ' beats ' + button.value;
        ++computerScore;
      } else pResult.innerText = 'Tie!';
      pResult2 = document.querySelector('.human-score');
      pResult2.innerText = 'Hooman score: ' + playerScore;
      let pResult3 = document.querySelector('.computer-score');
      pResult3.innerText = 'Computer score: ' + computerScore;
      if (playerScore === 5) {
        alert('Great, hooman!');
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        alert('Sorry, hooman!');
        playerScore = 0;
        computerScore = 0;
      }
    })
  );
}
playGame();
