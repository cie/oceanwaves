class Widget {
  zIndex() {
    return 10;
  }

  cursor() {
    return HAND;
  }
  
  tooltip() {
    return null;
  }
}

function addWidget(w) {
  draggables.push(w);
  widgets.push(w);
}
function removeWidget(w) {
  if (~draggables.indexOf(w)) draggables.splice(draggables.indexOf(w), 1);
  if (~widgets.indexOf(w)) draggables.splice(widgets.indexOf(w), 1);
}
