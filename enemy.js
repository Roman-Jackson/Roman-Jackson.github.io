  class Enemy {
  constructor(x) {
    this.size = 25
    this.pos = createVector(random(10, w - 10), random(10, h - 10))
    this.velocity = createVector(random(-5, 5), random(-5, 5))
  }
  move() {
      this.pos.x += this.velocity.x
      this.pos.y += this.velocity.y
  }
  collision() {
    if (this.pos.y <= this.size/2) {
      this.pos.y = this.size/2 + 1
      this.velocity.y *= -1
    }
    
    if (this.pos.y >= h - this.size/2) {
      this.pos.y = h - this.size/2 - 1
      this.velocity.y *= -1
    }
    
    if (this.pos.x <= this.size/2) {
      this.pos.x = this.size/2 + 1
      this.velocity.x *= -1
    }
    
    if (this.pos.x >= w - this.size/2) {
      this.pos.x = w - this.size/2 - 1
      this.velocity.x *= -1
    }

    for (var i = 0; i < enemies.length; i++) {
      if (this.pos.dist(enemies[i].pos) < (this.size / 2) + (enemies[i].size / 2) && this.pos != enemies[i].pos) {
        
        let u = this.pos.copy().sub(enemies[i].pos).normalize()
        let x = u.copy().rotate(PI/2)
        let v_e1 = u.copy().mult(this.velocity.dot(u))
        let v_e2 = u.copy().mult(enemies[i].velocity.dot(u))
        let v_k1 = x.copy().mult(this.velocity.dot(x))
        let v_k2 = x.copy().mult(enemies[i].velocity.dot(x))
        this.velocity = v_e2.add(v_k1)
        enemies[i].velocity = v_e1.add(v_k2)
      
    while(this.pos.dist(enemies[i].pos) < (this.size / 2) + (enemies[i].size / 2) && this.pos != enemies[i].pos) {
      this.pos.x += 0.001 * this.velocity.x
      this.pos.y += 0.001 * this.velocity.y
          
  }
        
        
      
      }

          


    }

  }

  display() {
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}