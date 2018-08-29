new p5((_p: p5) => {
  p = _p
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }
  p.draw = () => {
    p.push()
    p.pop()
  }
  p.mouseClicked = () => {
    if (p.mouseButton == p.LEFT) {
    }
  }
})

let p: p5


const
  water = '#056CAA',
  sand = '#FAE3B1',
  wave = '#B9FFFD',
  piros = '#FF0000',
  feher = '#FFFFFF',
  helpColor= '#7C5922'

const
  part = 40,
  v1 = 50,
  v2 = 50,
  waveSize = 8,
  parthullamv = 50;


const 
  ndig = 2; // number of digits

const
  dragThreshold = 5;

let frozenTime = -1;

export function restart() {
  frozenTime = -1;
}

export function clear() {

}

export function t() {
  if (frozenTime > 0) {
    return frozenTime
  } else {
    return p.millis();
  }
}

console.log(t())
