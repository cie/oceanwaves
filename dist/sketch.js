"use strict";

var shipper;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  addHajo(new Hajo(width/2, height/2, 0));
  addWidget(new Scaler());
  addWidget(new Waver());
  addWidget(shipper = new Shipper());
  addWidget(new Stopper());
  addWidget(new Parter());
  addTooltip(new Tooltip());
  uiSetup();
}

var
water= '#056CAA',
sand = '#FAE3B1',
wave = '#B9FFFD',
piros = '#FF0000',
feher = '#FFFFFF',
helpColor= '#7C5922';


var
part = 40,
v1 = 50,
v2 = 50,
waveSize = 8,
parthullamv = 50;

var ndig = 2; // number of digits



function draw() {
  thd = topHitDraggable();
  
  push();
  
    viewport.draw();
    background(water);
    
    // tenger
    hullamok.drawAll();
    kotelek.drawAll();
  
    // tengerpart
    if (partShown) {
      fill(sand);
      noStroke();
      rect(-100000, height-part, 200000, 100000);
    }
    hajok.drawAll();
  
  pop();
  
  // ui
  widgets.drawAll();
  tooltips.drawAll();
}




var dragThreshold = 5;



function restart() {
  frozenTime = -1;
  startWaves();
}

function clear() {
  hullamok.clear();
  kotelek.clear();
}


var frozenTime = -1;

function t() {
  if (frozenTime > 0) {
    return frozenTime;
  } else {
    return millis();
  }
}

function clearIfFrozen() {
  if (frozenTime > 0) {
    clear();
    frozenTime = -1;
  }
}

function mouseClicked() {
  if (mouseButton == LEFT) {
    if (thd instanceof Shipper) {
      var s = thd;
      s.altTooltip = true;
    } else if (thd instanceof Hajo) {
      clearIfFrozen();
      addHullam(thd.createHullam());
    } else if (thd instanceof Viewport && viewport.origY(mouseY) > height-part && partShown) {
      clearIfFrozen();
      addHullam(new LinHullam(height-part, -parthullamv));   
    }
  }
}
