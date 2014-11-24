function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function selectMole() {
  var selection = $(".mole:visible");
  while (selection.attr('id') == activeMole.attr('id')) {
    var num = randomInt(1,9);
    selection = $("#mole-num-" + num);
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
