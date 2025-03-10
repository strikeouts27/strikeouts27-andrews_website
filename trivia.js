let quiz_questions = [
  "Which programming language is best known for web development?",
  "Which programming language is best known for data analysis?",
  "Which programming language is best known for mobile app development?",
  "Which programming language is best known for system programming?",
  "Which programming language is best known for artificial intelligence?",
  "Which programming language is best known for game development?",
  "Which programming language is best known for scientific computing?",
  "Which programming language is best known for enterprise applications?",
  "Which programming language is best known for scripting?",
  "Which programming language is best known for functional programming?",
];

let quiz_answers = [
  "javascript",
  "python",
  "swift",
  "c",
  "lisp",
  "c++",
  "fortran",
  "java",
  "perl",
  "haskell",
];
let used_answers = [];

function quiz(quiz_questions, quiz_answers) {
  let userScore = 0;
  let availablePoints = 1;
  let currentQuestionIndex = 0;
  let guesses = 1;

  function displayQuestion(i) {
    document.getElementById("question").innerText = quiz_questions[i];
  }

  function updateScore() {
    document.getElementById(
      "score"
    ).innerText = `Your total score is: ${userScore}`;
  }

  function showScore() {
    const totalPointsPossible = quiz_questions.length * availablePoints;
    const percentageScore = ((userScore / totalPointsPossible) * 100).toFixed(
      2
    );
    document.getElementById(
      "final-score"
    ).innerText = `Your total number of correct answers was ${userScore} and your percentage correct was ${percentageScore}%`;
    document.getElementById("final-score-container").style.display = "block";
  }

  function nextQuestion() {
    currentQuestionIndex++;
    guesses = 1;
    availablePoints = 1;
    if (currentQuestionIndex < quiz_questions.length) {
      displayQuestion(currentQuestionIndex);
      updateAnswerBank();
    } else {
      alert("Quiz completed!");
      showScore();
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateAnswerBank() {
    let availableAnswers = quiz_answers.filter(
      (answer) => !used_answers.includes(answer)
    );
    shuffleArray(availableAnswers);
    document.getElementById(
      "answer-bank"
    ).innerText = `Possible answers: ${availableAnswers.join(", ")}`;
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
        alert(`Nice work! You have scored ${availablePoints} points.`);
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

function displayDateTime() {
  let currentDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  let date = currentDate.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedTime = hours + ":" + minutes + " " + ampm;
  document.getElementById(
    "current-date-time"
  ).innerText = `Today is ${day}, ${month} ${date}, ${year}. It is ${formattedTime}.`;
}

function timeGreet() {
  let currentHour = new Date().getHours();
  if (currentHour < 12) return "Good Morning";
  if (currentHour < 18) return "Good Afternoon";
  return "Good Evening";
}

function capitalizeFirstLetter(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

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

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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

  const [username, domain] = email.split("@");
  const upperCaseUsername = username.toUpperCase();
  document.getElementById(
    "email-info"
  ).innerText = `Username: ${upperCaseUsername}, Domain: ${domain}`;
}

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
  ).innerText = `Today's quote of the day is: ${quoteOfTheDay}`;
}

function main() {
  greetPlayer();
  getEmailAndValidate();
  displayQuoteOfTheDay();
  displayDateTime();
  document.getElementById("start-quiz").addEventListener("click", function () {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-quiz").style.display = "none";
    document.getElementById("submit-answer").style.display = "block";
    quiz(quiz_questions, quiz_answers);
  });
}

document.addEventListener("DOMContentLoaded", main);
