const quizForm = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#submit-answer");
const OutputVal = document.querySelector("#output");

const correctAnswer = ["90°", "right-angled", "both a and b"];
function calculateScore()
{
 console.log("Yess");
 let score = 0;
 let index = 0;
 const formResults = new FormData(quizForm);
 for(let value of formResults.values())
 {
   if (value === correctAnswer[index])
   {
     score= score + 1;
   }
   index = index + 1;
 }
 console.log(score);
 OutputVal.innerText="Your Score is: " + score; 
}

submitAnswer.addEventListener("click", calculateScore);