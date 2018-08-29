class Parter extends Widget {
  
  constructor() {
    super();
    this.left = 40+80*3;
    this.bottom = 40;
    this.r = 20;
  }
  
  hit() {
    return dist(mouseX, mouseY, this.left, height-this.bottom) < this.r;
  }
  
  
  draw() {
    var hit=this.hit();
    var x = this.left,  y=height-this.bottom, dim = (hit ? dimActive : dimNormal) + 60;

    // beállítás
    noStroke();
    fill(lerpColor(color('#000000'), color(sand), (partShown ? 0.6 : 1)), dim+30);

    rect(x-30,y,60,20);
  }

  mousePressed() {
    partShown = !partShown;
  }

  mouseDragged() {
  }

  mouseReleased() {
  }
  
  tooltip() {
    if (partShown) {
      return lang.PART_OFF;
    } else {
      return lang.PART_ON;
    }
  }

}

var partShown = true;
