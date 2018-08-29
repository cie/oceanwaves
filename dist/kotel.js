class Kotel {
  constructor(ah1, ah2, asign) {
    this.points = [];
    this.started = false;
    this.h1 = ah1;
    this.c2 = ah2;
    this.sign = asign;
      this.x; this.y; this.d;
  }
  
  update() {
    /*
      http://stackoverflow.com/questions/5238566/intersection-points-of-two-circles-in-matlab
      Assume a triangle ABC, where A and B are the centers of the circle, and C is one or the other
      intersection point. a, b, and c are the sides opposite the corresponding corners. alpha, beta,
      and gamma are the angles associated with A, B, and C, respectively.
      Then, b^2+c^2 - 2*b*c*cos(alpha) = a^2. Knowing alpha (or its cosine), you can find the location of C. 
    */
    var {c2, sign} = this
    if (this.h1 instanceof CircHullam) {
      var c1 = this.h1;
      var 
        a = c2.r, b = c1.r,
        c = dist(c1.x, c1.y, c2.x, c2.y), //distance between circles
        cosAlpha = (pow(b,2)+pow(c,2)-pow(a,2))/(2*b*c),
        ux = (c2.x - c1.x)/c, // unit vector from first to second center
        uy = (c2.y - c1.y)/c,
        pux = uy, // perpendicular vector to unit vector
        puy = -ux;
      this.d = 1-pow(cosAlpha,2);
      this.x = c1.x + ux * (b*cosAlpha) + sign * pux * (b*sqrt(d));
      this.y = c1.y + uy * (b*cosAlpha) + sign * puy * (b*sqrt(d));
    } else {
      var l = this.h1;
      this.y = l.y;
      var r2 = c2.r,
      // (x-hajox)^2+(y-hajoy)^2=r2^2, y=y1
      // x^2-(2*hajox)*x+(hajox^2-r2^2+(y1-hajoy)^2)=0
      a=1, b=-2*c2.x, c=sq(c2.x)-sq(r2)+sq(this.y-c2.y),
      d=sq(b)-4*a*c;
      this.x = (-b+sign*sqrt(d))/2/a;
    }
    this.points.push({x: this.x, y: this.y, z: millis()});
  }
  
  draw() {
    this.update();
    const { points, sign, x, y } = this;
     // kötél
    stroke(piros); strokeWeight(4); noFill();
    
    // alja 
    beginShape();
    for (const v of points) {
      vertex(v.x, v.y);
    }
    endShape();
    
    // teteje
    
    stroke(feher); strokeWeight(4);
    const tau = 250; // fél periódusidő, ms
    
    // teteje 
    for (const v of points) {
      this.tollat((int(v.z) / tau % 2  == 0) ^ sign < 0);
      this.gotoXY(v.x, v.y);
    }
    this.tollat(false);
    
    // gömbök
    const gombMeret = 8;
    strokeWeight(1); stroke(0);
    fill(piros);
    ellipse(x, y, gombMeret,gombMeret);
  }
  
  
  // leteszi vagy felveszi a tollat
  tollat(newToll) {
    if (!this.toll && newToll) {
      this.toll = true;
      beginShape();
    }
    if (this.toll && !newToll) {
      this.toll = false;
      endShape();
    }
  }
  
  gotoXY(x, y) {
    if (this.toll) {
      vertex(x,y);
    }
  }
}


kotelek = new DList();
function addKotel(kotel) {
  kotelek.push(kotel);
}
