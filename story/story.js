Story = function() { }

Story.prototype.create = function() {
 this.stage.backgroundColor = 0xF0F0F0;
 storyTrigger = new StoryTrigger(level);
 imaginaryManWalk = new ImaginaryManWalk();
 
 transitionOut();
}

var storyTrigger;
var imaginaryManWalk;

Story.prototype.update = function() {
 imaginaryManWalk.update();
}
