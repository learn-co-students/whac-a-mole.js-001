$( document ).ready(function() {
  
  $(".mole").on("click", function() {
    var originalCount = parseInt($("#counter").text());
    $("#counter").text(originalCount += 1);
    $(this).hide();
  });

  // the below code calls on the play function found in game-functions.js
  // the play function calls on selectMole, then waits a second, then calls
  // on selectMole, then waits a second, you get the idea :)
  play();

});