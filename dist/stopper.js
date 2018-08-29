class Stopper extends Widget {
  
  constructor() {
    super();
    this.left = 40+80*1, this.bottom = 40, this.r = 20;
  }
  hit() {
    return dist(mouseX, mouseY, this.left, height-this.bottom) < this.r;
  }
  
  
  draw() {
    const hit=this.hit();
    const x = this.left,  y=height-this.bottom, dim = (hit ? dimActive : dimNormal) + 60;
    const {r} = this;

    // beállítás
    strokeWeight(2);
    stroke(0, dim);
    fill(piros + Math.floor(dim+30).toString(16));

    // stop
    beginShape();
    for (let i = 0.5; i < 8; i+=1.0) {
      const phi = 2*PI/8*i;
      vertex(x + r*cos(phi), y + r*sin(phi));
    }
    endShape(CLOSE);
  }

  mousePressed() {
    if (frozenTime < 0) {
      frozenTime=millis();
    } else {
      clear();
    }
  }

  mouseDragged() {
  }

  mouseReleased() {
  }
  
  tooltip() {
    if (frozenTime < 0) {
      return lang.STOP;
    } else {
      return lang.CLEAR;
    }
  }

}

