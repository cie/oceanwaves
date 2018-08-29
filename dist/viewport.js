class Viewport {
  constructor() {
    this.x = 0; this.y = 0;
    this.scale = 1;
  }

  zIndex() {
    return -1;
  }
  
  draw() {
    translate(width/2, height/2);
    scale(this.scale);
    translate(this.x-width/2,this.y-height/2);
  }
  
  
  origX(newX) {
    return (newX-width/2)/this.scale - this.x + width/2;
  }
  
  origY(newY) {
    return (newY-height/2)/this.scale - this.y + height/2;
  }
  
  newX(origX) {
    return (origX - width/2 + this.x) * this.scale + width/2;
  }
  
  newY(origY) {
    return (origY - height/2 + this.y) * this.scale + height/2;
  }
  
  mouseDragged() {
    this.x += (mouseX-pmouseX)/this.scale;
    this.y += (mouseY-pmouseY)/this.scale;
  }
  
  mousePressed() {
    dragmouseX = mouseX; dragmouseY = mouseY;
  }
  
  mouseReleased() {
  }
  
  cursor() {
    return mousePressed ? MOVE : (viewport.origY(mouseY) > height - part ? HAND : ARROW);
  }
  hit() {
    return true;
  }
}
