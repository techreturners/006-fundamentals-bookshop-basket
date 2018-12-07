const stockManager = require('../app/stockmanager');

//
// This test checks that the stock manager correctly reports that the
// stock manager correctly reports that there are 5 different titles in stock.
//
test('Check that there are 5 titles in stock', () => {
    expect(stockManager.getStock().length).toBe(5);
});

// 
// This test checks that the stock manager can correctly fetch a book
// by ISBN number
//
// HINT For this one you should be able to use the ES6 filter method:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
test('Check that the stock manager can fetch a book by ISBN', () => {

    const isbnNUmberToCheck = "784-461";
    const book = stockManager.getBookByIsbn(isbnNUmberToCheck);
    expect(book.title).toBe("The Witches");
});


// 
// This test checks that the stock manager can correctly report how many copies
// are present for a particular book.
//
// Each book is identified by an ISBN number
//
test('Check that the stock manager can report the number of copies available for a particular book', () => {

    const isbnNUmberToCheck = "123-456";
    expect(stockManager.getCopiesForBook(isbnNUmberToCheck)).toBe(3);
});