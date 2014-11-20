function showMole(e) {
  e.animate({opacity: 0}, 100 );
}

function hideMole(e) {
  e.animate({opacity: 1.0}, 100 );
}

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}