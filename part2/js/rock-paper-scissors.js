 function RPS() {
    var valid = false;
    var userChoice;
    do {
        var choice = window.prompt("Choose Rock(1), Paper(2), or Scissors(3)");
        if (choice == "1") {
            valid = true;
            userChoice = "Rock";
        } else if (choice == "2") {
            valid = true;
            userChoice = "Paper";
        } else if (choice == "3") {
            valid = true;
            userChoice = "Scissors";
        } else {
            window.alert("Invalid selection. Please enter 1, 2, or 3");
        }
    } while (!valid);

    var computer = Math.random();
    var compString;
    if (computer < 0.33) {
        compString = "Rock";
    } else if ((computer > 0.33) && (computer < 0.66)) {
        compString = "Paper";
    } else {
        compString = "Scissors";
    }

    // Tie
    if (userChoice == compString) {
        // Run it back!
        window.alert("It's a tie! Select a choice again");
        RPS();
        return;
    }

    var str = "Computer selected " + compString + ".";
    if (userChoice == "Rock") {
        if (compString == "Paper") {
            // Lose
            window.alert(str + " You lose!");
        } else {
            // win
            window.alert(str + " You win!");
        }
    } else if (userChoice == "Paper") {
        if (compString == "Scissors") {
            // Lose
            window.alert(str + " You lose!");
        } else {
            // win
            window.alert(str + " You win!");
        }
    } else if (userChoice == "Scissors") {
        if (compString == "Rock") {
            // Lose
            window.alert(str + " You lose!");
        } else {
            // win
            window.alert(str + " You win!");
        }
    }
}

RPS();