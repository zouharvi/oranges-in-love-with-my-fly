Clock = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'clock', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5]);
 this.sprite.animations.add('crouch', [6, 7]);
 this.sprite.animations.add('shoot', [8, 9, 10, 11]);
 this.sprite.animations.add('die', [12, 13, 14, 15, 16]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 0;
 this.speed = 5;
 this.range = 150;
 this.accuracy = 0.6;
 this.health = 2;

 this.coverBonus = 0.2;
 this.openBonus = 0.4;
 this.coverAttackBonus = 1.4;
 this.openAttackBonus = 0.2;
 this.damage = 1;

 initTroop(this, row, yOffset);
}

Clock.prototype.update = function() {
 updateTroop(this);
}

Clock.prototype.cover = function() {
 troopCover(this);
}

Clock.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Clock.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 4 + Math. random() * 2, true);
}

Clock.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 8 + Math. random() * 2, true);
}

Clock.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 3 + Math. random() * 2);
}

Clock.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
