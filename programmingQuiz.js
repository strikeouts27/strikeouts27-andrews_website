let quiz_questions = [
  "Which programming language is known most for website interactivity?",
  "Which programming language is used to create the basic skeleton or outline of a webpage?",
  "What programming language is used to create color styles for a webpage?",
];

let quiz_answers = ["Javascript", "HTML", "CSS"];

function quiz(quiz_questions, quiz_answers) {
  let userScore = 0;
  let availablePoints = 3;

  function displayQuestion(i) {
    document.getElementById("question").innerText = quiz_questions[i];
  }

  function updateScore() {
    document.getElementById(
      "score"
    ).innerText = `Your total score is: ${userScore}`;
  }

  function nextQuestion() {
    guesses = 3; // Reset guesses for the next question
    availablePoints = 3; // Reset available points for the next question
  }

  for (let i = 0; i < quiz_questions.length; i++) {
    let guesses = 3;
    let userAnswer = "";

    while (guesses > 0) {
      userAnswer = prompt(quiz_questions[i]);

      if (userAnswer.toUpperCase() === quiz_answers[i].toUpperCase()) {
        userScore += availablePoints;
        alert(
          `Nice work! The scorekeeper grants you the maximum number of possible points! You have scored ${availablePoints} points.`
        );
        break; // Exit the while loop if the answer is correct
      } else {
        guesses--;
        availablePoints--;
        alert(`Incorrect. You have ${guesses} guesses left. Please try again.`);
      }

      if (guesses === 0) {
        alert(
          "No points will be awarded this time around. Let's move on to the next question."
        );
      }
    }

    nextQuestion();
    updateScore();
  }

  alert("Quiz completed!");
  updateScore();
}

// Add event listener to the button
document.getElementById("start-quiz").addEventListener("click", function () {
  quiz(quiz_questions, quiz_answers);
});
