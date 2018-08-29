 
var draggables = [];
var hajok =  new DList();
var widgets = new DList();
var tooltips = new DList();

const viewport = new Viewport();

const dimActive=120, dimNormal = 80;
  
function uiSetup() {
  draggables.push(viewport);
}

function mouseMoved() {
  thd = topHitDraggable();
  if (!mousePressed) {
    cursor(thd.cursor());
  }
}

function mouseDragged() {
  thd = topHitDraggable();
  if (dragSource != null) {
    dragSource.mouseDragged();
  }
}

var thd;

function topHitDraggable() {
  let result = null;
  let zIndex = 0;
  for (const d of draggables) {
    if (d.hit()) {
      if (result == null || d.zIndex() > zIndex) {
        result = d;
        zIndex = d.zIndex();
      }
    }
  }
  return result;
}

var dragmouseX, dragmouseY;
var dragSource;

function mousePressed() {
  thd = topHitDraggable();
  dragSource = thd;
  dragSource.mousePressed();
  cursor(dragSource.cursor());
}


function mouseReleased() {
  if (null != dragSource) {
    dragSource.mouseReleased();
    dragSource = null;
  }
}
