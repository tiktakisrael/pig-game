'use strict';

var player = 0;
let sumCurrent = 0;
var score = document.querySelector(`#score--${player}`);  
var current = document.querySelector(`#current--${player}`);



const swichX = ()=> player===0?player++:player--;
// swich player score
const swichScore = ()=>{
  score = document.querySelector(`#score--${player}`); 
};
// swich player Current score
const swichCurrent = function(){
  current = document.querySelector(`#current--${player}`);
};
// swich Player
const swichPlayer = function(){
  swichX();swichScore();swichCurrent();
};


// reset score players
const resetScore = function(){
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
};
// reset current score
const resetCurrent = function(){
  sumCurrent = 0;
  current.textContent = sumCurrent;
}; 






///hidde dice
let dice = document.querySelector('.dice');
let addHiddenDice = dice.classList.add('hidden');
resetScore();


const roll = document.querySelector('.btn--roll').addEventListener('click', function(){
  //roll number 
  const random = Math.trunc( Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${random}.png`;
  dice.classList.remove('hidden');
  
  if(random === 1){
    resetCurrent();
    swichPlayer();
  }else{
    sumCurrent += random;
    current.textContent = sumCurrent;
};
});

const hold = document.querySelector('.btn--hold').addEventListener('click',function(){
  if(Number( current.textContent) !== 0){
    score.textContent = Number( current.textContent) + Number(score.textContent);
    resetCurrent();
    swichPlayer();
  };
  if(Number(score.textContent) >= 100 ){

  }
});

const newGame = document.querySelector('.btn--new').addEventListener('click', function(){
  addHiddenDice = dice.classList.add('hidden');
  resetCurrent();
  resetScore();
})












































/*
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, current, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  current = 0;
  activePlayer = 0;
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
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      current += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = current;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += current;
    // scores[1] = scores[1] + current

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
*/