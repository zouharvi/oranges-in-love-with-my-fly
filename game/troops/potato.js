Potato = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'potato', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5]);
 this.sprite.animations.add('crouch', [6, 7]);
 this.sprite.animations.add('shoot', [8]);
 this.sprite.animations.add('die', [9, 10, 11, 12, 13]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 1;
 this.speed = 4;
 this.range = 100;
 this.accuracy = 1;
 this.health = 4;

 this.coverBonus = 0.0;
 this.openBonus = 0.0;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0;
 this.damage = 0;

 initTroop(this, row, yOffset);
}

Potato.prototype.update = function() {
 updateTroop(this);
}

Potato.prototype.cover = function() {
 troopCover(this);
}

Potato.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Potato.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 1 + Math. random() * 2, true);
}

Potato.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 5 + Math. random() * 2, true);
}

Potato.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 3 + Math. random() * 2);
}

Potato.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
