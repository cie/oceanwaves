class Tooltip {
  draw() {
    const d = (dragSource != null ? dragSource : thd);
    if (d.tooltip) {
      if (mousePressed && !(d instanceof Hullamver)) return;
      const t = d;
      const text =  t.tooltip();
      
      if (text != null) {
        stroke(230, 200);
        fill(30, 200);
        strokeWeight(1);
      
        const r = 5, ra=5, w = textWidth(text), h = 10, a = w*0.4+r, x=mouseX-a, ymargin = 5, y = mouseY-h-3*r-ymargin;
      
        if (x < 2) {
          a+=x-2; x=2;
        }
        if (x+w+2*r > width-2) {
          a+=(x+w+2*r+2-width); x = width-2-w-2*r;
        }
      
        bubble(x,y,2*r+w,2*r+h,r,r,a,ra);
        fill(230);
        text(text, x+r,y+h+r);
      }
    }
  }
}

function addTooltip(t) {
  tooltips.push(t);
}
