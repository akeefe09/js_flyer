let CloudFunction = function() {
  let cloud = {
    X: Math.random() * width,
    Y: Math.random() * height,
    cloudImg: new Image(),
  };
  cloud.cloudImg.src = ("images/cloud" + Math.floor(Math.random()*2) + ".png")
}
