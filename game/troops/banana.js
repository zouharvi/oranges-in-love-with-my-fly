Banana = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'banana', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5]);
 this.sprite.animations.add('crouch', [6, 7]);
 this.sprite.animations.add('shoot', [8, 9, 10, 11, 12]);
 this.sprite.animations.add('die', [13, 14, 15, 16, 17]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 0;
 this.speed = 4;
 this.range = 210;
 this.accuracy = 1;
 this.health = 2;

 this.coverBonus = 0.7;
 this.openBonus = -0.8;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0.3;
 this.damage = 2;

 initTroop(this, row, yOffset);
}

Banana.prototype.update = function() {
 updateTroop(this);
}

Banana.prototype.cover = function() {
 troopCover(this);
}

Banana.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Banana.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 0.2 + Math.random(), true);
}

Banana.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 8 + Math.random() * 2, true);
}

Banana.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 9 + Math.random() * 2);
}

Banana.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
