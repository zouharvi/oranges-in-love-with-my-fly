Ladybug = function(row, yOffset, squad) {
 this.sprite = createSprite(enemySpawnX-42, 485, 'ladybug', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5, 6]);
 this.sprite.animations.add('crouch', [7, 8]);
 this.sprite.animations.add('shoot', [9, 10, 11, 12, 13]);
 this.sprite.animations.add('die', [14, 15, 16, 17, 18]);
  
 this.playWalk();

 this.squad = squad;

 this.projectileType = 1;
 this.speed = 5;
 this.range = 200;
 this.accuracy = 0.45;
 this.health = 3;

 this.coverBonus = 0.35;
 this.openBonus = 0;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0;
 this.damage = 1;

 initEnemyTroop(this, row, yOffset);
}

Ladybug.prototype.update = function() {
 updateEnemyTroop(this);
}

Ladybug.prototype.cover = function() {
 enemyTroopCover(this);
}

Ladybug.prototype.goCover = function() {
 this.targetX = this.curTile.x + 170;
 this.staying = true;
}

Ladybug.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 2 + Math.random() * 2, true);
}

Ladybug.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 7 + Math.random() * 2, true);
}

Ladybug.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 8 + Math. random() * 2);
}

Ladybug.prototype.playDie = function() {
 if(!this.dead)  this.sprite.animations.play('die', 8 + Math. random() * 2);
}
