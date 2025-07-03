// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
const userGuess = prompt("I'm thinking of a number between 1 and 10. What is it?");

// Check if the user's guess matches the random number
if (parseInt(userGuess) === randomNumber) {
    console.log("Congratulations! You guessed the correct number!");
} else {
    console.log(`Sorry, the number I was thinking of was ${randomNumber}. Try again!`);
