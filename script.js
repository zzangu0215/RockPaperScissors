// Pseudo Code

var playerWins = 0;
var computerWins = 0;
var ties = 0;
var winStreak = 0;
//Website prompts "Do you want to play Rock, Paper, Scissors?"
//If yes, continue to line 7
//If no, jump to end
var userInput = confirm("Do you want to play Rock, Paper, Scissors?");
if (!userInput) {
  alert("OK.");
} else { 	
  playGame(); 
}

function playGame() {
	//Player picks R, P, or S
  var playerPick;
  while (playerPick !== 'r' && playerPick !== 'p' && playerPick !== 's') {
  	playerPick = prompt("Your choice. Type R, P, or S.");
    playerPick = playerPick.toLowerCase();
  }
	
  //Computer generates randomly R, P, or S
  var randomNum = Math.floor(Math.random() * 3);
  var computerPick;
  if (randomNum === 0) {
    computerPick = 'r'; 
  } else if (randomNum === 1) {
    computerPick = 'p'; 
  } else {
    computerPick = 's'; 
  }
  alert("The computer picked " + computerPick + ".");
  
	//Computer determines if player wins or loses or ties
  var result = compare(playerPick, computerPick);
  
  alert("You " + result + "!");
  
  if (result === 'won') {
    playerWins++;
    winStreak++;
  } else if (result === 'tied') {
    ties++;
  } else if (result === 'lost') {
    computerWins++;
    winStreak = 0;
  }
  
  alert("Your wins: " + playerWins +
        "\nYour ties: " + ties +
        "\nYour losses: " + computerWins + 
        "\nCurrent win streak: " + winStreak);
  
  var playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playGame(); 
  } else {
    alert("Thanks for playing!");
  }
}

function compare(playerPick, computerPick) {
  var result = 'tied';
  if (playerPick === computerPick) {
    result = 'tied';
  } else if (playerPick === 'r' && computerPick === 's') {
    result = 'won'; 
  } else if (playerPick === 'r' && computerPick === 'p') {
    result = 'lost'; 
  } else if (playerPick === 'p' && computerPick === 'r') {
    result = 'won';
  } else if (playerPick === 'p' && computerPick === 's') {
    result = 'lost';
  } else if (playerPick === 's' && computerPick === 'p') {
    result = 'won';
  } else if (playerPick === 's' && computerPick === 'r') {
    result = 'lost';
  }
  
  return result;
}


//Calculate total win/losses/ties

//Display them to the user

//Website prompts "Do you want to play again?"
//If yes, go back to line 7
//If no, say "Thank you for playing!"

