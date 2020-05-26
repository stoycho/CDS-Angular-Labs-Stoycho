function drawPoint(point) {
    console.log(point.x, point.y);
}
drawPoint({
    x: 1,
    y: 2,
    z: 3
    // Error: Argument of type '{ x: number; y: number; z: number; }' is not assignable to parameter of type 'Point'. Object literal may only specify known properties, and 'z' does not exist in type 'Point'.
});
