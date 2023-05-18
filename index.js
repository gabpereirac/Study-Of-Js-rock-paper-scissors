
let computerMove = '';


function rNumber () {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove ='scissors' ; 
    }
    console.log(computerMove)
    let result = '';

    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'You Lose.';
    } else if (computerMove === 'scissors') {
        result = 'You Win.';
    }

    alert(`You Picker rock. Computer picked ${computerMove}, ${result}`);
}



function pNumber () {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove ='scissors' ; 
    }
    console.log(computerMove)
    let result = '';

    if (computerMove === 'rock') {
        result = 'You Win.';
    } else if (computerMove === 'paper') {
        result = 'Tie.';
    } else if (computerMove === 'scissors') {
        result = 'You Lose.';
    }

    alert(`You Picker paper. Computer picked ${computerMove}, ${result}`);
}

function sNumber () {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove ='scissors' ; 
    }
    console.log(computerMove)
    let result = '';

    if (computerMove === 'rock') {
        result = 'You Lose.';
    } else if (computerMove === 'paper') {
        result = 'You Win.';
    } else if (computerMove === 'scissors') {
        result = 'Tie.';
    }

    alert(`You Picker scissor. Computer picked ${computerMove}, ${result}`);
}
