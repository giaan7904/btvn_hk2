"use strict";
// Class Point
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } // Thuộc tính và constructor
    // Phương thức tính khoảng cách từ điểm hiện tại đến điểm khác
    distanceTo(otherPoint) {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
// Tạo đối tượng từ lớp Point
const point1 = new Point(0, 0);
const point2 = new Point(3, 4);
console.log(point1.distanceTo(point2)); // Output: 5
