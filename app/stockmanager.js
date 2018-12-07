let stockOfBooks = [ 
    {
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: "435-678",
        copies: 10
    },
    {
        title: "You don't know JS",
        author: "Kyle Simpson",
        isbn: "123-456",
        copies: 3
    },
    {
        title: "James and the Giant Peach",
        author: "Roald Dahl",
        isbn: "784-782",
        copies: 2
    },
    {
        title: "The Witches",
        author: "Roald Dahl",
        isbn: "784-461",
        copies: 8
    },
    {
        title: "The BFG",
        author: "Roald Dahl",
        isbn: "777-888",
        copies: 2
    }
];

function getStock() {
    return stockOfBooks;
}

function getBookByIsbn(isbnNumber) {
    const booksMatchingFilter = stockOfBooks.filter( book => book.isbn == isbnNumber );
    return booksMatchingFilter[0];
}

function getCopiesForBook(isbnNumber) {
    const book = getBookByIsbn(isbnNumber);
    return book.copies;
}

module.exports = {
    getStock,
    getBookByIsbn,
    getCopiesForBook
}

