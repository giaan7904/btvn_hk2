"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach(book => {
            book.printInfo();
        });
    }
}
const book1 = new Book('Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Nhật Ánh');
const book2 = new Book('Dế Mèn Phiêu Lưu Ký', 'Tô Hoài');
const book3 = new Book('Chí Phèo', 'Nam Cao');
const book4 = new Book('Lão Hạc', 'Nam Cao');
const book5 = new Book('Số đỏ', 'Nguyễn Hồng');
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
