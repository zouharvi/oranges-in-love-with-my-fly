Projectile = function(x, y, target, troop, type) {
 this.sprite = createSprite(x, y, 'projectiles', 2, 2);
 this.offX = this.offY = 0;
 this.damage = troop.damage;
 
 var prob = troopDefendBonus(target, troop);
 if(prob > Math.random()) {
  type = -Math.abs(type);
  this.offX = target.enemy?-40:40;
  this.offY = 10;
  type *= -1;
 }

 this.sprite.frame = type;
 
 if(prob == -1) {
  this.sprite.destroy();
  return this;
 }

 this.target = target;
 var baseSpeed = 12;
 var difX = Math.abs(x - target.sprite.x - this.offX);
 var difY = Math.abs(y - target.sprite.y - this.offY);
 this.speedX = baseSpeed/(difX+difY)*difX;
 this.speedY = baseSpeed/(difY+difX)*difY;

 if(this.offX == 0) target.health-=this.damage;
 if(target.health <= 0)
  target.toDie = true;

 updatables.push(this);

 if(target.sprite.x < 0) {
  this.die();
 } else {
  var sound = game.add.audio(troop.enemy?'projectile_enemy':'projectile_ally');
  sound.play();
  sound.volume = 0.1;
 }
}

Projectile.prototype.update = function() {
 if(this.target == null)
  return;
 
 if(this.target.sprite.x < 0) {
  this.die();
  return;
 }

 if(this.sprite.y < this.target.sprite.y + this.offY)
  this.sprite.y += this.speedY;
 else if(this.sprite.y > this.target.sprite.y + this.offY + this.speedY*2)
  this.sprite.y -= this.speedY;

 if(this.sprite.x < this.target.sprite.x + this.offX)
  this.sprite.x += this.speedX;
 else if(this.sprite.x > this.target.sprite.x + this.offX + this.speedX*2)
  this.sprite.x -= this.speedX;
 // x and y arrive at the same time anyway
 else {
  var tween = game.add.tween(this.sprite);
  tween.to({angle: 180}, this.offX==0?90:170);
  tween.onComplete.add(this.die, this);
  tween.start();

  tween = game.add.tween(this.sprite.scale);
  tween.to({x: 0.8, y: 2}, this.offX==0?90:170);
  tween.start();
  if(this.target.toDie) {
   troopDie(this.target);
  }
  this.target = null;
 }

}

Projectile.prototype.die = function() {
 this.sprite.destroy(true);
 toRemove.push(this);
}
