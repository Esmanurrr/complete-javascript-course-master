'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};
const check = document.querySelector('.check');
const again = document.querySelector('.again');
document.querySelector('.highscore').textContent = highscore;

check.addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number..');
  } else if (guess < 21 && guess > 0){
    if(guess === secretNumber){
      displayMessage('Correct Number!🥳');
      document.querySelector('body').style.backgroundColor = '#60d347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber){
      if(score > 1){
        displayMessage(guess > secretNumber ? 'Too High!📈': 'Too Low!📉');
        score--;
        document.querySelector('.score').textContent = score;
      }else {
        score = 0;
        document.querySelector('.score').textContent = score;
        displayMessage('Game Over!');
      }
    }
  } else {
    displayMessage('Select number between 1 and 20 ');
  }
});

again.addEventListener('click', function(){
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;

});