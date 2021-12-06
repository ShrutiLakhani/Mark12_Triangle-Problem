const inputVal = document.querySelectorAll("#side-input");
const calcButton = document.querySelector("#calc-hypotenuse");
const outputVal = document.querySelector("#output");

function calcSumOfSquares(a,b)
{
  
  const sumOfSqaures = a*a + b*b;
  return sumOfSqaures;
  
}
function calculateHypotenuse()
{
 const sumOfSqaures = calcSumOfSquares(Number(inputVal[0].value), Number(inputVal[1].value));
 outputVal.innerText = "Hypotenuse is: " + sumOfSqaures;
 console.log(sumOfSqaures);
}
calcButton.addEventListener("click", calculateHypotenuse);