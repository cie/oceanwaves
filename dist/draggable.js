class DList extends Array {
  drawAll() {
    for (let d of this) {
      d.draw();
    }
  }
}

