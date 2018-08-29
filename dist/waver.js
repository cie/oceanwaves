class Waver extends Widget {
  
  constructor() {
    super();
    this.left = 40, this.bottom = 40, this.r = 20;
  } 
  
  mousePressed() {
    startWaves();
  }
  
  hit() {
    return dist(mouseX, mouseY, this.left, height-this.bottom) < this.r;
  }
  
  draw() {
    const hit=this.hit();
    const x = this.left,  y=height-this.bottom, dim = hit ? dimActive : dimNormal, w = 8;
    const {r} = this;
    noFill();
    strokeWeight(w);
    stroke(wave + Math.floor(dim).toString(16));
    ellipse(x, y, 2*r, 2*r);
    stroke(0, dim);
    strokeWeight(1);
    ellipse(x, y, 2*r+w/2+3, 2*r+w/2+3);
    ellipse(x, y, 2*r-w/2-3, 2*r-w/2-3);
  }
  
  mouseReleased() {
  }
  
  mouseDragged() {
  }

  tooltip() {
    return lang.START;
  }
  
}
