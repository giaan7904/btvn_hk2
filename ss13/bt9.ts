// Lớp Book
class Book {
    constructor(public id: number, public title: string, public author: string, public stock: number, public status: string) {}
}

// Lớp Member
class Member {
    constructor(public id: number, public name: string, public contact: string, public books: Book[], public status: string) {}
}

// Lớp LendedBook
class LendedBook {
    constructor(public memberId: number, public bookId: number, public dueDate: string) {}
}

// Lớp Library
class Library {
    private books: Book[];
    private members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    // Phương thức thêm sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Phương thức hiển thị tất cả sách trong thư viện
    showBooks(): void {
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
