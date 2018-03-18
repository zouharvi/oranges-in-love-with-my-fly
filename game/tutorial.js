var tutorialText = [
 'Click on the desired unit and then\non a row.\nOranges are average and bananas\nuseful only in cover.',
 null,
 'Clocks are effective against troops\nin cover.',
 null,
 'Sprays are fast and have much higher\nfire rate.',
 'Potatoes can\'t shoot, but they\ncan absorb a great deal of damage.\n\nHint: pots are fragile.',
 null,
]

Tutorial = function(level) {
 if(tutorialText[level-1] != null) {
  this.g = game.add.group();
  this.background = this.g.add(createButton(159, 0, 'tutorial_background', function() { this.g.destroy(true);  }, this, [0, 0, 0]));
  this.background.scale.setTo(3, 3);
  this.background.fixedToCamera = true;
 
  this.text = this.g.add(createText(169, 15, tutorialText[level-1], 'apple', 2));
  this.text.fixedToCamera = true; 
 }
}
