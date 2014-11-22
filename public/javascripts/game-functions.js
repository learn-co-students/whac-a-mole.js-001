function randomInt(min,max) {
  // create a range that includes min and max and return a random number from it
}

function selectMole() {
  // here you're going to find what mole is visible
  // hide the visible mole

  // select a new mole to visible, making sure it isn't the same as the previous one
  // and make the new mole visible
}

// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
