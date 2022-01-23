/* Algoritmi aloittaa keskimmäisestä luvusta (50) ja jatkaa puolittamalla jäljellä olevat luvut. Jos luku on suurempi kuin 50, algoritmi syöttää seuraavaksi luvun 75, joka on puolessa välissä jäljellä olevia lukuja. */

const maxNumber = 100;
const minNumber = 1;
const maxGuesses = 10;

let randomNumber = Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber
);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

const timer = document.querySelector(".aika");
const totalGuesses = document.querySelector(".arvaukset");
const solveButton = document.querySelector("#solveButton");
const guessedNumbers = document.querySelector(".guessedNumbers");
const solution = document.querySelector(".solution");

let guessCount = 1;
let resetButton;
let startTime = Date.now();
let counter = 0;
let array = [];

const solver = (higherNumber, lowerNumber) => {
  const guess = Math.floor((higherNumber + lowerNumber) / 2);
  let highNumber, lowNumber;

  array.push(guess);
  if (guess === randomNumber) {
    counter++;
    return;
  } else if (guess > randomNumber) {
    highNumber = guess - 1;
    lowNumber = lowerNumber;
    counter++;
  } else {
    highNumber = higherNumber;
    lowNumber = guess + 1;
    counter++;
  }
  try {
    solver(highNumber, lowNumber);
  } catch (e) {}
};

solveButton.addEventListener("click", () => {
  const solveNumber = document.createElement("button");
  solveNumber.addEventListener("click", solver(maxNumber, minNumber));

  guessedNumbers.innerHTML = "";
  array.forEach((guess) => {
    const p = document.createElement("p");
    p.innerHTML = guess;
    guessedNumbers.appendChild(p);
  });
  solution.innerHTML = "Solution: " + array[array.length - 1];
  totalGuesses.innerHTML = "Guesses: " + array.length;

  //Clear array and randomize new number
  array = [];
  randomNumber = Math.floor(
    Math.random() * (maxNumber + minNumber) + minNumber
  );
});

// VALMISTA OMAA KOODIA ALASPÄIN
const stopTimer = () => {
  const endTime = Date.now() - startTime;
  timer.textContent +=
    "You spent " + Math.floor(endTime / 1000) + " second(s) guessing numbers.";
};
const countGuesses = () => {
  totalGuesses.textContent +=
    "It took you only " + guessCount + " trie(s) to get it right.";
};

const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
    stopTimer();
    countGuesses();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
};

guessSubmit.addEventListener("click", checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
};
