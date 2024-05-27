"use strict";
// Lớp Book
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
// Lớp Member
class Member {
    constructor(id, name, contact, books, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
}
// Lớp LendedBook
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
// Lớp Library
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    // Phương thức thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Phương thức hiển thị tất cả sách trong thư viện
    showBooks() {
        console.log("Tất cả sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng tồn kho: ${book.stock}, Trạng thái: ${book.status}`);
        });
    }
}
// Khởi tạo thư viện và sách
const library = new Library();
const book1 = new Book(1, "Nhà Giả Kim", "Paulo Coelho", 5, "Available");
const book2 = new Book(2, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 3, "Available");
const book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee", 7, "Available");
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// Hiển thị tất cả sách trong thư viện
library.showBooks();
