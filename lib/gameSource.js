// dom content loaded event listener
// draw modal on canvas with button for start/settings

// var Cloud = require('./clouds.js');
// var Helicopter = require('./helicopter.js');

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

  function opening() {
    var opening = new Image()
    opening.onload = function() {
      ctx.drawImage(opening, 1, 1);
    }
    opening.src = "images/opening.jpg";
  }

  opening();

  const space = 120;
  let gap = 242 + space;

  let heliX = 10;
  let heliY = 200;
  let fallRate = 2;
  let scrollSpeed = 2;
  let jumpUp = 40;

  document.addEventListener("keydown", flyUp);
  function flyUp() {
    heliY -= jumpUp;
  }

  let pipe = [];
  pipe[0] = {
    x: screen.width,
    y: 0
  }

  let distance = 0;

  let maxScore = 0;

  document.addEventListener("keydown", keyDifficulty, false);
  function keyDifficulty(event) {
    switch(event.keyCode) {
      case 72:
        scrollSpeed = 4;
        document.removeEventListener("keydown", keyDifficulty);
        draw();
      case 83:
        document.removeEventListener("keydown", keyDifficulty);
        draw();
    }
  }

  function draw() {
    ctx.drawImage(background, 0, 0);

    for (let i = 0; i < pipe.length; i++) {
      ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y - 150);
      ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + gap - 150);
      pipe[i].x -= scrollSpeed;

      if(pipe[i].x === 140) {
        pipe.push({
          x: screen.width,
          y: Math.floor(Math.random()*150)
        });
      }

      if(heliX + 75 >= pipe[i].x && heliX <= pipe[i].x + 52 &&
        (heliY <= pipe[i].y + 242 - 150 || heliY+30 >= pipe[i].y + gap - 150) ||
        heliY >= 500) {
          if (distance > maxScore) {
            maxScore = distance;
            if (distance === 0) {
              window.alert("Try again!")
            } else {
              window.alert("Your score was " + distance + ". Nice job!");
            }
          }
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
    ctx.fillText("Streak: " + distance, 20, 480);
    // ctx.fillText("Top streak: " + maxScore, 350, 480);

    requestAnimationFrame(draw);
  }
  // requestAnimationFrame(draw);


}
