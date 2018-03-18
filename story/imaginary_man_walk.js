ImaginaryManWalk = function() {
 this.sprite = createSprite(60, 268, 'imaginary_man_walk', 4, 4); 
 this.sprite.fixedToCamera = true;
 
 this.step = 0;
 this.playing = false;
 this.sprite.animations.add('walkL', [0, 1, 2, 3, 4]);
 this.sprite.animations.add('walkR', [5, 6, 7, 8, 9]);
 this.sprite.events.onAnimationComplete.add(function() { 
  this.playing = false;
  this.testInput();
 }, this);
}

ImaginaryManWalk.prototype.testInput = function() {
 if(game.input.activePointer.isDown) {
  if(this.step == 0) {
   this.sprite.animations.play('walkR', 5, false);
   this.step = 1;
   this.playing = true;
  } else {
   this.sprite.animations.play('walkL', 5, false);
   this.step = 0;
   this.playing = true;
  }
 } else {
  this.sprite.frame = 0;
 }
}

ImaginaryManWalk.prototype.update = function() {
 if(game.input.activePointer.isDown) {
  if(!this.playing)
   this.testInput();
 }
 if(this.playing)
  storyTrigger.move(1);
}
