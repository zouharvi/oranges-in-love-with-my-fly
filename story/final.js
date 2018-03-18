Final = function() {}

Final.prototype.create = function() {
 createSprite(0, 0, 'final_background', 3, 3);
 this.mirror = createSprite(670, 258, 'final_mirror', 3, 3);
 this.mirror.animations.add('come', [0, 1, 2, 3]);
 this.mirror.animations.add('breathe', [3, 4]);

 this.mirror.events.onAnimationComplete.add(function() {
  this.manStopWalk = true;
  this.mirror.animations.play('breathe', 0.6, true);
  this.man.animations.play('breathe', 0.6, true);
 }, this);

 this.man = createSprite(-30, 315, 'final_man_walk', 3, 3);
 this.man.animations.add('walk', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 this.man.animations.add('breathe', [0, 1]);
 this.man.animations.play('walk', 5, true);
 transitionOut();

 this.mirrorCame = false;
 this.manStopWalk = false;

 this.forgiveText = createText(20, 480, 'I forgive you', 'apple2', 2);
 this.forgiveText.alpha = 0;

 this.endG = game.add.group();
 this.endG.add(createSprite(0, 0, 'black', 900, 600));
 this.endG.add(createText(450, 290, 'the end', 'apple2', 3)).anchor.setTo(0.5, 0.5);
 this.endG.add(createText(5, 574, 'game by @ViliX64', 'apple2', 2));
 this.endG.visible = false;
 this.endG.alpha = 0;
}

Final.prototype.update = function() {
 if(!this.manStopWalk)
  this.man.x += 0.9;

 if(this.man.x >= 570 && !this.mirrorCame) {
  this.mirrorCame = true;
  this.mirror.animations.play('come', 5, false);
  game.time.events.add(4500, this.forgive, this);
 }
}

Final.prototype.forgive = function() {
 this.forgiveText.alpha = 0;
 var tween = game.add.tween(this.forgiveText);
 tween.to({alpha: 1}, 1900);
 tween.start();
 tween.onComplete.add(function() {
  game.time.events.add(4000, this.endGame, this);
 }, this);
}

Final.prototype.endGame = function() {
 this.endG.visible = true;
 var tween = game.add.tween(this.endG);
 tween.to({alpha: 1}, 1000);
 tween.start();
 game.time.events.add(7000, function() { transitionTo('map'); }, this);
}
