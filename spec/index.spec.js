'use strict';

describe('Game:', function() {

  describe('randomInt()', function() {

    it('accepts two values, a min and a max, and returns a random number', function() {      
      [[1,1],[1,3],[1,9]].forEach(function(arr) {
        var num = randomInt(arr[0],arr[1]);
        expect(num >= arr[0]).toBeTruthy();
        expect(num).toBeLessThan(arr[1] + 1);
      });
    });
  });

  describe("selectMole()", function() {

    beforeEach(function() {
      setFixtures('<!DOCTYPE html><html><head><style>@import url(http://fonts.googleapis.com/css?family=Orbitron);body{background-color:#000;color:#fff}.lawn{background-color:green;border-radius:5px}.center{text-align:center}.full-width{width:100%}.hole{width:200px;height:100px;-webkit-border-radius:100px/50px;-moz-border-radius:100px/50px;border-radius:100px/50px;background-color:#000;position:relative;margin:0 auto;overflow:hidden}.table>tbody>tr>td,.table>tbody>tr>th{border-top:none}#hole-row{height:170px}#top-row{height:50px}.inv{display:none}img:hover{cursor:pointer}#scoreboard{font-family:Orbitron,sans-serif;margin-top:22px;font-size:2em;text-align:center;color:#F3EF26;border:5px solid #EE9333}.mole-pic{margin-top:-7px}</style></head><body><div class="container"><div class="row"><div class="col-md-2"></div><div class="col-md-6"><img src="images/whac-a-mole.jpg"></div><div class="col-md-2"><table class="table table-bordered" id="scoreboard"><tr><td>Score</td></tr><tr><td id="counter">0</td></tr></table></div><div class="col-md-2"></div></div><div class="row"><div class="col-md-2"></div><div class="col-md-8 lawn"><table class="table"><tr id="top-row"></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-1" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-2" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-3" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-4" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-5" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-6" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td></tr><tr id="hole-row"><td><div class="full-width center"><div class="circle hole"><div id="mole-num-7" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-8" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td><td><div class="full-width center"><div class="circle hole"><div id="mole-num-9" class="mole inv"><img src="public/images/mole.png" class="mole-pic"></div></div></div></td></tr></table></div><div class="col-md-2"></div></div></div></body></html>');
      var activeMole = $("#mole-num-2");
      activeMole.show();
    });

    it('hides a visible mole', function(done) {
      selectMole();
      setTimeout(function() {
        expect($("#mole-num-2").is(':visible')).toBe(false);
        done();
      }, 1000);
    });

    it('shows a new mole', function(done) {
      selectMole();
      setTimeout(function() {
        expect($(".mole:visible").length).toEqual(1);
        done();
      }, 1000);
    });

    it("doesn't select the same hole two times in a row", function(done) {
      var lastPosition = "no mole position yet!";
      var i = 0;

      function storeNextPosition() {
        var position = $(".mole:visible").attr('id');
        expect(position).not.toEqual(lastPosition);

        lastPosition = position;
        if (i++ < 4) {
          selectMole();
          setTimeout(storeNextPosition, 1000);
        } else {
          done();
        }
      }
      storeNextPosition();
    });
    
  });
});
