
var w = 400;
var h = 400;
var numballs = 10
let enemies = [];

function setup() {
  createCanvas(w, h);
  for (var i = 0; i < numballs; i++){
    oneEnemy = new Enemy(i);
    enemies.push(oneEnemy);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < enemies.length; i++){
	enemies[i].collision();
    enemies[i].move();
    enemies[i].display();
	}
}
