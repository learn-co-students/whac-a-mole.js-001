$( document ).ready(function() {
  
  $(".mole").on("click", function() {
    var originalCount = parseInt($("#counter").text());
    $("#counter").text(originalCount += 1);
    $(this).hide();
  });

  play();

});