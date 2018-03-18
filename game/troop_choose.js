var troopsAvailable = {
 1: [0, 1],
 2: [0, 1],
 3: [0, 1, 2],
 4: [0, 1, 2],
 5: [0, 1, 2, 5],
 6: [0, 1, 2, 5, 3],
 7: [0, 1, 2, 5, 3],
};

var troopsList = [
 ['orange', 2],
 ['banana', 3],
 ['clock', 3],
 ['potato', 2],
 ['cog', 2],
 ['spray', 3],
];


TroopChoose = function(level) {
 this.background = createSprite(0, 490, 'troop_choose', 3, 3);
 this.background.fixedToCamera = true;


 this.buttons = [];
 var troops = troopsAvailable[level];
 for(var i = 0; i < troops.length; i++) {
  var sprite = createSprite(70 + i * 90, 506, 'troops_thumbs', 3, 3);
  sprite.frame = troops[i];
  sprite.fixedToCamera = true;
  var button = createButton(73 + i * 90, 509, 'button_overlays', function(button) {
   rowChoose.doChoosing(button.troop[0]);
   stats.resetI();
   this.disableAll();
  }, this, [2, 0, 1]);
  button.scale.setTo(75, 75);
  button.fixedToCamera = true; 
  button.troop = troopsList[troops[i]];
  this.buttons.push(button);
 }
}

TroopChoose.prototype.disableAll = function() {
 for(var j in this.buttons) {
  this.buttons[j].setFrames(2, 2, 2);
  this.buttons[j].inputEnabled = false;
 }
}

TroopChoose.prototype.checkAvailable = function() {
 var i = stats.i;
 for(var j in this.buttons) {
  if(this.buttons[j].troop[1] <= i) {
   this.buttons[j].setFrames(2, 0, 1);
   this.buttons[j].inputEnabled = true;
  } else {
   this.buttons[j].setFrames(2, 2, 2);
   this.buttons[j].inputEnabled = false;
  }
 }
}
