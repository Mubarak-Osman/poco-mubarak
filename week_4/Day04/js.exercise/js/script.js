/* global console, alert 
var myName = "osman",
    myAge = 32,
    myDiv = document.getElementById("test");
  //alert("Hello My Name is" + myName + "And My Age Is" + myAge);
  //document.write("Hello My Name is" + myName + "And My Age Is" + myAge);
  //myDiv.innerHTML= "Hello My Name Is" + myName + "And My Age Is" + myAge;
  //console.log("Hello My Name Is" + myName + "And My Age Is" + myAge);
*/
/*
var yourName = prompt ("Whats your Age?")
if (yourName<18) {
document.getElementById("test").innerHTML =
         "Sorry Your Age iS" + yourName + "You Are Not Welcome here"
} else{
  document.getElementById("test").innerHTML =
         " Your Age iS" + yourName + "You Are  Welcome here"
}

var myPrice = 20;

if (myPrice > 50) {
  alert ("Sorry The Price Is" + myPrice + "All I Have Is 50");
}  else   {
  alert("Bad Price");
}
*/
/*
function myAgeInSeconds() {
  "use strict";
  var myName = "Mubarak"
  var myAge = 21;
  return myAge * 365 * 24 * 60 * 60;
} 
var ageCalc = myAgeInSeconds();
document.getElementById("test").innerHTML = 
"My Age In Seconds = " + ageCalc + " Seconds";
*/

/*
function myAgeInDays(myAge) {
  "use strict";

  var myAge = 21;

  return myAge * 365;

} 
var ageCalc = myAgeInDays(21);
document.getElementById("test").innerHTML = 
"My Age In Days = " + ageCalc + " Days";
*/


function calcDays(age) {
   "use strict"
   var year = 365;
   return age * year;

}
var dynamicAge = prompt("Check How Old Are You In Days");
document.getElementById("test").innerHTML = calcDays(prompt("How"));