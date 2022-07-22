var factList = [
  "14.4% of students enrolled in public education have disabilities",
  "In 2019, around 52% of students in public education enrollment were eligble for reduced price or free lunch meals at school",
  "23% of all allegations of bullying in school were based on discrimination of race or ethnicity",
  "11% of all allegations of bullying in school were based on discrimination of disabilities",
  "As of 2018, 28% of the 19 million students studying at american colleges or universities are 1st generation immigrants",
  "1/5 to 1/6 of the total amount of undocumented immigrant high school students drop out of high school yearly",
  "Students from families of low income have a 10% chance of dropping out",
  "There are around 65,000 undocumented students who graduate from a US highschool each year"];
/* above is the fact list for all the facts in the bank, there will be more to be added, but when you add one update the number in the displayFact funcion */

var randomFact = document.getElementById("randomFact");
var factButton = document.getElementById("factButton");
//declares the variables we need to use in index.html

factButton.addEventListener("click", displayFact);
//this activate funcion displayFact when the randomize botton is clicked

function displayFact(){
  console.log ("click");
  var count = Math.floor(Math.random()*7)+1;
  console.log (count);
  randomFact.innerHTML = factList[count];
}
//this function selects a fact randomly, more to be improved so that the same fact doesn't repeat
