// A $( document ).ready() block.
$( document ).ready(function() {

	var wins = 0;
	var losses = 0;
	var userScore = new Array;

	var randomNumber = []
		for (var i = 19; i <= 120; i++) {
		randomNumber.push(i) };
	var bakerNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
	console.log(bakerNumber);

	var cupcakeValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var rainbow = {
		value: cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)] };
	var pink = {
		value: cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)] };
	var red = {
		value: cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)] };
	var chocolate = {
		value: cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)] };

	// console.log(rainbow);
	// console.log(pink);
	// console.log(red);
	// console.log(chocolate);

	function reset() {
		userScore = 0;
		bakerNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
		rainbow = cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)];
		pink = cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)];
		red = cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)];
		chocolate = cupcakeValues[Math.floor(Math.random() * cupcakeValues.length)];
	}; 


	// Set event on clicking a cupcake.
	$("#rainbow").on("click", function() {
		alert("yay");
	});

	// Assign cupcake var value to the click.


	// When a cupcake is clicked, it's value is added to the user's score.


	// When the user's score == the baker's number, the user wins & adds to wins counter.


	// If user score > baker's number, the user loses & adds to losses counter.


	// If user wins/loses: baker's number and cupcake values regenerate, user score back to 0.

});

