/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);


var x1 = 0;
var y1 = 0;
var x2 = W - 1;
var y2 = H - 1;
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    // console.error('bombDir', bombDir)

      if (bombDir.indexOf("U") !== -1) {
        y2 = Y0 - 1;
      } else if (bombDir.indexOf("D") !== -1) {
        y1 = Y0 + 1;
      }

      if (bombDir.indexOf("L") !== -1) {
        x2 = X0 - 1;
      } else if (bombDir.indexOf("R") !== -1) {
        x1 = Y0 + 1;
      }

      x = Math.trunc(x1 + (x2 - x1) / 2);
      y = Math.trunc(y1 + (y2 - y1) / 2);
      X0 = x
      Y0 = y

     
    // the location of the next window Batman should jump to.
     console.log(x + " "+y);
}