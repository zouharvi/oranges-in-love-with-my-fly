Orange = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'orange', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6]);
 this.sprite.animations.add('crouch', [7, 8]);
 this.sprite.animations.add('shoot', [9, 10]);
 this.sprite.animations.add('die', [11, 12, 13, 14, 15]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 0;
 this.speed = 3;
 this.range = 190;
 this.accuracy = 0.5;
 this.health = 3;

 this.coverBonus = 0.50;
 this.openBonus = 0;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0;
 this.damage = 1;

 initTroop(this, row, yOffset);
}

Orange.prototype.update = function() {
 updateTroop(this);
}

Orange.prototype.cover = function() {
 troopCover(this);
}

Orange.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Orange.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 4 + Math. random() * 2, true);
}

Orange.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 8 + Math. random() * 2, true);
}

Orange.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 3 + Math. random() * 2);
}

Orange.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
