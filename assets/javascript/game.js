//array of list out all the options to guess
//   1.)all the alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//   8.)creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;
var guesses= 9;


//   6.)creates variables that hold references to place in the HTML where we want to display things
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

//   2.)function that run whenever a key is pressed
document.onkeyup = function(event) {

    //   3.)determines which key was pressed
    var userGuess = event.key

    //   4.)randomly chooses a letter from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //   5.)run the code blocks if the user presses .....
    if (userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"){

    //   9.)if/then statements 
        if(userGuess === computerGuess){

            wins++;

        }

        else{
            losses++;
        }

    }


    //   7.) Displays user and computer guesses.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses: " + guesses;

    //   alert the userGuess
    alert(userGuess);


}

