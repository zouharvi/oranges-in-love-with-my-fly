var troops_ally, troops_enemy;

Squad = function(troop, row, strategy) {
 this.troops = [];
 this.lastTryShoot = halfS;
 this.isCombat = false;
 this.row = row;
 this.peaceful = false;
 this.strategy = strategy;

 var yOffsets = [0, 20, 40, 60, 77];
 switch(troop) {
 case "orange":
  this.enemy = false;
  this.shootDuration = 3;
  for(var i = 0; i < 3; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Orange(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "banana":
  this.enemy = false;
  this.shootDuration = 3;
  for(var i = 0; i < 2; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Banana(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "clock":
  this.enemy = false;
  this.shootDuration = 1.5;
  for(var i = 0; i < 4; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Clock(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "potato":
  this.enemy = false;
  this.shootDuration = 5;
  this.peaceful = true;
  for(var i = 0; i < 5; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Potato(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "cog":
  this.enemy = false;
  this.shootDuration = 5;
  this.peaceful = true;
  for(var i = 0; i < 2; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Cog(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "spray":
  this.enemy = false;
  this.shootDuration = 1;
  for(var i = 0; i < 4; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Spray(row, yOffsets[j], this);
   troop.enemy = false;
   this.troops.push(troop);
   troops_ally[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case "ladybug":
  this.enemy = true;
  this.shootDuration = 4;
  for(var i = 0; i < 3; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Ladybug(row, yOffsets[j], this);
   troop.enemy = true;
   this.troops.push(troop);
   troops_enemy[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case 'flashlight':
  this.enemy = true;
  this.shootDuration = 3;
  for(var i = 0; i < 3; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Flashlight(row, yOffsets[j], this);
   troop.enemy = true;
   this.troops.push(troop);
   troops_enemy[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 case 'pot':
  this.enemy = true;
  this.shootDuration = 3;
  for(var i = 0; i < 2; i++) {
   var j = Math.floor(Math.random() * yOffsets.length);
   var troop = new Pot(row, yOffsets[j], this);
   troop.enemy = true;
   this.troops.push(troop);
   troops_enemy[row].push(troop);
   yOffsets.splice(j, 1);
  }
  break;
 }
 updatables.push(this);
}

Squad.prototype.advance = function() {
 if(this.troops.length == 0) {
  toRemove.push(this);
  return;
 }
 for(var i in this.troops) {
  if(!this.enemy)
   doSommersault(this.troops[i]);
  else
   enemyDoSommersault(this.troops[i]);
 }
 this.lastAdvanceTile = this.troops[0].curTile;
 game.time.events.add(200, function() {
   this.lastAdvanceTile.squadPresent = null;
   if(typeof(this.lastAdvanceTile.advance) != 'undefined')
    this.lastAdvanceTile.advance.visible = false;
  }, this);
}

Squad.prototype.update = function() {
 if(this.troops.length == 0) {
  toRemove.push(this);
  return;
 }
 if(halfS - this.lastTryShoot >= this.shootDuration && Math.random() > 0.2) {
  this.getTargets();
  this.lastTryShoot = halfS;
  if(this.targets.length!=0) {
   for(var i in this.troops) {
    if(!this.troops[i].shooting) this.troops[i].playCover();
    this.troops[i].combat = true;
   }
   var index = Math.floor(Math.random() * this.troops.length);
   var troopToShoot = this.troops[index];
   if(!this.peaceful && !troopToShoot.dead)
    troopShoot(troopToShoot)
  } else
   this.advanceNoFight();
 }
}

Squad.prototype.getTargets = function() {
 var max = this.troops[0].sprite.x;
 var range = this.troops[0].range;
 if(this.hint)
  range += 20;
 for(var i in this.troops) 
  if((this.troops[i].sprite.x < max && this.enemy) || (this.troops[i].sprite.x > max && !this.enemy))
   max = this.troops[i].sprite.x;
 var pTargets = this.enemy?troops_ally:troops_enemy;
 var pRows = [1];
 if(this.row == 0) 
  pRows.push(0);
 else if(this.row == 2)
  pRows.push(2);
 else {
  pRows.push(0);
  pRows.push(2);
 }

 var squadsToAttack = [];
 for(var j in pRows) {
  for(var i in pTargets[pRows[j]]) {
   if(Math.abs(max - pTargets[pRows[j]][i].sprite.x) < range) {
    squadsToAttack.push(pTargets[pRows[j]][i].squad);
   }
  }
 }
 this.targets = [];
 if(squadsToAttack.length != 0) {
  for(var j in squadsToAttack) {
   squadsToAttack[j].hint = true;
   for(var i in squadsToAttack[j].troops)
    this.targets.push(squadsToAttack[j].troops[i]);
  }
 } else {
  this.advanceNoFight();
  this.hint = false;
 }
}

Squad.prototype.advanceNoFight = function() {
 if(this.troops[0].covering)
  return;
 for(var i in this.troops) {
  this.troops[i].playWalk();
  this.troops[i].combat = false;
 }
 this.hint = false;
}
