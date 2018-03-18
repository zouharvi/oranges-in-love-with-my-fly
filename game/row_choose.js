RowChoose = function() {
 this.g = game.add.group();
 this.arrows = [];
 var arrow = this.g.add(createSprite(250, 235, 'row_choose', 2, 2));
 arrow.fixedToCamera = true;
 this.arrows.push(arrow);
 arrow.visible = false;
 
 arrow = this.g.add(createSprite(154, 331, 'row_choose', 2, 2));
 arrow.fixedToCamera = true;
 this.arrows.push(arrow);
 arrow.visible = false;
 
 arrow = this.g.add(createSprite(58, 427, 'row_choose', 2, 2));
 arrow.fixedToCamera = true;
 this.arrows.push(arrow);
 arrow.visible = false;

 var but = this.g.add(createSprite(90, 214, 'nothing', 740, 92)); 
 but.fixedToCamera = true;
 but.rowId = 0;
 but.inputEnabled = true;
 but.events.onInputOver.add(function(button) {
  this.switchToRow(button.rowId);
 }, this);
 but.events.onInputDown.add(function(button) {
  this.clickOnRow(button.rowId);
 }, this);
 
 but = this.g.add(createSprite(90, 310, 'nothing', 740, 92)); 
 but.fixedToCamera = true;
 but.rowId = 1;
 but.inputEnabled = true;
 but.events.onInputOver.add(function(button) {
  this.switchToRow(button.rowId);
 }, this);
 but.events.onInputDown.add(function(button) {
  this.clickOnRow(button.rowId);
 }, this);
 
 but = this.g.add(createSprite(90, 406, 'nothing', 740, 92)); 
 but.fixedToCamera = true;
 but.rowId = 2;
 but.inputEnabled = true;
 but.events.onInputOver.add(function(button) {
  this.switchToRow(button.rowId);
 }, this);
 but.events.onInputDown.add(function(button) {
  this.clickOnRow(button.rowId);
 }, this);

 this.g.visible = false;
}

RowChoose.prototype.switchToRow = function(row) {
 for(var i in this.arrows) {
  if(i == row)
   this.arrows[i].visible = true;
  else
  this.arrows[i].visible = false;
 }
}

RowChoose.prototype.clickOnRow = function(row) {
 this.g.visible = false;
 imaginaryMan.startSpawning(row, this.targetName);
}

RowChoose.prototype.doChoosing = function(name) {
 this.targetName = name;
 this.g.visible = true; 
 this.switchToRow(-1);
}
