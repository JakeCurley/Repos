// This example shows how to use a do...while loop
// to gather valid input from a user.

// In this case, we are using the prompt() function
// to get the user input.


// We could do something like this in a while loop as well
// Keep in mind that a while loop only executes if the loop condition is true
var rolls = 0;
var max = 0;
var highestRoll =0;
function startingMoney() {
      rolls = 0;
      max = 0;
      highestRoll = 0;
    var startingMoney = prompt("Please enter how much money you have to bet");
    while (startingMoney <= 0) {
      alert("You need money to play Lucky Sevens");
      startingMoney = prompt("Please enter how much money you have to bet");
    }
      document.getElementById("startingBet").innerText = startingMoney;
      document.getElementById("startBet").innerText = startingMoney;
      return false;
}

function rollDice() {
  while (document.getElementById("startingBet").innerText > 0) {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    rolls++;
    var mon = +document.getElementById("startingBet").innerText;
    if (mon > max){
      max = mon;
      highestRoll = rolls;
    }

    if (die1 + die2 !== 7) {
      mon--;
      document.getElementById("startingBet").innerText = mon;
      rollDice();
    }
    else {
      mon = mon + 4;
      document.getElementById("startingBet").innerText = mon;

      rollDice();
    }
  }
  document.getElementById("dice").style.display = "block";
  document.getElementById("results").style.display = "block";
  document.getElementById("rolls").innerText = rolls;
  document.getElementById("max").innerText = max;
  document.getElementById("highestRoll").innerText = highestRoll;
  document.getElementById("replayButton").style.display = "block";
  return false;
}

function playAgain() {
  document.getElementById("replayButton").style.display = "none";
  document.getElementById("dice").style.display = "none";
  document.getElementById("results").style.display = "none";
  startingMoney();
}
