// Ask for the user's name
let userName = prompt("What's your name?");

// Greet the user
if (userName !== null && userName !== "") {
  console.log(`Hello, ${userName}! Welcome to the JavaScript world.`);
} else {
  console.log("Hello, guest! Welcome to the JavaScript world.");
}
