
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

  let CloudFunction = function() {
    let cloud = {
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

  document.addEventListener("keydown", moveUp);
  function moveUp() {
    heliY -= 50;
  }

  let pipe = [];
  pipe[0] = {
    x: screen.width,
    y: 0
  }

  function draw() {
    ctx.drawImage(background, 0, 0);
    for (let i = 0; i < pipe.length; i++) {
      ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
      ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + gap);
    }
    ctx.drawImage(heliImage, heliX, heliY);
    heliY += fallRate;
    requestAnimationFrame(draw);
  }

  draw();

}
