import compareFunction from './compareFunction.js';

const userInput = document.getElementById('enter-guess');
const submitButton = document.getElementById('button');
const triesRemaining = document.getElementById('tries-remaining');
const box = document.getElementById('box');
const winDisplay = document.getElementById('winDisplay');
const lostDisplay = document.getElementById('lostDisplay');

let tries = 4;

const correctNumber = Math.round(Math.random() * 20) + 1;


submitButton.addEventListener('click', () => {
    let userGuess = Number(userInput.value);
    validGuess(userGuess);
    if (userGuess > 20 || userGuess < 1) return;
    tries--;
    triesRemaining.textContent = tries;
    if (compareFunction (userGuess, correctNumber) === 0) {
        submitButton.disabled = true;
        winDisplay.classList.remove('hidden');
        box.textContent = 'YAY! You Won!';
    }
    if (compareFunction (userGuess, correctNumber) === 1) {
        box.textContent = 'Your Guess is Too High';
    }
    if (compareFunction (userGuess, correctNumber) === -1) {
        box.textContent = 'Your Guess is Too Low';
    }
    if (tries === 0 && compareFunction (userGuess, correctNumber) === 0) {
        submitButton.disabled = true;
        winDisplay.classList.remove('hidden');
        box.textContent = 'YAY, You Won!';
    } else if (tries === 0) {
        submitButton.disabled = true;
        lostDisplay.classList.remove('hidden');
        box.textContent = 'Oh No You Lost!';
    }
});

function validGuess(userInput) {
    if (userInput > 20 || userInput < 1) {
        alert('You must choose a number between 1 and 20!')
        tries++;
    }

};

