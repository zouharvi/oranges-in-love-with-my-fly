Boot = function() {}
Boot.prototype = {
 preload: function() {
  game.load.image('black', 'assets/black.png');
  game.load.image('loading_hand_0', 'assets/loading_hand_0.png');
  game.load.image('loading_hand_1', 'assets/loading_hand_1.png');
  game.load.bitmapFont('apple2','assets/fonts/apple2.png', 'assets/fonts/apple.fnt');
 },
 create: function() {
  transitionTo('preload');
 }
}

Preload = function() { }
Preload.prototype = {
 preload: function() {
  createText(778, 574, 'loading', 'apple2', 2);
  createText(5, 574, 'game by @ViliX64', 'apple2', 2);
  createSprite(432, 280, 'loading_hand_1', 3, 3);
  this.hand = createSprite(450, 300, 'loading_hand_0', 3, 3);
  this.hand.anchor.setTo(1, 0.5);
  transitionOut();

  // assets
  game.load.audio('my_third_face', 'assets/audio/my_third_face.ogg');
  game.load.audio('projectile_enemy', 'assets/audio/projectile_enemy.ogg');
  game.load.audio('projectile_ally', 'assets/audio/projectile_ally.ogg');
  game.load.image('nothing', 'assets/nothing.png');
  game.load.image('map', 'assets/map.png');
  game.load.image('map_arrow', 'assets/map_arrow.png');
  game.load.image('map_name', 'assets/map_name.png');
  game.load.image('health_button', 'assets/health_button.png');
  game.load.image('row_choose', 'assets/row_choose.png');
  game.load.image('imaginary_man_floor', 'assets/imaginary_man_floor.png');
  game.load.image('cup_of_tea_background', 'assets/cup_of_tea_background.png');
  game.load.image('cup_of_tea_floor', 'assets/cup_of_tea_floor.png');
  game.load.image('cup_of_tea_phone', 'assets/cup_of_tea_phone.png');
  game.load.image('troop_choose', 'assets/troop_choose.png');
  game.load.image('tutorial_background', 'assets/tutorial_background.png');
  game.load.image('final_background', 'assets/final_background.png');
  game.load.spritesheet('button_overlays', 'assets/button_overlays.png', 1, 1);
  game.load.spritesheet('indicators', 'assets/indicators.png', 12, 11);
  game.load.spritesheet('advance_arrow', 'assets/advance_arrow.png', 14, 9);
  game.load.spritesheet('imaginary_man_walk', 'assets/imaginary_man_walk.png', 32, 48);
  game.load.spritesheet('final_man_walk', 'assets/final_man_walk.png', 32, 48);
  game.load.spritesheet('final_mirror', 'assets/final_mirror.png', 32, 64);
  game.load.spritesheet('story_background', 'assets/story_background.png', 700, 150);
  game.load.spritesheet('imaginary_man', 'assets/imaginary_man.png', 48, 48);
  game.load.spritesheet('cup_of_tea', 'assets/cup_of_tea.png', 48, 48);
  game.load.spritesheet('map_tiles', 'assets/map_tiles.png', 64, 32);
  game.load.bitmapFont('apple','assets/fonts/apple.png', 'assets/fonts/apple.fnt');
  // -troops
  game.load.spritesheet('projectiles', 'assets/troops/projectiles.png', 3, 3);
  game.load.spritesheet('troops_thumbs', 'assets/troops/troops_thumbs.png', 27, 27);
  game.load.spritesheet('orange', 'assets/troops/orange.png', 32, 32);
  game.load.spritesheet('banana', 'assets/troops/banana.png', 32, 32);
  game.load.spritesheet('clock', 'assets/troops/clock.png', 32, 32);
  game.load.spritesheet('potato', 'assets/troops/potato.png', 32, 32);
  game.load.spritesheet('cog', 'assets/troops/cog.png', 32, 32);
  game.load.spritesheet('spray', 'assets/troops/spray.png', 32, 32);
  game.load.spritesheet('ladybug', 'assets/troops/ladybug.png', 32, 32);
  game.load.spritesheet('flashlight', 'assets/troops/flashlight.png', 32, 32);
  game.load.spritesheet('pot', 'assets/troops/pot.png', 32, 32);

  // scripts 
  game.load.script('map.js', 'map.js');
  game.load.script('win_lose.js', 'win_lose.js');
  game.load.script('game.js', 'game/game.js');
  game.load.script('camera_movement.js', 'game/camera_movement.js');
  game.load.script('row_choose.js', 'game/row_choose.js');
  game.load.script('imaginary_man.js', 'game/imaginary_man.js');
  game.load.script('cup_of_tea.js', 'game/cup_of_tea.js');
  game.load.script('tiles.js', 'game/tiles.js');
  game.load.script('stats.js', 'game/stats.js');
  game.load.script('tutorial.js', 'game/tutorial.js');
  // -troops
  game.load.script('troop_choose.js', 'game/troop_choose.js');
  game.load.script('ai.js', 'game/ai.js');
  game.load.script('projectile.js', 'game/troops/projectile.js');
  game.load.script('squad.js', 'game/troops/squad.js');
  game.load.script('uni_troop.js', 'game/troops/uni_troop.js');
  game.load.script('troop.js', 'game/troops/troop.js');
  game.load.script('orange.js', 'game/troops/orange.js');
  game.load.script('banana.js', 'game/troops/banana.js');
  game.load.script('clock.js', 'game/troops/clock.js');
  game.load.script('potato.js', 'game/troops/potato.js');
  game.load.script('cog.js', 'game/troops/cog.js');
  game.load.script('spray.js', 'game/troops/spray.js');
  game.load.script('enemy_troop.js', 'game/troops/enemy_troop.js');
  game.load.script('ladybug.js', 'game/troops/ladybug.js');
  game.load.script('flashlight.js', 'game/troops/flashlight.js');
  game.load.script('pot.js', 'game/troops/pot.js');
  // -story
  game.load.script('story.js', 'story/story.js');
  game.load.script('imaginary_man_walk.js', 'story/imaginary_man_walk.js');
  game.load.script('story_trigger.js', 'story/story_trigger.js');
  game.load.script('final.js', 'story/final.js');
 
  game.load.onFileComplete.add(function(p, f, s, tl, tf) {
   this.hand.angle = p*3.6;
  }, this); 
 },
 create: function() {
  music = game.add.audio('my_third_face'); 
  music.loopFull();
  music.volume = 0.1;
  initStates();
  transitionTo('story');
 }
}
