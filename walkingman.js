// Get references to the man image and buttons
let man = document.getElementById('man');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

let walking;
let position = 0;

// Function to start the walking animation
function startWalking() {
    walking = setInterval(() => {
        position += 5; // Move the man 5 pixels to the right
        man.style.transform = `translateX(${position}px)`; // Apply the transformation

        // Reset position if the man goes off-screen
        if (position > window.innerWidth) {
            position = -man.offsetWidth; // Start from the left edge again
        }
    }, 50); // The interval time for the animation (50 milliseconds)
}

// Function to stop the walking animation
function stopWalking() {
    clearInterval(walking); // Stop the interval and thus the walking animation
}

// Add event listeners to the buttons
startButton.addEventListener('click', startWalking);
stopButton.addEventListener('click', stopWalking);