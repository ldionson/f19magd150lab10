let capture;
let cam;
let delta = 0.01;

function setup() {
  createCanvas(900, 500, WEBGL);
  capture = createCapture(VIDEO);
  capture.size(200, 160);
  capture.hide();

  cam = createCamera();
  cam.pan(-0.6);
}

function draw() {
  background(101, 198, 244);
  fill(66, 181, 56)
  rect(-450, 100, 900, 300);

  beginShape();
  fill(163, 120, 24)
  vertex(-450, 100);
  vertex(-55, 60);
  vertex(85, 75);
  vertex(100, 100);
  endShape(CLOSE);

  let locX = mouseX - height / 4;
  let locY = mouseY - width / 2;

  push();
  translate(-width / 2.8, 0, 0);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  normalMaterial(250);
  fill(239, 216, 17)
  torus(55, 8, 30);
  pop();

  push();
  translate(-width / 5, 0, 0);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  normalMaterial(250);
  fill(239, 216, 17)
  torus(55, 8, 30);
  pop();

  push();
  translate(-width / 18, 0, 0);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  normalMaterial(250);
  fill(239, 216, 17)
  torus(55, 8, 30);
  pop();

  translate(width / 2.8, 0, 0);
  ambientMaterial(250);
  ambientLight(50);
  pointLight(0, 0, 255, locX, locY, 250);
  fill(17, 76, 239)
  sphere(180, 65);

  image(capture, -773, 100, 200, 160);

  cam.pan(delta);

  if (frameCount % 100 === 0) {
    delta *= -1;
}

}
