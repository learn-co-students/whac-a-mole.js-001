'use strict';

describe('Game', function() {

  describe('Random Integer Generator', function() {

    [[1,1],[1,3],[1,9]].forEach(function(arr) {
      it('accepts two values, a min and a max, and returns a random number', function() {      
        var num = randomInt(arr[0],arr[1]);
        expect(num >= arr[0]).toBeTruthy();
        expect(num).toBeLessThan(arr[1] + 1);
      });
    });

  });

  describe("Select Mole", function() {

    beforeEach(function() {
      setFixtures('<!DOCTYPEhtml>\n<html>\n<head>\n<scriptsrc=\"/javascripts/jquery.js\"></script>\n<scriptsrc=\"/javascripts/bootstrap.min.js\"></script>\n<scriptsrc=\"/javascripts/jquery-ui.min.js\"></script>\n<scriptsrc=\"/javascripts/custom_functions.js\"></script>\n<scriptsrc=\"/javascripts/game.js\"></script>\n<linkhref=\"/stylesheets/bootstrap.min.css\"rel=\"stylesheet\">\n<linkhref=\"/stylesheets/custom.css\"rel=\"stylesheet\">\n<title>Whac-A-Mole</title>\n</head>\n<body>\n\n<divclass=\"container\">\n\n<divclass=\"row\">\n<divclass=\"col-md-2\"></div>\n<divclass=\"col-md-6\">\n<imgsrc=\"/images/whac-a-mole.jpg\">\n</div>\n<divclass=\"col-md-2\">\n<tableclass=\"tabletable-bordered\"id=\"scoreboard\">\n<tr><td>Score</td></tr>\n<tr><tdid=\"counter\">0</td></tr>\n</table>\n</div>\n<divclass=\"col-md-2\"></div>\n</div>\n\n<divclass=\"row\">\n<divclass=\"col-md-2\"></div>\n\n<divclass=\"col-md-8lawn\">\n<tableclass=\"table\">\n<trid=\"top-row\"></tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-1\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-2\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-3\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-4\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-5\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-6\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-7\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-8\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-9\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n</table>\n</div>\n\n<divclass=\"col-md-2\"></div>\n</div>\n</div>\n\n</body>\n</html>');
      var activeMole = $("#mole-num-2");
      activeMole.show();
    });

    it('hides a visible mole', function() {
      selectMole();
      expect($("#mole-num-2").is(':hidden')).toEqual(true);
    });

    it('shows a new mole', function() { 
      selectMole();
      expect($("#mole-num-2").is(':visible')).toEqual(false);
      expect($(".mole:visible")).toEqual(1);
    });

  });

  describe("Play", function() {

    beforeEach(function() {
      setFixtures('<!DOCTYPEhtml>\n<html>\n<head>\n<scriptsrc=\"/javascripts/jquery.js\"></script>\n<scriptsrc=\"/javascripts/bootstrap.min.js\"></script>\n<scriptsrc=\"/javascripts/jquery-ui.min.js\"></script>\n<scriptsrc=\"/javascripts/custom_functions.js\"></script>\n<scriptsrc=\"/javascripts/game.js\"></script>\n<linkhref=\"/stylesheets/bootstrap.min.css\"rel=\"stylesheet\">\n<linkhref=\"/stylesheets/custom.css\"rel=\"stylesheet\">\n<title>Whac-A-Mole</title>\n</head>\n<body>\n\n<divclass=\"container\">\n\n<divclass=\"row\">\n<divclass=\"col-md-2\"></div>\n<divclass=\"col-md-6\">\n<imgsrc=\"/images/whac-a-mole.jpg\">\n</div>\n<divclass=\"col-md-2\">\n<tableclass=\"tabletable-bordered\"id=\"scoreboard\">\n<tr><td>Score</td></tr>\n<tr><tdid=\"counter\">0</td></tr>\n</table>\n</div>\n<divclass=\"col-md-2\"></div>\n</div>\n\n<divclass=\"row\">\n<divclass=\"col-md-2\"></div>\n\n<divclass=\"col-md-8lawn\">\n<tableclass=\"table\">\n<trid=\"top-row\"></tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-1\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-2\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-3\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-4\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-5\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-6\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n<trid=\"hole-row\">\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-7\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-8\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n<td>\n<divclass=\"full-widthcenter\">\n<divclass=\"circlehole\">\n<divid=\"mole-num-9\"class=\"moleinv\">\n<imgsrc=\"images/mole.png\"class=\"mole-pic\">\n</div>\n</div>\n</div>\n</td>\n\n</tr>\n\n</table>\n</div>\n\n<divclass=\"col-md-2\"></div>\n</div>\n</div>\n\n</body>\n</html>');
    });

    it('calls on selectMole() every second', function() {
      gameFunctionFile = fopen('/public/javascripts/game-function.js', 0);
      var contents = fread(fh, length);
      fclose(gameFunctionFile);
      debugger;
    });

  });

});
