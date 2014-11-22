'use strict';

describe('Game:', function() {

  describe('Random Integer Generator', function() {

    it('accepts two values, a min and a max, and returns a random number', function() {      
      [[1,1],[1,3],[1,9]].forEach(function(arr) {
        var num = randomInt(arr[0],arr[1]);
        expect(num >= arr[0]).toBeTruthy();
        expect(num).toBeLessThan(arr[1] + 1);
      });
    });

  });

  describe("Select Mole", function() {

    beforeEach(function() {
      setFixtures('<!DOCTYPE html><html><head></head><body><div class="container"><div class="row"><div class="col-md-2"></div><div class="col-md-6"><img src="images/whac-a-mole.jpg"></div><div class="col-md-2"><table class="table table-bordered" id="scoreboard"><tr><td>Score</td></tr><tr><td id="counter">0</td></tr></table></div><div class="col-md-2"></div></div><div class="row"><div class="col-md-2"></div><div class="col-md-8 lawn"><table class="table"><tr id="top-row"></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-1" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-2" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-3" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-4" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-5" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-6" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-7" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-8" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-9" class="mole inv"><img src="images/mole.png" class="mole-pic"></div></div></div></td></tr></table></div><div class="col-md-2"></div></div></div></body></html>');
      var activeMole = $("#mole-num-2");
      activeMole.show();
    });

    it('hides a visible mole', function() {
      selectMole();
      setTimeout(function() {
        expect($("#mole-num-2").is(':visible')).toEqual(false);
      }, 1);
    });

    it('shows a new mole', function() { 
      selectMole();
      setTimeout(function() {
        expect($(".mole:visible")).toEqual(1);
      }, 1);
    });

  });

});
