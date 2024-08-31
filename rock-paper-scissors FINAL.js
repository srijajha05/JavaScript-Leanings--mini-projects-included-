
let score = JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
    losses: 0,
    ties: 0

} ;

/*if (score === null){
score ={
    wins: 0,
    losses: 0,
    ties: 0

}

}*/

updateScoreElement();

function playGame(playerMove){
pickComputerMove();
    const compMove = pickComputerMove();
    console.log(compMove);

    var result ='';

if (playerMove === 'scissor'){ 
    if (compMove === 'rock'){
        result = 'You lose';
    }
    else if (compMove === 'paper'){
        result = 'You win';
    }
    else if (compMove === 'scissor'){
        result = 'Tie';
    }
}
else if (playerMove === 'paper'){
    if (compMove === 'rock'){
        result = 'You win';
    }
    else if (compMove === 'paper'){
        result = 'Tie';
    }
    else if (compMove === 'scissor'){
        result = 'You lose';
    }
}
else if (playerMove === 'rock'){
    if (compMove === 'rock'){
        result = 'Tie';
    }
    else if (compMove === 'paper'){
        result = 'You lose';
    }
    else if (compMove === 'scissor'){
        result = 'You win';
    }
}
if(result === 'You win'){
    score.wins += 1;
}
else if (result === 'You lose'){
    score.losses += 1;
}
else if (result == 'Tie'){
    score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = `You picked <img height="100px" src="images/${playerMove}.jpg">. Computer picked <img height="100px" src="images/${compMove}.jpg">`;

/*alert(`You picked ${playerMove}. Computer picked ${compMove}. Result : ${result} 
wins:${score.wins} losses:${score.losses} ties:${score.ties}`);*/
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `wins:${score.wins} losses:${score.losses} ties:${score.ties}`;

}


function pickComputerMove(){
var randomNumber = Math.random();
var compMove = '';
if(randomNumber>0 && randomNumber<1/3){
    compMove = 'rock';
}
else if (randomNumber>1/3 && randomNumber<2/3){
    compMove = 'paper';
}
else{
    compMove = 'scissor';
}
return compMove ;
}
