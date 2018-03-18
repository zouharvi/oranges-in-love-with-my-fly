function CupOfTea() { 
 createSprite(enemySpawnX - 27, 377, 'cup_of_tea_background', 3, 3); 
 createSprite(enemySpawnX - 27, 445, 'cup_of_tea_floor', 2, 2); 
 this.sprite = createSprite(enemySpawnX - 30, 320, 'cup_of_tea', 3, 3); 
 createSprite(enemySpawnX - 70, 380, 'cup_of_tea_phone', 2, 2); 
 frames = [];
 this.sprite.animations.add('spawn', [0, 1, 2, 3, 4, 5]);
}

CupOfTea.prototype.startSpawning = function(row, name, strategy) {
 this.targetName = name;
 this.targetStrategy = strategy;
 this.sprite.animations.play('spawn', 10);
 this.sprite.events.onAnimationComplete.removeAll();
 this.sprite.events.onAnimationComplete.add(function() {
  this.sprite.events.onAnimationComplete.removeAll();
  new Squad(this.targetName, row, strategy);
  var sound = game.add.audio('projectile_enemy');
  sound.play();
  sound.volume = 0.2;
  this.sprite.frame = 0;
 }, this); 
}
