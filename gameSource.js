
window.onload = function() {
  var screen = document.getElementById("canvas");
  var ctx = screen.getContext("2d");

  var heliImage = new Image();
  heliImage.src = "images/helicopter.png";

  var background = new Image();
  background.src = "images/background.jpg";

  var pipeTop = new Image();
  pipeTop.src = "images/pipetop.png";

  var pipeBottom = new Image();
  pipeBottom.src = "images/pipebottom.png";

  var CloudFunction = function() {
    var cloud = {
      X: Math.random() * width,
      Y: Math.random() * height,
      cloudImg: new Image(),
    };
    cloud.cloudImg.src = ("images/cloud" + Math.floor(Math.random()*2) + ".png")
  }

  const space = 100;
  let gap = 242 + space;

  let heliX = 10;
  let heliY = 200;
  let fallRate = 3;

  function draw() {
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(pipeTop, 200, 0);
    ctx.drawImage(pipeBottom, 200, 0+gap);
    ctx.drawImage(heliImage, heliX, heliY);
    heliY += fallRate;
    requestAnimationFrame(draw);
  }

  draw();

}
