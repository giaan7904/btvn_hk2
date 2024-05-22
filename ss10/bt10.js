"use strict";
class Book {
    constructor(title, author, quantity = 1) {
        this.title = title;
        this.author = author;
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    addBook(newTitle, newAuthor, newQuantity = 1) {
        if (this.title === newTitle && this.author === newAuthor) {
            this._quantity += newQuantity;
            console.log(`Added ${newQuantity} more copies of ${newTitle} by ${newAuthor}. Total quantity now: ${this._quantity}`);
        }
        else {
            console.log(`Added a new book: ${newTitle} by ${newAuthor}`);
        }
    }
}
const library = new Book("The Great Gatsby", "F. Scott Fitzgerald", 2);
console.log(library.quantity);
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 3);
console.log(library.quantity);
