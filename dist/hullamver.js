class Hullamver extends Scaler {
  constructor(ahajo) {
    super();
    this.hajo = ahajo;
    this.x = log(ahajo.hullamv/parthullamv) / log(base) + 0.5;
    this.left = mouseX - w*x;
    this.top = mouseY - h/2;
    this.base = 15;
  }
  
  top() {
    return this.top;
  }

  left() {
    return this.left;
  }

  tooltip() {
    return nf(f()/parthullamv,0,ndig);
  }
  
  f() {
    return parthullamv * pow(this.base,this.x-0.5);
  }
  
  calc() {
    this.x = (mouseX-this.left())*1.0/w;
    //x = constrain(x, 0, 1);
  }

  mouseDragged() {
    calc();
    this.hajo.hullamv=f();
  }
  mousePressed() {
  }
  mouseReleased() {
    remove(this);
  }
}
