"use strict";
class Hajo {
  zIndex() {
    return 1;
  }
  
  constructor(ax, ay, aphi) {
    this.w = 15;
    this.h = 12;
    this.hullamv = parthullamv;
    this.x = ax;
    this.y = ay;
    this.phi = aphi;
  }
  
  draw() {
    if (dragSource == this && shipper.hit()) return;
    const {x, y, phi, w, h} = this;
    
    // beállítás
    strokeWeight(1);
    stroke(0);
    
    push();
    
    translate(x,y);
    rotate(phi);
  
    // test
    fill(120);
    rect(-w/2, -h/2, w, h);
  
    // lámpa
    fill(piros);
    ellipse(+w/4, 0, w/4, w/4);
    
    pop();
  }
  
  hit() {
    return dist(viewport.origX(mouseX), viewport.origY(mouseY), this.x, this.y) < this.w;
  }
  
  mousePressed() {
    if (mouseButton == LEFT) {
      this.ppmouseY = pmouseY; this.ppmouseX = pmouseX;  
    } else {
      var h = new Hullamver(this);
      addWidget(h);
      dragSource = h;
    }
  }
  
  mouseDragged() {
    this.x = viewport.origX(mouseX);
    this.y = viewport.origY(mouseY);
    this.phi = atan2(mouseY-this.ppmouseY, mouseX-this.ppmouseX);
    this.ppmouseY = pmouseY; this.ppmouseX = pmouseX;
  }
  
  mouseReleased() {
    if (shipper.hit()) {
      remove(this);
    }
  }
  
  cursor() {
    return HAND;
  }
  
  tooltip() {
    return nf(this.hullamv/parthullamv,0,ndig);
  }
  
  createHullam() {
    return new CircHullam(this.x,this.y,this.hullamv);
  }
}

function addHajo(hajo) {
  hajok.push(hajo);
  draggables.push(hajo);
}
function removeHajo(w) {
  if (~hajok.indexOf(w)) draggables.splice(hajok.indexOf(w), 1);
  if (~draggables.indexOf(w)) draggables.splice(draggables.indexOf(w), 1);
}
