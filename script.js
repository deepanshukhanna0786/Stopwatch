// Panel little animate
const cog = document.querySelector('.fas.fa-cog'), // Settings icon
      x = document.querySelector('.fas.fa-times'), // Close icon in the settings panel
      panel = document.querySelector('.panel');   // Settings panel

// Event listener for settings icon click to show the settings panel
cog.addEventListener('click', function() {
    panel.classList.add('active'); // Add 'active' class to show the panel
    cog.style.transform = `translateY(-100%)`; // Move the cog icon out of view
    cog.style.opacity = `0`; // Make the cog icon invisible
});

// Event listener for close icon click to hide the settings panel
x.addEventListener('click', function() {
    panel.classList.remove('active'); // Remove 'active' class to hide the panel
    cog.style.transform = `translateY(0%)`; // Move the cog icon back to its original position
    cog.style.opacity = `1`; // Make the cog icon visible
});

// Stopwatch logic
let hour = 0, minute = 0, second = 0; // Initialize variables for time
let interval; // Variable to store the interval ID
const startBtn = document.querySelector('.start'), // Start button
      stopBtn = document.querySelector('.stop'),   // Stop button
      resetBtn = document.querySelector('.reset'), // Reset button
      stHour = document.querySelector('.stHour'),   // Display for hours
      stMin = document.querySelector('.stMin'),     // Display for minutes
      stSec = document.querySelector('.stSec');     // Display for seconds

// Event listener for the start button to begin the stopwatch
startBtn.addEventListener('click', function(){
    clearInterval(interval); // Clear any existing intervals
    interval = setInterval(stopwatch, 1000); // Set a new interval to call the stopwatch function every second
});

// Event listener for the stop button to pause the stopwatch
stopBtn.addEventListener('click', function(){
    clearInterval(interval); // Clear the interval to stop the stopwatch
});

// Event listener for the reset button to reset the stopwatch to zero
resetBtn.addEventListener('click', function(){
    clearInterval(interval); // Clear the interval to stop the stopwatch
    hour = 0;  // Reset hours
    minute = 0; // Reset minutes
    second = 0; // Reset seconds
    stHour.textContent = "00"; // Update the hour display
    stMin.textContent = "00";  // Update the minute display
    stSec.textContent = "00";  // Update the second display
});

// Function to update the stopwatch display
function stopwatch() {
    second++; // Increment seconds
    if (second == 60) { // If seconds reach 60
        second = 0;  // Reset seconds to 0
        minute++;    // Increment minutes
        if (minute == 60) { // If minutes reach 60
            minute = 0;  // Reset minutes to 0
            hour++;     // Increment hours
        }
    }

    // Update the stopwatch display with leading zero if necessary
    stSec.textContent = second < 10 ? "0" + second : second;
    stMin.textContent = minute < 10 ? "0" + minute : minute;
    stHour.textContent = hour < 10 ? "0" + hour : hour;
}

// Day and Dark theme
const dark = document.querySelector(".dark"); // Dark theme radio button
const day = document.querySelector(".day");   // Day theme radio button
const main = document.querySelector("main")   // Main container

// Event listener for the day theme button
day.addEventListener('click', function() {
    main.classList.add("day-mode");  // Add 'day-mode' class for day theme
    main.classList.remove("dark-mode"); // Remove 'dark-mode' class for dark theme
});

// Event listener for the dark theme button
dark.addEventListener('click', function() {
    main.classList.add("dark-mode");  // Add 'dark-mode' class for dark theme
    main.classList.remove("day-mode"); // Remove 'day-mode' class for day theme
});
