// JavaScript code for the Number Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let maxTrials = 3;
let currentTrials = 0;

// Function to start the game
function startGame() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('gameScreen').style.display = 'block';
}

// Function to check the user's guess
document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    currentTrials++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        document.getElementById('message').innerText = `Hurray! You guessed the correct number: ${randomNumber} in ${currentTrials} attempts!`;
        document.getElementById('message').style.color = "green";
        document.getElementById('submitGuess').disabled = true;  // Disable further guesses
    } 
    // Give a hint if the guess is too high or too low
    else if (userGuess > randomNumber) {
        document.getElementById('message').innerText = "Too high! Try a lower number.";
        document.getElementById('message').style.color = "orange";
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerText = "Too low! Try a higher number.";
        document.getElementById('message').style.color = "orange";
    }

    // Check if the player has exceeded the allowed number of trials
    if (currentTrials >= maxTrials && userGuess !== randomNumber) {
        document.getElementById('message').innerText = `You failed! The correct number was ${randomNumber}.`;
        document.getElementById('message').style.color = "red";
        document.getElementById('submitGuess').disabled = true;  // Disable further guesses
    }

    // Update attempts left
    document.getElementById('attemptsLeft').innerText = `Attempts left: ${maxTrials - currentTrials}`;
});

