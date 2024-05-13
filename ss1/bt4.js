let books = [
    { id: 1, name: 'Sách 1' },
    { id: 2, name: 'Sách 2' },
    { id: 3, name: 'Sách 3' },
];
function findBookById(id) {
    let book = books.find(book => book.id === id);
    if (book) {
        console.log(`Id: ${book.id}, Tên sách: ${book.name}`);
    } else {
        console.log('Không có kết quả tìm kiếm');
    }
}
findBookById(1); 
