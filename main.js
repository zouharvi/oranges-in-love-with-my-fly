var game = new Phaser.Game(900, 600, Phaser.AUTO, "");

game.state.add('preload', Preload);
game.state.add('boot', Boot);

var music;
var showStory = true;
var level = 1;
var winLoseText = '';

game.state.start('boot');

function initStates() {
 game.state.add('game', Game);
 game.state.add('win_lose', WinLose);
 game.state.add('map', Map);
 game.state.add('story', Story);
 game.state.add('final', Final);
}
