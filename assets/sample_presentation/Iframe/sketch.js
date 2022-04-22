/*
 * @name Patterns
 * @description Move the cursor over the image to draw with a software tool
 * which responds to the speed of the mouse.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180,196,217);
}

function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  stroke(64,55,14);
  fill(242,116,5);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  strokeWeight(speed*0.1);
  ellipse(x, y, speed, speed);
}