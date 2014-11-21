var activeMole = $("#mole-num-1");
var num, selection;

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function selectMole() {
  selection = activeMole;
  while(selection.attr('id') == activeMole.attr('id')) {
    num = randomInt(1,9);
    selection = $("#mole-num-" + num.toString());
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
