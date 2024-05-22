class Book {
    private _quantity: number;

    constructor(public title: string, public author: string, quantity: number = 1) {
        this._quantity = quantity;
    }

    get quantity(): number {
        return this._quantity;
    }

    addBook(newTitle: string, newAuthor: string, newQuantity: number = 1): void {
        if (this.title === newTitle && this.author === newAuthor) {
            this._quantity += newQuantity;
            console.log(`Added ${newQuantity} more copies of ${newTitle} by ${newAuthor}. Total quantity now: ${this._quantity}`);
        } else {
            console.log(`Added a new book: ${newTitle} by ${newAuthor}`);
        }
    }
}
const library = new Book("The Great Gatsby", "F. Scott Fitzgerald", 2);
console.log(library.quantity);
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 3);
console.log(library.quantity); 
