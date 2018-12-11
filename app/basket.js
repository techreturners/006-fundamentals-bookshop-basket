const stockManager = require('./stockmanager');

// Our basket starts as empty
let booksInBasket = [];

function addBookToBasket(isbnNumberOfBook, numberOfCopiesToAdd) {
    
    try {
        let book = stockManager.getBookByIsbn(isbnNumberOfBook);

        stockManager.decreaseCopiesRemainingForBook(isbnNumberOfBook, numberOfCopiesToAdd);

        for(let i =0; i < numberOfCopiesToAdd; i++) {
            booksInBasket.push(book);
        }
    }
    catch(error) {
        console.error("Not enough copies remaining for book", error);
    }
}

function removeBookFromBasket(isbnNumberOfBook, numberOfCopiesToRemove) {

    stockManager.replenishCopiesRemainingForBook(isbnNumberOfBook, numberOfCopiesToRemove);
    for(let i = booksInBasket.length - 1; i >= 0; i--) {
        if(booksInBasket[i].isbn == isbnNumberOfBook && numberOfCopiesToRemove > 0 ) {
            booksInBasket.splice(i, 1);
            numberOfCopiesToRemove--;
        }
    }
}

function getBasket() {
    return booksInBasket;
}

module.exports = {
    getBasket,
    addBookToBasket,
    removeBookFromBasket
}

