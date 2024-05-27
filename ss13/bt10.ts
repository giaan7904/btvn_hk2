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

    // Phương thức đăng ký thành viên cho thư viện
    registerMember(name: string, contact: string): void {
        const memberId = this.members.length + 1;
        const newMember = new Member(memberId, name, contact, [], "Active");
        this.members.push(newMember);
    }

    // Phương thức block thành viên thư viện
    blockMember(memberId: number): void {
        const member = this.members.find(member => member.id === memberId);
        if (member) {
            member.status = "Blocked";
        }
    }

    // Phương thức hiển thị tất cả thành viên trong thư viện
    showMembers(): void {
        console.log("Tất cả thành viên trong thư viện:");
        this.members.forEach(member => {
            console.log(`ID: ${member.id}, Tên: ${member.name}, Liên hệ: ${member.contact}, Trạng thái: ${member.status}`);
        });
    }
}

// Khởi tạo thư viện và thực hiện đăng ký thành viên
const library = new Library();
library.registerMember("John Doe", "john@example.com");
library.registerMember("Jane Smith", "jane@example.com");

// Hiển thị tất cả thành viên trong thư viện
library.showMembers();

// Block thành viên có ID là 1
library.blockMember(1);

console.log("\nSau khi block thành viên có ID là 1:");
library.showMembers();
