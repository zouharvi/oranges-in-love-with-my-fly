var levelTiles = {
 1: [
  [0, 3, 2, 5, 3, 3, 2, 2, 3, 3, 2, 1],
  [0, 2, 4, 2, 5, 2, 2, 3, 4, 2, 3, 1],
  [0, 2, 5, 2, 3, 2, 2, 4, 2, 2, 3, 1],
 ],
 2: [
  [0, 3, 5, 7, 8, 9, 3, 5, 2, 2, 3, 3, 3, 2, 1],
  [0, 2, 2, 4, 2, 3, 4, 2, 4, 3, 3, 2, 2, 3, 1],
  [0, 2, 3, 4, 7, 8, 9, 2, 5, 2, 2, 2, 3, 3, 1],
 ],
 3: [
  [0, 3, 2, 3, 2, 3, 3, 5, 2, 3, 5, 3, 2, 1],
  [0, 2, 2, 3, 3, 2, 2, 4, 3, 2, 4, 2, 3, 1],
  [0, 2, 3, 3, 2, 2, 2, 5, 2, 2, 5, 3, 3, 1],
 ],
 4: [// deploy flashlights
  [0, 3, 3, 4, 2, 2, 3, 4, 2, 2, 3, 2, 3, 2, 1],
  [0, 2, 2, 5, 2, 3, 5, 2, 2, 3, 4, 3, 2, 3, 1],
  [0, 2, 3, 5, 2, 2, 4, 2, 3, 2, 5, 2, 2, 3, 1],
 ],
 5: [// deploy sprays
  [0, 3, 2, 3, 2, 2, 3, 3, 7, 8, 9, 5, 3, 2, 1],
  [0, 2, 3, 5, 7, 8, 9, 2, 2, 2, 3, 2, 2, 2, 1],
  [0, 2, 3, 3, 2, 2, 2, 2, 3, 2, 7, 8, 9, 3, 1],
 ],
 6: [// deploy pots, cogs and potatoes
  [0, 3, 2, 2, 4, 5, 2, 3, 3, 4, 2, 2, 3, 5, 3, 2, 1],
  [0, 2, 2, 2, 4, 5, 3, 7, 8, 9, 5, 3, 2, 5, 3, 3, 1],
  [0, 2, 3, 2, 3, 2, 2, 3, 2, 3, 3, 2, 2, 5, 3, 3, 1],
 ],
 7: [
  [0, 3, 5, 2, 2, 5, 2, 3, 7, 8, 9, 4, 3, 4, 3, 2, 2, 1],
  [0, 2, 2, 5, 3, 5, 3, 7, 8, 9, 5, 2, 2, 5, 2, 3, 3, 1],
  [0, 2, 3, 2, 4, 2, 2, 3, 7, 8, 9, 4, 2, 3, 3, 2, 3, 1],
 ],
};
var curLevel;
var curLevelLength;
initTiles = function(level) {
 curLevel = [[], [], []];
 advanceToTop = [];
 var cur = levelTiles[level];
 curLevelLength = cur[0].length;
 for(var j = 0; j < 3; j++) {
  for(var i = 0; i < cur[j].length; i++) {
   var tile = new Tile(i, j, cur[j][i]);
   curLevel[2-j].push(tile);
  }
 }
 for(var i = 0; i < 3; i++) {
  createSprite((1+i)*32*3 + 190, 400-i*31*3, 'map_tiles', 3, 3).frame = 6;
  createSprite((curLevelLength-3+i)*32*3 + 190, 400-i*31*3, 'map_tiles', 3, 3).frame = 6;
 }
}

Tile = function(x, y, frame) {
 this.frame = frame;
 this.squadPresent = null;

 this.x = (x+y)*32*3 + 170;
 this.y = 400-y*31*3;
 this.sprite = createSprite(this.x, this.y, 'map_tiles', 3, 3); 
 this.sprite.frame = frame;
 
 if(x == 1 || x == curLevel[0].length-2)
  frame = 0;
 loadTileTriggers(this, frame);
}

loadTileTriggers = function(tile, frame) {
 switch(frame) {
 case 0:
  tile.enter = function(troop) {
   if(troop.enemy)
    troopSacrifice(troop);
  };
  tile.leave = function(troop) {
   troop.speed /= 9;
  };
  break;
 case 1:
  tile.enter = function(troop) { 
   if(!troop.enemy)
    troopSacrifice(troop);
  };
  tile.leave = function(troop) {
   troop.speed /= 9;
  };
  break;
 case 4:
 case 5:
  tile.enter = function(troop) {
   troop.goCover();
  };
  tile.leave = function(troop) { };
  tile.advance = createButton(tile.x+58, tile.y+58, 'advance_arrow', function(t) { this.advance.visible = false; this.squadPresent.advance(); this.squadPresent = null; }, tile, [1, 0, 0]);
  tile.advance.scale.setTo(3, 3);
  tile.advance.visible = false;
  layers[2].add(tile.advance);
  break;
 case 9:
  tile.enter = function(troop) { 
   if(!troop.enemy) troop.speed /= 2;
  };
  tile.leave = function(troop) {
   if(!troop.enemy) troop.speed *= 2;
  };
  break;
 case 7:
  tile.enter = function(troop) { 
   if(troop.enemy) troop.speed /= 2;
  };
  tile.leave = function(troop) {
   if(troop.enemy) troop.speed *= 2;
  };
  break;
 default:
  tile.enter = function() { };
  tile.leave = function() { };
  break;
 }
}

