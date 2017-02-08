// A $( document ).ready() block.
$( document ).ready(function() {

// Game scorekeeping values.
	var game = {
		wins: 0,
		losses: 0,
		userScore: 0
	};

// Function for generating a random number.
	function getRandomNumber(minValue, maxValue){
		return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
	}

// The given random number that the user must match to win.
	var bakerNumber = getRandomNumber(19, 120);
// Displays the random Backer's number in HTML.
	document.querySelector("#randomNumber").innerHTML = bakerNumber;

// Generating random numbers and setting them as the cupcake values.
	var rainbow = $("#rainbow").attr("value", getRandomNumber(1, 12));
	var pink = $("#pink").attr("value", getRandomNumber(1, 12));
	var red = $("#red").attr("value", getRandomNumber(1, 12));
	var chocolate = $("#chocolate").attr("value", getRandomNumber(1, 12));

// Function to reset the game.
	function reset () {
		game.userScore = 0;
		bakerNumber = getRandomNumber(19, 120);
		document.querySelector("#randomNumber").innerHTML = bakerNumber;
		rainbow = $("#rainbow").attr("value", getRandomNumber(1, 12));
		pink = $("#pink").attr("value", getRandomNumber(1, 12));
		red = $("#red").attr("value", getRandomNumber(1, 12));
		chocolate = $("#chocolate").attr("value", getRandomNumber(1, 12));
	}

// Display variables in HTML. -- unable to make it this work this way.
	// $(game.wins).text("#wins");
	// $(game.losses).text("#losses");
	// $(game.userScore).text("#userTotal");
	// $(bakerNumber).text("#randomNumber");



// When the user clicks on one of the cupcakes...
	$(".cupcake").on("click", function(event) {

		// The cupcake value will be added to the User Score.
		game.userScore += parseInt($(this).attr("value"));
		
		// If the user wins (matches their Score to the Baker's Number)
		if (game.userScore === bakerNumber) {
			alert("You won! Have your cupcake and eat it too!");
			game.wins++;
			reset();
		
		// If the loses (User Score goes over the Backer's Number)
		} else if (game.userScore > bakerNumber) {
			alert(" Oh no, you've gone over! No cupcakes for you.");
			game.losses++;
			reset();
		}
	
// Display variables in HTML
	document.querySelector("#wins").innerHTML = "Wins: " + game.wins;
	document.querySelector("#losses").innerHTML = "Losses: " + game.losses;
	document.querySelector("#userTotal").innerHTML = game.userScore;

	});

});

