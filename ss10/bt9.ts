class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public getTitle(): string {
        return this.title;
    }
    public getAuthor(): string {
        return this.author;
    }
    public printInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public viewBooks(): void {
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
