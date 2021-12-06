const baseInp = document.querySelector(".base-inp");
const heightInp = document.querySelector(".height-inp");
const outputVal = document.querySelector("#output-val");
const btnVal = document.querySelector("#btn");

btnVal.addEventListener("click" , calcarea)

function calcarea()
{
 var baseVal = Number(baseInp.value);
 var heightVal = Number(heightInp.value);
 var result = (baseVal * heightVal) / 2
 outputVal.innerText = "The area of triangle is: " + result;
 
}


