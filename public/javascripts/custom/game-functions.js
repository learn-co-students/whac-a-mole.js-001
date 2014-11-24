function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function selectMole() {
  var activeMole = $(".mole:visible");
  if(activeMole.length < 1) {
    activeMole = $("#mole-num-" + randomInt(1,9));
  }

  var selection = activeMole;
  while (selection.attr('id') == activeMole.attr('id')) {
    selection = $("#mole-num-" + randomInt(1,9));
  }

  activeMole.hide("slide", { direction: 'down' });
  activeMole = selection;
  activeMole.show("slide", { direction: 'down' });
}

function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
