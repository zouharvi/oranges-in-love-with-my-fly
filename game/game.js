Game = function() {};

Game.prototype.create = function() {
 this.stage.backgroundColor = 0xEBEBEB;
 troops_ally = [[], [], []];
 troops_enemy = [[], [], []];
 updatables = [];
 toRemove = [];
 layers= [];
 for(var i = 0; i < 4; i++)
  layers.push(game.add.group());

 initTiles(level);
 enemySpawnX = curLevel[0][curLevel[0].length-1].sprite.x + 240;
 game.world.setBounds(0,0, enemySpawnX + 160,600)
 
 imaginaryMan = new ImaginaryMan();
 cupOfTea = new CupOfTea();
 imaginaryMan.startChilling();
 
 rowChoose = new RowChoose();
 troopChoose = new TroopChoose(level);
 cameraMovement = new CameraMovement();
 stats = new Stats();
 ai = new AI(level);
 tutorial = new Tutorial(level);

 transitionOut();
 
 halfS = 0;
 game.time.events.loop(500, function() { if(!game.pause) halfS += 1; }, this);
 
 for(var i in layers)
  game.world.bringToTop(layers[i]);
}

var updatables, toRemove, layers;
var halfS;
var enemySpawnX;
var imaginaryMan, cupOfTea, ai, tutorial;
var cameraMovement, rowChoose, troopChoose, stats;

Game.prototype.update = function() {
 if(game.pause)
  return;
 for(var i in updatables) {
  updatables[i].update();
 }
 while(toRemove.length != 0) {
  var index = updatables.indexOf(toRemove.pop());
  if(index != -1) 
   updatables.splice(index, 1);
 }
}
