Flashlight = function(row, yOffset, squad) {
 this.sprite = createSprite(enemySpawnX-42, 485, 'flashlight', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]);
 this.sprite.animations.add('crouch', [8, 9]);
 this.sprite.animations.add('shoot', [10, 11, 12, 13, 14, 15, 16]);
 this.sprite.animations.add('die', [17, 18, 19, 20, 21]);
  
 this.playWalk();

 this.squad = squad;

 this.projectileType = 1;
 this.speed = 5;
 this.range = 140;
 this.accuracy = 0.45;
 this.health = 2;

 this.coverBonus = 0.25;
 this.openBonus = 0;
 this.coverAttackBonus = 0.6;
 this.openAttackBonus = 0;
 this.damage = 1;

 initEnemyTroop(this, row, yOffset);
}

Flashlight.prototype.update = function() {
 updateEnemyTroop(this);
}

Flashlight.prototype.cover = function() {
 enemyTroopCover(this);
}

Flashlight.prototype.goCover = function() {
 this.targetX = this.curTile.x + 170;
 this.staying = true;
}

Flashlight.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 2 + Math.random() * 2, true);
}

Flashlight.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 7 + Math.random() * 2, true);
}

Flashlight.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 8 + Math. random() * 2);
}

Flashlight.prototype.playDie = function() {
 if(!this.dead)  this.sprite.animations.play('die', 8 + Math. random() * 2);
}
