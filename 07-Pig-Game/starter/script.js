'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const player0Name = document.getElementById('name--0');
const player1Name = document.getElementById('name--1');

const player0Input = document.getElementById('player0-input');
const player1Input = document.getElementById('player1-input');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const showModal = document.querySelector('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const diceEl = document.querySelector('.dice');

let scores, activePlayer, currentScore, playing;

const init = function(){
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  
}
init();

const switchPlayer = function(){
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
      console.log(scores[activePlayer]);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

const resetForm = () => {
  player0Input.value = " ";
  player1Input.value = " ";
}

showModal.addEventListener('click', function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeModal = () => {
  modal.classList.add('hidden');
   overlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal);



form.addEventListener('submit', function(e){
  e.preventDefault();
  const player0Val = player0Input.value.trim();
  const player1Val = player1Input.value.trim();

  player0Name.textContent = player0Val === "" ? "Player 1" : player0Val;
  player1Name.textContent = player1Val === "" ? "Player 2" : player1Val;
  

  resetForm();
  closeModal();
})

