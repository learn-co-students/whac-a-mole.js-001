$( document ).ready(function() {
  
  var activeMole = $("#mole-hole-1");
  var num, selection;

  function selectMole() {
    selection = activeMole;
    while(selection.attr('id') == activeMole.attr('id')) {
      num = randomInt(1,9);
      selection = $("#mole-hole-" + num.toString());
    }
    activeMole.slideUp();
    activeMole = selection;
    activeMole.slideDown();

    // showMole(activeMole);
    // activeMole = selection;
    // hideMole(activeMole);
  }

  function play() {
    setInterval(function() {
      selectMole();
    }, 800);
  }

  $(".mole").on("click", function() {
    var originalCount = parseInt($("#counter").text());
    $("#counter").text(originalCount += 1);
    $(this).hide();
  });

  play();
});