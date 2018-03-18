WinLose = function() {};

WinLose.prototype.create = function() {
 this.stage.backgroundColor = 0x000000;
 createText(450, 270, winLoseText, 'apple2', 2).anchor.setTo(0.5, 0.5);
 transitionOut();
 game.time.events.add(Phaser.Timer.SECOND * 2, function() {
  if(showStory == true) {
   if(level == 8)
    transitionTo('final');
   else
    transitionTo('story');
  } else
   transitionTo('map')
 }, this);
}
