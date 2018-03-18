Spray = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'spray', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3]);
 this.sprite.animations.add('crouch', [4, 5]);
 this.sprite.animations.add('shoot', [6, 7]);
 this.sprite.animations.add('die', [8, 9, 10, 11, 12]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 0;
 this.speed = 6;
 this.range = 150;
 this.accuracy = 0.2;
 this.health = 1;

 this.coverBonus = 0.40;
 this.openBonus = 0;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0;
 this.damage = 1;

 initTroop(this, row, yOffset);
}

Spray.prototype.update = function() {
 updateTroop(this);
}

Spray.prototype.cover = function() {
 troopCover(this);
}

Spray.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Spray.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 1 + Math. random(), true);
}

Spray.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 6 + Math. random() * 2, true);
}

Spray.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 3 + Math. random() * 2);
}

Spray.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
