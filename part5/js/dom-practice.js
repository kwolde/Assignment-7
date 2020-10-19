/*eslint-env browser*/

//STEP 1
function clicked() {
    window.alert("I have been clicked");
}
//STEP 2
var btnTwo = document.getElementById("two");
btnTwo.onclick = function () {
    window.alert("I have been clicked");
}
//STEP 3
var btnTwo = document.getElementById("three");
btnTwo.addEventListener("click", showAlert);

function showAlert() {
    window.alert("I have been clicked");
}
//STEP 4
var btnFour = document.getElementById("four");
btnFour.addEventListener("click", function () {
    window.alert("I have been clicked");
});
//STEP 5
// The other code must be commented out for this to work
function five() {
    "use strict";
    var btnFive = document.getElementById("five");
    btnFive.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", five);