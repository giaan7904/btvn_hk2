class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        this.width = width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    public printInfo(): void {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
        console.log(`Area: ${this.getArea()}`);
    }
}
const myRectangle = new Rectangle(10, 5);
myRectangle.printInfo();
myRectangle.setWidth(15);
myRectangle.setHeight(8);
console.log('After updating dimensions:');
myRectangle.printInfo();
