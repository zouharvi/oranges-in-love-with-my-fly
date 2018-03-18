Map = function() {};

var mapPuzzlePos = [
 [ 84, 186],
 [192, 345],
 [375, 414],
 [429, 237],
 [570, 129],
 [744, 288],
 [819, 114],
];

var levelAvailability = [1, 0, 0, 0, 0, 0, 0];

Map.prototype.create = function() {
 this.map = createSprite(0, 0, 'map', 3, 3);

 for(var i in mapPuzzlePos) {
  var arr;
  var availability = levelAvailability[i];
  switch(availability) {
  case 0: arr = [2, 0, 2]; break;
  case 1: arr = [0, 1, 2]; break;
  case 2: arr = [1, 0, 2]; break;
  default: arr = [1, 0, 2];
  }
  var button = createButton(mapPuzzlePos[i][0], mapPuzzlePos[i][1], 'button_overlays', function(button) {
   level = button.level;
   transitionTo('game');
  }, this, arr);
  button.level = parseInt(i)+1;
  button.scale.setTo(48, 45);

  if(availability == 0)
   button.inputEnabled = false;
  if(availability == 1)
   createSprite(mapPuzzlePos[i][0], mapPuzzlePos[i][1]+70, 'map_arrow', 3, 3);
 }

 transitionOut();
}
