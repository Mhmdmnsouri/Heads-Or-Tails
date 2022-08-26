const coinArray = ['Heads', 'Tails'];
let score = [0, 0];
var message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
    let playerGuess = e.target.innerHTML;
    let computerToss = Math.floor(Math.random() * 2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "computer selected " + computerGuess + ', ';
    let output;

    if (playerGuess === computerGuess) {
        output = ' Player Win!';
        score[0]++;
    }
    else {
        output = ' Computer Win!'
        score[1]++;
    }
    message.innerHTML += output + "<br/> Player : " + score[0] + " computer : " + score[1];
}