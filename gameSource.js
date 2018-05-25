
window.onload = function() {
  var screen = document.getElementById("canvas");
  var ctx = screen.getContext("2d");

  var heliImage = new Image();
  heliImage.src = "images/helicopter.png";

  var background = new Image();
  background.src = "images/background0.jpg";

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


  const space = 120;
  let gap = 242 + space;

  let heliX = 10;
  let heliY = 200;
  let fallRate = 2;

  document.addEventListener("keydown", moveUp);
  function moveUp() {
    heliY -= 40;
  }

  let pipe = [];
  pipe[0] = {
    x: screen.width,
    y: 0
  }

  let distance = 0;

  function draw() {
    ctx.drawImage(background, 0, 0);

    // ctx.fillStyle="blue"
    // ctx.fillRect(0,0,0,0);
    // ctx.globalAlpha=0.5;


    for (let i = 0; i < pipe.length; i++) {
      ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y - 150);
      ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + gap - 150);
      pipe[i].x-=2;
        // need to allow for speed changes
          // need to adjust x-= and the if condition
      if(pipe[i].x === 140) {
        pipe.push({
          x: screen.width,
          y: Math.floor(Math.random()*150)
        });
      }

      if(heliX + 75 >= pipe[i].x && heliX <= pipe[i].x + 52 &&
        (heliY <= pipe[i].y + 242 - 150 || heliY+30 >= pipe[i].y + gap - 150) ||
        heliY >= 500) {
          distance = 0;
          location.reload();
      }

      if(pipe[i].x === 10) {
        distance += 1;
      }
    }

    ctx.drawImage(heliImage, heliX, heliY);
    heliY += fallRate;

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Streak: " + distance, 20, 480)

    requestAnimationFrame(draw);
  }

  draw();

}
