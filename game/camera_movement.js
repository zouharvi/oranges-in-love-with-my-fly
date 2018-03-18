CameraMovement = function() {
 this.SPEED = 16.0;
 this.mouseIn = true;
 game.input.mouse.mouseOutCallback = function() {
  cameraMovement.mouseIn = false;
 }
 game.input.mouse.mouseOverCallback = function() {
  cameraMovement.mouseIn = true;
 }
 updatables.push(this);
}

CameraMovement.prototype.update = function() {
 if(!this.mouseIn) 
  return;
  
 if(game.input.x > 0 && game.input.x < 65)
  game.camera.x -= this.SPEED;
 else if(game.input.x > 835 && game.input.x < 900)
  game.camera.x += this.SPEED;
}
