class Shipper extends Widget {
  constructor() {
    super();
    this.left = 40+80*2, this.bottom = 40, this.r = 20,  this.w = this.r*2-5, this.h = this.w*12/15;
    this.altTooltip = false;  // see main#mouseClicked
  }

  tooltip() {
    return altTooltip ? lang.SHIPPER_INSTRUCTION : lang.SHIPPER;
  }
  
  hit() {
    return dist(mouseX, mouseY, this.left, height-this.bottom) < this.r;
  }

  draw() {
    const hit=this.hit();
    const x = this.left,  y=height-this.bottom, dim = (hit ? dimActive : dimNormal) + 60;

    // beállítás
    strokeWeight(1);
    stroke(0, dim);

    // test
    fill(120, dim);
    rect(x-this.w/2, y-this.h/2, this.w, this.h);

    // lámpa
    fill(piros + Math.floor(dim).toString(16));
    ellipse(x+this.w/4, y, this.w/4, this.w/4);
  }

  mousePressed() {
    const h = new Hajo(viewport.origX(mouseX), viewport.origY(mouseY), random(0,2*PI));
    addHajo(h);
    dragSource = h;
  }
}
