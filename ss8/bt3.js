"use strict";
const calculateArea = (geometry) => {
    switch (geometry.shape) {
        case "square":
            return geometry.sideLength * geometry.sideLength;
        case "circle":
            return Math.PI * geometry.radius * geometry.radius;
        default:
            throw new Error("Invalid geometry shape");
    }
};
const square = { shape: "square", sideLength: 5 };
const circle = { shape: "circle", radius: 3 };
console.log("Area of square:", calculateArea(square));
console.log("Area of circle:", calculateArea(circle));
