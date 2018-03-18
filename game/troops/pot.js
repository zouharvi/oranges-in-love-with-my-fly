Pot = function(row, yOffset, squad) {
 this.sprite = createSprite(enemySpawnX-42, 485, 'pot', 1, 1);
 this.sprite.animations.add('walk', [0, 1, 2, 3, 4, 5]);
 this.sprite.animations.add('crouch', [6, 7]);
 this.sprite.animations.add('shoot', [8, 9, 10, 11]);
 this.sprite.animations.add('die', [12, 13, 14]);
  
 this.playWalk();

 this.squad = squad;

 this.projectileType = 1;
 this.speed = 2;
 this.range = 280;
 this.accuracy = 0.5;
 this.health = 1;

 this.coverBonus = 0.7;
 this.openBonus = -0.1;
 this.coverAttackBonus = 0;
 this.openAttackBonus = 0.3;
 this.damage = 2;

 initEnemyTroop(this, row, yOffset);
}

Pot.prototype.update = function() {
 updateEnemyTroop(this);
}

Pot.prototype.cover = function() {
 enemyTroopCover(this);
}

Pot.prototype.goCover = function() {
 this.targetX = this.curTile.x + 170;
 this.staying = true;
}

Pot.prototype.playCover = function() {
 if(!this.dead) this.sprite.animations.play('crouch', 2 + Math.random() * 2, true);
}

Pot.prototype.playWalk = function() {
 if(!this.dead) this.sprite.animations.play('walk', 7 + Math.random() * 2, true);
}

Pot.prototype.playShoot = function() {
 if(!this.dead) this.sprite.animations.play('shoot', 8 + Math. random() * 2);
}

Pot.prototype.playDie = function() {
 if(!this.dead) this.sprite.animations.play('die', 8 + Math. random() * 2);
}
