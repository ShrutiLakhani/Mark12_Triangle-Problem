const angleInput1 = document.querySelector(".input-angle1");
const angleInput2 = document.querySelector(".input-angle2");
const angleInput3 = document.querySelector(".input-angle3"); 
const outputVal = document.querySelector(".output");

const btnCalc = document.querySelector("#btn-calculate");
function isTriangle()
{
  const sumOfAngles = calculateSumOfAngles(Number(angleInput1.value), Number(angleInput2.value), Number(angleInput3.value));
 if (sumOfAngles === 180)
  { 
   outputVal.innerText = "Yeah! It's a triangle"
  }
  else
  {
  outputVal.innerText = "Nah! It's not a triangle"
  }
  }
function calculateSumOfAngles(angle1, angle2, angle3)
{
    sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

btnCalc.addEventListener("click" , isTriangle);