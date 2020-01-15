function computerPlay() {
    let randomNumber =  Math.floor(Math.random() * Math.floor(3));
    switch(randomNumber) {
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
    let player = playerSelection.toLowerCase();
    if (player === computerSelection)
        return 0;
    else if (player === 'scissors' && computerSelection === 'paper')
        return 1;
    else if (player === 'paper' && computerSelection === 'rock')
        return 1;
    else if (player === 'rock' && computerSelection === 'scissors')
        return 1;
    else
        return -1;
}
function game() {
    let playerWin = 0;
    let computerWin = 0;
    let playerSelection = prompt('Rock, paper or scissors?');
    let computerSelection = computerPlay();
    if (playRound(playerSelection, computerSelection) === 1) {
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
        ++playerWin;
    }
    else if (playRound(playerSelection, computerSelection) === 0) {
        console.log('Tie!');
        ++playerWin;
        ++computerWin;
    }
    else {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        ++computerWin;
    }
    (playerWin === computerWin) ? console.log('Tie! (' + playerWin + ':' + computerWin + ')') : (playerWin > computerWin) ? 
            console.log('You Win! (' + playerWin + ':' + computerWin + ')') : 
            console.log('You Lose! (' + playerWin + ':' + computerWin + ')');
}
game();