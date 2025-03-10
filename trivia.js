let quiz_questions = [
  "Which programming language is known most for website interactivity?",
  "Which programming language is used to create the basic skeleton or outline of a webpage?",
  "What programming language is used to create color styles for a webpage?",
];

let quiz_answers = ["javascript", "html", "css"];
let used_answers = [];

function quiz(quiz_questions, quiz_answers) {
  let userScore = 0;
  let availablePoints = 3;
  let currentQuestionIndex = 0;
  let guesses = 3;

  function displayQuestion(i) {
    document.getElementById("question").innerText = quiz_questions[i];
  }

  function updateScore() {
    document.getElementById(
      "score"
    ).innerText = `Your total score is: ${userScore}`;
  }

  function displayFinalScore() {
    const totalPointsPossible = quiz_questions.length * 3;
    const percentageScore = ((userScore / totalPointsPossible) * 100).toFixed(
      2
    );
    document.getElementById(
      "final-score"
    ).innerText = `Your final score is: ${userScore} points (${percentageScore}%)`;
  }

  function nextQuestion() {
    currentQuestionIndex++;
    guesses = 3; // Reset guesses for the next question
    availablePoints = 3; // Reset available points for the next question
    if (currentQuestionIndex < quiz_questions.length) {
      displayQuestion(currentQuestionIndex);
      updateAnswerBank();
    } else {
      alert("Quiz completed!");
      updateScore();
      document.getElementById("quiz-container").style.display = "none";
      displayFinalScore();
    }
  }

  function updateAnswerBank() {
    let availableAnswers = quiz_answers.filter(
      (answer) => !used_answers.includes(answer)
    );
    document.getElementById("answer-bank").value = availableAnswers.join(", ");
  }

  displayQuestion(currentQuestionIndex);
  updateAnswerBank();

  document
    .getElementById("submit-answer")
    .addEventListener("click", function () {
      let userAnswer = document.getElementById("answer").value.toLowerCase();

      if (userAnswer === quiz_answers[currentQuestionIndex]) {
        userScore += availablePoints;
        used_answers.push(userAnswer);
        alert(
          `Nice work! The scorekeeper grants you the maximum number of possible points! You have scored ${availablePoints} points.`
        );
        nextQuestion();
      } else {
        guesses--;
        availablePoints--;
        alert(`Incorrect. You have ${guesses} guesses left. Please try again.`);

        if (guesses === 0) {
          alert(
            "No points will be awarded this time around. Let's move on to the next question."
          );
          nextQuestion();
        }
      }

      updateScore();
    });
}

// Create a date object with the current date
let date = new Date();
console.log("Current Date:", date);

// Lets also get the current time
let time = date.getTime();
console.log("Current Timestamp:", time);

// Display the date and time on the webpage
function displayDateTime() {
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString();
  let formattedTime = currentDate.toLocaleTimeString();
  document.getElementById(
    "current-date-time"
  ).innerText = `Current Date and Time: ${formattedDate} ${formattedTime}`;
}

// Call the function to display the date and time
displayDateTime();

// Function to display greeting based on the time of day
function timeGreet() {
  let currentHour = new Date().getHours();
  let timeGreeting;

  switch (true) {
    case currentHour < 12:
      timeGreeting = "Good Morning";
      break;
    case currentHour < 18:
      timeGreeting = "Good Afternoon";
      break;
    default:
      timeGreeting = "Good Evening";
  }

  return timeGreeting;
}

// Function to capitalize the first letter of the name
function capitalizeFirstLetter(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to greet the player and format their name
function greetPlayer() {
  let playerNameInput = prompt("Hello User! Please enter your name!");
  if (playerNameInput !== null) {
    let playerName = capitalizeFirstLetter(playerNameInput);
    let greeting = timeGreet();
    document.getElementById(
      "greeting"
    ).innerText = `${greeting}, ${playerName}!`;
  } else {
    document.getElementById("greeting").innerText = "User canceled the prompt.";
  }
}

// Function to validate email using a regular expression
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to prompt the user to enter an email address and validate it
function getEmailAndValidate() {
  let email;
  do {
    email = prompt("Please enter your email address:");
    if (email === null) {
      document.getElementById("email-info").innerText =
        "User canceled the prompt.";
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email address. Please try again.");
    }
  } while (!validateEmail(email));

  // Split the email address into username and domain
  const [username, domain] = email.split("@");
  const upperCaseUsername = username.toUpperCase();

  // Display the username and domain separately
  document.getElementById(
    "email-info"
  ).innerText = `Username: ${upperCaseUsername}, Domain: ${domain}`;
}

// Function to display a random quote of the day
function displayQuoteOfTheDay() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your time is limited, don't waste it living someone else's life.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteOfTheDay = quotes[randomIndex];

  document.getElementById(
    "quote-of-the-day"
  ).innerText = `Todays quote of the day is: ${quoteOfTheDay}`;
}

// Call the greetPlayer, getEmailAndValidate, and displayQuoteOfTheDay functions immediately when the script loads
document.addEventListener("DOMContentLoaded", function () {
  greetPlayer();
  getEmailAndValidate();
  displayQuoteOfTheDay();
});

// Add event listener to the button
document.getElementById("start-quiz").addEventListener("click", function () {
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("submit-answer").style.display = "block";
  quiz(quiz_questions, quiz_answers);
});
