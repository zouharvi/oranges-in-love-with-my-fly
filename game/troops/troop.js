initTroop = function(troop, row, yOffset) {
 troop.row = row;
 troop.column = 0;
 troop.curTile = null;
 troop.yOffset = yOffset;

 var scale = troop.sprite.scale.x;
 troop.sprite.scale.setTo(0.2, 0.2);
 troop.sprite.angle = 180;
 troop.sprite.anchor.setTo(0.5, 0.5);
 
 var tween = game.add.tween(troop.sprite.scale);
 tween.to({x: scale, y: scale}, 1300);
 tween.start();

 tween = game.add.tween(troop.sprite);
 tween.to({angle: 0}, 1000);
 tween.start();
  
 updatables.push(troop);

 troop.dead = false;
 troop.toDie = false;
 troop.goingNext = true;
 troop.staying = false;
 troop.covering = false;
 troop.combat = false;
 troop.shooting = false;
 troop.reloadTime = 5;
 
 troop.range += 10*Math.random();
 
 troopGoNext(troop);
}

updateTroop = function(troop) {
 if(troop.dead)
  return;
 if((troop.targetX-troop.yOffset) - troop.sprite.x < 7) {
  if(!troop.staying) {
   troopGoNext(troop);
  } else if(!troop.covering){
   troop.cover();
  }
  if(troop.goingNext) {
   troop.column++;
   if(troop.curTile != null)
    troop.curTile.leave(troop);
   troop.curTile = curLevel[troop.row][troop.column];
   troop.curTile.enter(troop);
   troop.goingNext = false;
  }
 }

 if(!troop.combat) {
  if(troop.covering)
   troop.playCover();
  if(troop.sprite.x < troop.targetX - troop.yOffset)
   troop.sprite.x += troop.speed;
  if(troop.sprite.y < troop.targetY + troop.yOffset - troop.speed * 2)
   troop.sprite.y += troop.speed * 1.5;
  else if(troop.sprite.y > troop.targetY + troop.yOffset)
   troop.sprite.y -= troop.speed * 1.5;
 }
}

troopCover = function(troop) {
 troop.covering = true;
 if(troop.curTile.squadPresent == null || troop.curTile.squadPresent == troop.squad) {
  troop.playCover();
  troop.curTile.squadPresent = troop.squad;
  troop.curTile.advance.visible = true;
 } else {
  doSommersault(troop);
 }
}

troopGoNext = function(troop) {
 troop.goingNext = true;
 troop.targetX = curLevel[troop.row][troop.column+1].x;
 troop.targetY = curLevel[troop.row][troop.column+1].y;
}

doSommersault = function(troop) {
 troop.jumpTargetX = troop.targetX;
 var duration = Math.floor(Math.random() * 500) + 100;

 var tween = game.add.tween(troop.sprite);
 tween.to({
  angle:181,
  x:troop.jumpTargetX+25-troop.yOffset,
  y:troop.targetY-30+troop.yOffset
 }, duration);
 tween.onComplete.add(function() {
  var tween = game.add.tween(troop.sprite);
  tween.to({
   angle:0,
   x:troop.jumpTargetX+50-troop.yOffset,
   y:troop.targetY+troop.yOffset
  }, duration);
  tween.onComplete.add(function() {
   troop.staying = troop.covering = false;
   troop.playWalk();
  }, troop);
  tween.start();
 }, troop);
 tween.start();
}
