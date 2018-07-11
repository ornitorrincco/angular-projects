var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ',y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //
    };
    return Point;
}());
// let point: Point;
let point = new Point(1,2);
// var point = new Point();
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
