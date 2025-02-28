document.getElementById("startGameButton").onclick = () => {
  let userScore = 0;
  let attemptsLeft = 50;
  let secretNumber = newSecretNumber();

  let guess = introduceGame();
  if (guess === null) return; // Exit if the user chose to quit

  while (userScore < 50 && attemptsLeft > 0) {
    if (guess === secretNumber) {
      userScore += 10;
      alert("Correct! You've earned 10 points!");
      if (userScore < 50) {
        // a new secret number is assigned
        secretNumber = newSecretNumber();
        guess = makeGuess();
        if (guess === null) return; // Exit if the user chose to quit
      }
    } else {
      attemptsLeft -= 1;
      alert(
        `I am sorry but that is not the correct number! You have ${attemptsLeft} tries left. You have a score of ${userScore}. Will you guess the secret number before you run out of attempts? Press Q to quit if you wish to exit.`
      );
      if (attemptsLeft === 0) {
        alert("YOU LOSE, GOOD DAY SIR!");
        break;
      }
      guess = makeGuess();
      if (guess === null) return; // Exit if the user chose to quit
    }

    if (userScore === 50) {
      alert(
        "YOU DID IT! YOU REACHED 50 POINTS! YOU WIN! YOU ARE OUR NEW CHAMPION!"
      );
      break;
    }
  }
};

function newSecretNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function makeGuess() {
  let guess = prompt(
    "A new secret number has been generated. Please attempt to guess the new secret number."
  );
  guess = guess.toUpperCase(); // Capitalize the input
  if (guess === "Q") {
    exitGame();
    return null; // Exit the function and indicate the user chose to quit
  }
  guess = parseInt(guess);
  while (isNaN(guess)) {
    guess = prompt("That's not a number! What's a number from 1 to 10?");
    guess = parseInt(guess);
  }
  return guess;
}

function introduceGame() {
  let guess = parseInt(
    prompt(
      "Hello user! Welcome to the secret number guessing game! Please guess a number from 1 to 10. Try to find the secret number before you run out of attempts!"
    )
  );
  while (isNaN(guess)) {
    guess = parseInt(
      prompt("That's not a number! What's a number from 1 to 10?")
    );
  }
  return guess;
}

function exitGame() {
  alert("You chose to quit the game. Goodbye!");
}

function gameOver() {
  alert("You lose! Good day sir!");
}
