var AIUnits = {
 1: [
     [1, 'ladybug', 10, 'def2'],
     [0, 'ladybug', 25, 'att'],
     [1, 'ladybug', 45, 'def3'],
     [0, 'ladybug', 75, 'def3'],
 ],
 2: [
     [1, 'ladybug', 10, 'def'],
     [2, 'ladybug', 25, 'att'],
     [0, 'ladybug', 45, 'att'],
     [1, 'ladybug', 75, 'def3'],
 ],
 3: [
     [0, 'ladybug',  5, 'def'],
     [1, 'ladybug',  5, 'def'],
     [1, 'ladybug',  5, 'def'],
     [0, 'ladybug',  5, 'def'],
     [0, 'ladybug', 50, 'att'],
     [2, 'ladybug', 50, 'att'],
     [0, 'ladybug', 45, 'def2'],
     [2, 'ladybug', 60, 'def2'],
     [2, 'ladybug', 65, 'att'],
     [1, 'ladybug', 60, 'att'],
     [1, 'ladybug', 60, 'def'],
     [1, 'ladybug', 60, 'def'],
 ],
 4: [
     [0, 'flashlight', 5, 'att'],
     [1, 'flashlight', 5, 'att'],
     [2, 'flashlight', 15, 'att'],
     [2, 'ladybug', 25, 'def3'],
     [1, 'ladybug', 25, 'def3'],
     [0, 'ladybug', 35, 'def3'],
     [2, 'flashlight', 45, 'def'],
     [1, 'flashlight', 45, 'def'],
     [2, 'flashlight', 15, 'att'],
     [1, 'ladybug', 15, 'def3'],
 ],
 5: [
     [2, 'flashlight', 5, 'att'],
     [1, 'flashlight', 10, 'att'],
     [0, 'ladybug', 30, 'def3'],
     [1, 'ladybug', 30, 'def3'],
     [0, 'ladybug', 30, 'def3'],
     [2, 'flashlight', 45, 'def'],
     [2, 'flashlight', 20, 'def'],
     [1, 'ladybug', 25, 'def3'],
 ],
 6: [
     [0, 'pot', 5, 'def'],
     [1, 'pot', 15, 'def'],
     [2, 'pot', 15, 'def'],
     [2, 'ladybug', 45, 'def'],
     [1, 'ladybug', 25, 'def'],
     [0, 'flashlight', 105, 'att'],
     [1, 'flashlight', 25, 'att'],
     [2, 'flashlight', 15, 'att'],
     [2, 'ladybug', 55, 'def'],
     [1, 'ladybug', 30, 'def'],
     [2, 'ladybug', 45, 'def'],
     [1, 'ladybug', 25, 'def'],
     [0, 'flashlight', 105, 'att'],
     [1, 'flashlight', 25, 'att'],
     [2, 'flashlight', 15, 'att'],
     [2, 'ladybug', 55, 'def'],
     [1, 'ladybug', 30, 'def'],
 ],
 7: [
     [0, 'pot', 25, 'def'],
     [1, 'pot', 25, 'def'],
     [1, 'ladybug', 30, 'def2'],
     [0, 'ladybug', 30, 'def2'],
     [0, 'flashlight', 50, 'att'],
     [1, 'flashlight', 20, 'att'],
     [2, 'flashlight', 20, 'att'],
     [1, 'ladybug', 50, 'def2'],
     [1, 'ladybug', 50, 'def2'],
     [0, 'ladybug', 50, 'def2'],
     [2, 'ladybug', 50, 'def2'],
 ],
};

AI = function(level) {
 this.level = level;
 this.units = AIUnits[level].slice();
 this.lastTimeSpawn = halfS;

 updatables.push(this);
 this.lastTimeSpawn = 0;
}

AI.prototype.update = function() {
 if(this.units.length == 0)
  this.units = AIUnits[this.level].slice();
 if(halfS - this.lastTimeSpawn >= this.units[0][2]) {
  this.lastTimeSpawn = halfS;
  var unit = this.units.shift();
  if(unit[2] == -1)
   new Squad(unit[1], unit[0], unit[3]);
  else
   cupOfTea.startSpawning(unit[0], unit[1], unit[3]);
 }
 
}
