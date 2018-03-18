Stats = function() {
 this.i = 3;
 this.iText = createText(742, 533, '' + this.i, 'apple', 4);
 this.iText.fixedToCamera = true;

 this.meHealth = 4;
 this.enemyHealth = 4;

 createSprite(-3, 0, 'health_button', 3, 3).fixedToCamera = true;
 createSprite(783, 0, 'health_button', 3, 3).fixedToCamera = true;
 this.meHealthText = createText(10, 10, '', 'apple', 4);
 this.meHealthText.fixedToCamera = true;
 this.enemyHealthText = createText(800, 10, '', 'apple', 4);
 this.enemyHealthText.fixedToCamera = true;
 
 this.lastTimeUpdate = 0;
 updatables.push(this);
 
 this.pauseOverlay = game.add.group();
 this.pauseOverlay.add(createButton(0, 0, 'button_overlays', function(button) { this.pauseOverlay.visible = false; game.pause = false; }, this, [3, 3, 3])).scale.setTo(900, 600);
 this.pauseOverlay.add(createText(450, 300, 'Game paused', 'apple2', 3)).anchor.setTo(0.5, 0.5); 
 this.pauseOverlay.add(createText(450, 350, 'Did you know pausing in real life causes death?', 'apple2', 2)).anchor.setTo(0.5, 0.5); 
 this.pauseOverlay.visible = false;
 this.pauseSprite = createSprite(120, 0, 'indicators', 3, 3);
 this.pauseSprite.frame = 0;
 this.pauseSprite.fixedToCamera = true;
 this.pauseButton = createButton(123, 0, 'button_overlays', function(button) { game.pause = true; this.pauseOverlay.visible = true; game.world.bringToTop(this.pauseOverlay); }, this, [1, 0, 2]);
 this.pauseButton.scale.setTo(30, 30);
 this.pauseButton.fixedToCamera = true;
 this.pauseOverlay.fixedToCamera = true;
 
 this.muteSprite = createSprite(159, 0, 'indicators', 3, 3);
 this.muteSprite.frame = 2;
 this.muteSprite.fixedToCamera = true;
 this.muteButton = createButton(162, 0, 'button_overlays', function(button) {
  game.sound.mute = !game.sound.mute;
  if(game.sound.mute)
   this.muteSprite.frame = 3;
  else
   this.muteSprite.frame = 2;
 }, this, [1, 0, 2]);
 this.muteButton.scale.setTo(30, 30);
 this.muteButton.fixedToCamera = true;
 
 this.exitSprite = createSprite(198, 0, 'indicators', 3, 3);
 this.exitSprite.frame = 1;
 this.exitSprite.fixedToCamera = true;
 this.exitButton = createButton(201, 0, 'button_overlays', function(button) {
  transitionTo('map');
 }, this, [1, 0, 2]);
 this.exitButton.scale.setTo(30, 30);
 this.exitButton.fixedToCamera = true;
 
// createSprite(317, 0, 'map_name', 3, 3).fixedToCamera = true;
// this.levelName = createText(508, 15, 'eternal desire', 'apple', 2);
// this.levelName.fixedToCamera = true;
// this.levelName.anchor.setTo(0.5, 0.5);

 this.updateText();
}

Stats.prototype.incI = function() {
 if(this.i < 3) {
  this.i++;
  this.updateText();
  troopChoose.checkAvailable();
 }
}

Stats.prototype.resetI = function() {
 this.i = 0;
 this.lastTimeUpdate = halfS;
 this.updateText();
}

Stats.prototype.updateText = function() {
 this.iText.setText(this.i);
 this.meHealthText.setText(this.meHealth + '/4');
 this.enemyHealthText.setText(this.enemyHealth + '/4');
}

Stats.prototype.decHealth = function(enemy) {
 if(enemy)
  this.enemyHealth--;
 else
  this.meHealth--;

 if(this.enemyHealth == 0) {
  winLoseText = 'You\'ve won!';
  showStory = levelAvailability[level-1] == 1;
  levelAvailability[level-1] = 2;
  if(level < 7)
   levelAvailability[level] = 1;
  level++;
  transitionTo('win_lose');
 } else if(this.meHealth == 0) {
  showStory = false;
  winLoseText = 'You\'ve been defeated!';
  transitionTo('win_lose');
 }
 this.updateText();
}

Stats.prototype.update = function() {
 if(halfS > this.lastTimeUpdate + (this.i == 2?5:10)) {
  this.incI();
  this.lastTimeUpdate = halfS;
 } 
}
