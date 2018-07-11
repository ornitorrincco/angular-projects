class Point {
  constructor(private _x?: number, private _y?: number){
  }

  draw() {
    console.log('x: ' + this._x + ',y:' + this._y);
  }

  get X() {
    return this.x;
  }

  set X(value) {
    if (value < 0) {
      throw new Error('value cannot be lesss than 0.');
    }
    this._x = value;
  }
  getDistance(another: Point) {
    //
  }
}

// let point: Point;
let point = new Point(1,2);
// let point = new Point();
// let x = point.getX();
// point.setX(10);
// let x = point.X;
// point.X = 10;
point.draw();


// interface Point {
//   x: number,
//   y: number,
//   draw: () => void
// }
// inline anotation, point is for any
// let drawPoint = (point: Point) => {
// // ...
// }
//
// let getDistance = ( pointA: Point, pointB: Point) => {
//   //  ...
// }

// drawPoint({
//   x:1,
//   y:2
// })
