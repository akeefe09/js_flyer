const width = 500;
const height = 500;

var screen = document.getElementById("canvas");
screen.width = width;
screen.height = height;

var ctx = screen.getContext('2d');

var heliImage = new Image();
heliImage.src = "./assets/images/helicopter.png"

var background = new Image();
background.src = "./assets/images/background.jpg"

var CloudFunction = function() {
  var cloud = {
    X: Math.random() * width,
    Y: Math.random() * height,
    cloudImg: new Image(),
  };
  cloud.cloudImg.src = ("./assets/cloud" + Math.floor(Math.random()*2) + ".png")
}



function draw() {
  ctx.drawImage(heliImage, 100, 100, 50, 50);
  ctx.drawImage(background, 0, 0);

  requestAnimationFrame(draw);
}
