import compareFunction from './compareFunction.js';

const userInput = document.getElementById('enter-guess');
const submitButton = document.getElementById('button');
const triesRemaining = document.getElementById('tries-remaining');
const box = document.getElementById('box');
const winDisplay = document.getElementById('winDisplay');
const lostDisplay = document.getElementById('lostDisplay');

let tries = 4;

const correctNumber = Math.round(Math.random() * 20) ;


submitButton.addEventListener('click', () => {
    tries--;
    triesRemaining.textContent = tries;
    if (compareFunction(Number(userInput.value), correctNumber) === 0) {
        submitButton.disabled = true;
        winDisplay.classList.remove('hidden');
        box.textContent = 'YAY! You Won!';
    }
    if (compareFunction (Number(userInput.value), correctNumber) === 1) {
        box.textContent = 'Your Guess is Too High';
    }
    if (compareFunction (Number(userInput.value), correctNumber) === -1) {
        box.textContent = 'Your Guess is Too Low';
    }
    if (tries === 0 && compareFunction(Number(userInput.Value), correctNumber) !== 0) {
        submitButton.disabled = true;
        lostDisplay.classList.remove('hidden');
        box.textContent = 'Oh No You Lost!';
    }
});



