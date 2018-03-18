StoryTrigger = function(level) {
 this.sprite = createSprite(0, 0, 'story_background', 4, 4);
 this.sprite.frame = level-1;

 this.storyText = [
  [
   0,
   ['Click to walk', 0, false],
   ['', -70, true],
   ['Everbird here. Hello?', -200, false],
   ['General Orange of the\nstrawberry division\nreporting for duty.\nGoodman will pay\nfor abducting your fly.', -400, true],
   ['He\'s holding your fly\nin his castle of happiness.\nHis army is in the way, but\nwe\'re on your side.', -900, true],
   ['He calls himself Goodman.\nBut he\'s not a man, let alone\na good one.\n\nEvilman. I hope you see it too.', -1200, false],
  ],
  [
   300,
   ['', 0, true],
   ["Isn't it absurd to die\nfor what you've until\nrecently lived for?", -400, true],
   ["Leave me alone!", -700, false],
   ["You're just an sorrowful old man.\nReturn my fly\nand we'll leave you alone.", -850, false],
   ["Please, try to understand..\nI don't have your fly.\nWhy does it matter anyway?", -1150, true],
   ["LIAR!", -1450, false],
   ["", -1550, false],
  ],
  [
   300,
   ['', 0, true],
   ["OK. I'm sorry for what\nI've said earlier.\nBut please understand that\nit doesn't love you anymore.", -400, true],
   ["In fact, it never did.\nCan't you see it's\njust an illusion?", -700, true],
   ["I'm perfecly aware of that,\nbut why can't I take pleasure\nin illusions?\n\nThere's no reason to avoid them.", -950, false],
   ["Because that's insane!", -1350, true],
   ["Who decides that?", -1550, false],
   ["", -1700, false],
  ],
  [
   1000,
   ['', 0, true],
   ["Why won't you wake up?\nYou're a mad man.", -1050, true],
   ["I'm capable of doing that,\nbut I chose not to.", -1350, false],
   ["  Pathetic.", -1500, true],
   ["", -1700, false],
  ],
  [
   1050,
   ['', 0, true],
   ["STOP!\nPlease understand that\nyour face is not you.", -1100, true],
   ["How could I?\nThere are no mirrors in this world\nfor me.", -1450, false],
   ["", -1700, false],
  ],
  [
   800,
   ['', 0, true],
   ["The conclusion I've\ndrawn is that you're\njust confused.\nLet me help you.", -850, true],
   ["Confused?\nBased on what?", -1100, false],
   ["Tell me: about what\ncan you really say:\n\"I'm 100% sure of that\"?", -1250, true],
   ["And about what can you?\nIt's you who's insane!\nGive me back my fly!", -1550, false],
   ["", -1830, false],
  ],
  [
   0,
   ['', 0, true],
   ["Here's an orange\nand here's another.\nIf you see this, I'll\ngrant you all the rest.", -10, true],
   ["What does that even mean?\nThis isn't a game anymore.\nTalk sense.", -550, false],
   ["Tell me: do you think you\nare a monster?", -900, true],
   ["Would you know if you were one?", -1200, false],
   ["I beg you: take care.\nUpon your ability to remain\nsane depends our only hope.", -1400, true],
   ["", -1900, false],
  ],

 ];

 this.level = level-1;
 this.lastText = null;
 this.sprite.x -= this.storyText[this.level].shift();
 this.newText(this.storyText[this.level][0]);
 this.storyText[this.level].shift();
}

StoryTrigger.prototype.move = function(v) {
 this.sprite.x -= v;
 if(this.storyText[this.level].length != 0) {
  if(this.sprite.x <= this.storyText[this.level][0][1]) {
   this.newText(this.storyText[this.level][0]);
   this.storyText[this.level].shift();
  }
 }
 if(this.sprite.x <= -1880)
  transitionTo('map');
}

StoryTrigger.prototype.newText = function(text) {
 if(this.lastText == null) {
  this.lastText = createText(text[2]?450:20, 470, text[0], 'apple2', 2);
  this.lastText.alpha = 0;
  var tween = game.add.tween(this.lastText);
  tween.to({alpha: 1}, 600);
  tween.start();
 } else {
  var tween = game.add.tween(this.lastText);
  tween.to({alpha: 0}, 600);
  tween.onComplete.add(function() {
   this.lastText = null;
   this.newText(text);
  }, this);
  tween.start();
 }
}
