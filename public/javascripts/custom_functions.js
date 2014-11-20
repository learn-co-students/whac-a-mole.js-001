function showMole(e) {
  e.animate({opacity: 0}, 100 );
}

function hideMole(e) {
  e.animate({opacity: 1.0}, 100 );
}

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

  var activeMole = $("#mole-hole-1");
  var num, selection;

  function selectMole() {
    selection = activeMole;
    while(selection.attr('id') == activeMole.attr('id')) {
      num = randomInt(1,9);
      selection = $("#mole-hole-" + num.toString());
    }
    activeMole.hide("slide", { direction: 'down' });
    activeMole = selection;
    activeMole.show("slide", { direction: 'down' });

    // showMole(activeMole);
    // activeMole = selection;
    // hideMole(activeMole);
  }
