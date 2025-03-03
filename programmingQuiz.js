let quiz_questions = [
  "Which programming language is known most for website interactivity?",
  "Which programming language is used to create the basic skeleton or outline of a webpage?",
  "What programming language is used to create color styles for a webpage?",
  "Which programming language is used for data science?",
];

let quiz_answers = ["JavaScript", "HTML", "CSS", "Python"];

function quiz(quiz_questions, quiz_answers) {
  let userScore = 0;
  let guesses = 3;
  let i = 0;
  let availablePoints = 3;

  function displayQuestion() {
    document.getElementById("question").innerText = quiz_questions[i];
  }

  function updateScore() {
    document.getElementById(
      "score"
    ).innerText = `Your total score is: ${userScore}`;
  }

  function nextQuestion() {
    i++;
    guesses = 3; // Reset guesses for the next question
    availablePoints = 3; // Reset available points for the next question

    if (i < quiz_questions.length) {
      displayQuestion();
    } else {
      alert("Quiz completed!");
    }
  }

  displayQuestion();

  document
    .getElementById("submit-answer")
    .addEventListener("click", function () {
      while (i < quiz_questions.length) {
        let userAnswer = document.getElementById("answer").value;

        if (userAnswer === quiz_answers[i]) {
          userScore += availablePoints;
          alert(
            `Nice work, you got it right! You scored ${availablePoints} points.`
          );
          nextQuestion();
        } else {
          guesses--;
          availablePoints--;
          alert(
            `Incorrect. You have ${guesses} guesses left. Please try to answer the question again!`
          );

          if (guesses === 0) {
            alert(
              "No points will be awarded this time around. Let's move on to the next question."
            );
            nextQuestion();
          }
        }

        updateScore();
        break; // Exit the while loop after processing the current question
      }
    });

  updateScore();
}

quiz(quiz_questions, quiz_answers);
