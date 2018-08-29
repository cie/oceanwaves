class Scaler extends Widget {
  constructor() {
    super();
    this.margin=30;
    this.w=140;
    this.h=20;
    this.x=0.5;
    this.dragging = false;
  }

  draw() {
    const {w, h, x} = this;
    strokeWeight(1);
    const top = this.top(), left = this.left();
    // doboz
    const active = this.active();
    const dim = active ? dimActive : dimNormal; 
    stroke(0, dim);
    fill(wave + Math.floor(dim).toString(16));
    rect(left, top, this.w, this.h);

    // |
    stroke(piros);
    const tick = this.x*this.w+left;
    line(tick, top, tick, top + this.h);   
    
    // +-
    stroke(0);
    const l = 0.6 * this.h, margin2 = (this.h-l)/2;
    // -
    line(left-h+margin2, top+h/2,     left-margin2, top + h/2);   
    // +
    line(left+w+margin2, top+h/2,     left+w+h-margin2, top + h/2); 
    line(left+w+h/2,     top+margin2, left+w+h/2,     top + h - margin2);   
  }
  
  top() {
    return height-this.margin-this.h;
  }
  left() {
    return width-this.margin-this.w;
  }
  
  active() {
    return this.dragging || (!mousePressed && this.hit());
  }
  
  hit() {
    return this.left() < mouseX && mouseX < this.left()+this.w && this.top() < mouseY && mouseY < this.top()+ this.h;
  }
  
  mousePressed() {
    this.dragging = true;
    this.calc();
  }
  
  calc() {
    this.x = (mouseX-this.left())*1.0/this.w;
    this.x = constrain(this.x, 0, 1);
  }
  
  mouseDragged() {
    this.calc();
    viewport.scale=this.f();
  }
  
  f() {
    return pow(15.0,this.x-0.5);
  }
  
  mouseReleased() {
    this.dragging = false;
  }

  tooltip() {
    return lang.SCALER;
  }
}
