function ImaginaryMan() {
 createSprite(10, 310, 'imaginary_man_floor', 2, 2); 
 this.sprite = createSprite(40, 200, 'imaginary_man', 3, 3); 
 this.sprite.animations.add('chill', [0, 1, 2, 3, 1]);
 frames = [];
 for(var i = 4; i < 12; i++) frames.push(i);
 this.sprite.animations.add('spawn', frames);
 this.sprite.animations.add('go_back', [12, 13, 14]);
}

ImaginaryMan.prototype.startSpawning = function(row, name) {
 this.targetName = name;
 this.sprite.animations.play('spawn', 8);
 this.sprite.events.onAnimationComplete.removeAll();
 this.sprite.events.onAnimationComplete.add(function() {
  this.sprite.events.onAnimationComplete.removeAll();
  new Squad(this.targetName, row, null);
  var sound = game.add.audio('projectile_ally');
  sound.play();
  sound.volume = 0.2;
  this.goBack();
 }, this); 
}

ImaginaryMan.prototype.goBack = function() {
 this.sprite.animations.play('go_back', 5);
 this.sprite.events.onAnimationComplete.add(function() {
  this.sprite.events.onAnimationComplete.removeAll();
  this.startChilling();
 }, this); 
}

ImaginaryMan.prototype.startChilling = function() {
 this.sprite.animations.play('chill', 1.5, true);
}
