Cog = function(row, yOffset, squad) {
 this.sprite = createSprite(140, 335, 'cog', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]);
 this.sprite.animations.add('crouch', [8, 9]);
 this.sprite.animations.add('shoot', [10]);
 this.sprite.animations.add('die', [11, 12, 13, 14, 15]);
  
 this.playWalk();
 
 this.squad = squad;

 this.projectileType = 1;
 this.speed = 9;
 this.range = 100;
 this.accuracy = 1;
 this.health = 1;

 this.coverBonus = 0.3;
 this.openBonus = 0.0;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0;
 this.damage = 0;

 initTroop(this, row, yOffset);
}

Cog.prototype.update = function() {
 updateTroop(this);
}

Cog.prototype.cover = function() {
 troopCover(this);
}

Cog.prototype.goCover = function() {
 this.targetX = this.curTile.x + 105;
 this.staying = true;
}

Cog.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 1 + Math. random(), true);
}

Cog.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 9 + Math. random() * 2, true);
}

Cog.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 3 + Math. random() * 2);
}

Cog.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
