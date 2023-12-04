// timer.js

document.addEventListener("DOMContentLoaded", function () {
  var timerElement = document.getElementById("navbar-timer");
  var startPauseButton = document.getElementById("startPauseBtn");
  var stopButton = document.getElementById("stopBtn");
  var timerRunning = false;
  var intervalId; // To store the interval ID
  var startTime;

  function updateTimer() {
    if (timerRunning) {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;

      var minutes = Math.floor(elapsedTime / (1000 * 60));
      var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

      timerElement.textContent = pad(minutes) + ":" + pad(seconds);
    }
  }

  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function toggleTimer() {
    timerRunning = !timerRunning;
    if (timerRunning) {
      startTime = new Date().getTime();
      intervalId = setInterval(updateTimer, 1000);
    } else {
      clearInterval(intervalId); // Clear the interval when stopping
    }
    startPauseButton.textContent = timerRunning ? "Pause" : "Start";
  }

  function stopTimer() {
    timerRunning = false;
    clearInterval(intervalId);
    startPauseButton.textContent = "Start";
    timerElement.textContent = "00:00";
  }

  // Add event listeners to buttons
  startPauseButton.addEventListener("click", toggleTimer);
  stopButton.addEventListener("click", stopTimer);
});

function cancelLogin() {
  window.location.href = "../sites/home.html";
}

function cancelSignUp() {
  window.location.href = "../sites/home.html";
}
