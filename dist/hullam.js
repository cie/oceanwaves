"use strict";

class Hullam {
  constructor() {
    this.startt=t();
  }
  
  draw() {
   // hullám 1
    strokeWeight(1);
    noFill();
  
    for(let i = 0; i < waveSize; ++i) {
      stroke(wave + Math.floor(255*pow(norm(i, waveSize, 0), 2)).toString(16));
      this.drawOne(i);
    }
  }
}

class LinHullam extends Hullam {
  constructor(ay0, av) {
    super();
    this.y0 = ay0; this.v = av;
  }
  
  drawOne(i) {
    this.y = this.y0 + (t() - this.startt) * this.v / 1000.0;
    line(-100000, (this.y+i), 100000, (this.y+i));
  }
}

class CircHullam extends Hullam {
  constructor(ax, ay, av) {
    super();
    this.x = ax; this.y = ay; this.v = av;
  }
  
  drawOne(i) {
    this.r = (t()-this.startt) * this.v / 1000.0;
    ellipse(this.x, this.y, (2*this.r-i), (2*this.r-i));
  }
}

var hullamok = new DList();

function addHullam(h1) {
  if (h1 instanceof CircHullam) {
    for (const h2 of hullamok) {
      addKotel(new Kotel(h2, h1, 1.0));
      addKotel(new Kotel(h2, h1, -1.0));
    }
  } else {
    for (const h2 of hullamok) {
      if (h2 instanceof CircHullam) {
        addKotel(new Kotel(h1, h2, 1.0));
        addKotel(new Kotel(h1, h2, -1.0));
      }
    }
  }
  hullamok.push(h1);
}

function startWaves() {
  clearIfFrozen();
  
  for (const hajo of hajok) {
    addHullam(hajo.createHullam());
  }
  
  if (partShown) {
    addHullam(new LinHullam(height-part, -parthullamv));
  }
}
