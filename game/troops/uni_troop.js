// for both enemies and allies
troopDie = function(troop) {
 if(troop.dead)
  return;
 toRemove.push(troop);

 troop.squad.troops.splice(troop.squad.troops.indexOf(troop), 1);
 if(troop.curTile != null && troop.squad.troops.length == 0 && troop.curTile.squadPresent == troop.squad) {
   troop.curTile.squadPresent = null;
   if(typeof(troop.curTile.advance) != 'undefined')
    troop.curTile.advance.visible = false;
 }
 if(troop.enemy) {
  troops_enemy[troop.row].splice(troops_enemy[troop.row].indexOf(troop), 1);
 } else {
  troops_ally[troop.row].splice(troops_ally[troop.row].indexOf(troop), 1);
 }

 troop.sprite.events.onAnimationComplete.removeAll();
 troop.playDie();
 troop.sprite.events.onAnimationComplete.add(function(s) {
  s.x = -200;
  s.destroy();
 }, troop);

 troop.dead = true;
}

troopShoot = function(troop) {
 if(typeof(troop) == undefined)
  return;
 troop.playShoot();
 troop.shooting = true;
 troop.sprite.events.onAnimationComplete.add(function() {
  var index = Math.floor(Math.random() * this.squad.targets.length);
  new Projectile(this.sprite.x, this.sprite.y, this.squad.targets[index], this, this.projectileType);
  troop.shooting = false;
  if(!troop.dead) {
   this.playCover();
   this.sprite.events.onAnimationComplete.removeAll();
  }
 }, troop);
}

troopDefendBonus = function(troop, troop2) {
 if(typeof(troop) == 'undefined')
  return -1;
 return troop.covering?(troop.coverBonus-troop2.coverAttackBonus):(troop.openBonus-troop2.openAttackBonus) - (0.5-troop2.accuracy);
}

troopSacrifice = function(troop) {
 troopDie(troop);
 var tween = game.add.tween(troop.sprite.scale);
 tween.to({x: 0.1, y: 0.1}, 1000);
 tween.start();
 
 var tarX;
 if(troop.enemy)
  tarX = troop.sprite.x - 300;
 else 
  tarX = troop.sprite.x + 300;
 tween = game.add.tween(troop.sprite);
 tween.to({x: tarX}, 1500);
 tween.start();

 stats.decHealth(!troop.enemy);
}
