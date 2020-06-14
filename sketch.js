
int w = 400;
int h = 400;
int numballs = 10
let enemies = [];

void setup() {
  size(w, h);
  for (int i = 0; i < numballs; i++){
    oneEnemy = new Enemy(i);
    enemies.push(oneEnemy);
  }
}

void draw() {
  background(0);
  for (int i = 0; i < enemies.length; i++){
	enemies[i].collision();
    enemies[i].move();
    enemies[i].display();
	}
}
