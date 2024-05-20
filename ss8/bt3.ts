interface Square {
    shape: "square";
    sideLength: number;
}

interface Circle {
    shape: "circle";
    radius: number;
}

type Geometry = Square | Circle; 

const calculateArea = (geometry: Geometry): number => {
    switch (geometry.shape) {
        case "square":
            return geometry.sideLength * geometry.sideLength;
        case "circle":
            return Math.PI * geometry.radius * geometry.radius;
        default:
            throw new Error("Invalid geometry shape");
    }
};

const square: Square = { shape: "square", sideLength: 5 };
const circle: Circle = { shape: "circle", radius: 3 };

console.log("Area of square:", calculateArea(square)); 
console.log("Area of circle:", calculateArea(circle)); 
