/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  }
  // Game Item Objects
  var walker = {
    x: 50,
    speedX: 0,
    y: 50,
    speedY: 0
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  // Function to handle "keydown" events to control the walker movement
function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    walker.speedY = -5;  // Move up
  } else if (event.key === "ArrowDown") {
    walker.speedY = 5;   // Move down
  } else if (event.key === "ArrowLeft") {
    walker.speedX = -5;  // Move left
  } else if (event.key === "ArrowRight") {
    walker.speedX = 5;   // Move right
  }
}

// Function to handle "keyup" events to stop the walker movement
function handleKeyUp(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    walker.speedY = 0;   // Stop vertical movement
  } 
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    walker.speedX = 0;   // Stop horizontal movement
  }
}

// Register event listeners for "keydown" and "keyup"
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// The newFrame function is responsible for updating and redrawing the walker
function newFrame() {
  // Update walker's position based on its speed
  walker.x += walker.speedX;
  walker.y += walker.speedY;

  // Ensure the walker stays within the board boundaries
  wallCollision();

  // Redraw the walker at the new position
  repositionGameItem();
  redrawGameItem();
}

// Function to check for boundary collisions (from TODO 8)
function wallCollision() {
  let boardWidth = $("#board").width();
  let boardHeight = $("#board").height();

  if (walker.x < 0) {
    walker.x = 0;
  } else if (walker.x > boardWidth) {
    walker.x = boardWidth;
  }

  if (walker.y < 0) {
    walker.y = 0;
  } else if (walker.y > boardHeight) {
    walker.y = boardHeight;
  }
}

// Example of repositioning and redrawing the game item (this should already be implemented in your code)
function repositionGameItem() {
  // Update walker's position on the screen
  $("#walker").css({ left: walker.x, top: walker.y });
}

function redrawGameItem() {
  // This would be used to redraw or refresh the walker
  // It's useful if you need to animate or do additional rendering
}

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
