const basket = require('../app/basket');

test('Check basket is empty', () => {
    expect(basket.getBasket().length).toBe(0);
});

test('Check that a books gets added to basket', () => {
    basket.addBookToBasket("784-461", 1);
    expect(basket.getBasket().length).toBe(1);
});

test('Check that a books gets removed from the basket', () => {

    basket.removeBookFromBasket("784-461", 1);
    expect(basket.getBasket().length).toBe(0);
});

test('Check that multiple books gets added to basket', () => {

    basket.addBookToBasket("784-461", 5);
    expect(basket.getBasket().length).toBe(5);
});

test('Check that multiple books gets fully removed from basket', () => {

    basket.removeBookFromBasket("784-461", 5);
    expect(basket.getBasket().length).toBe(0);
});


test('Check that multiple books get added and that 1 or 2 can be removed', () => {
    basket.addBookToBasket("784-461", 5);
    basket.removeBookFromBasket("784-461", 2);
    expect(basket.getBasket().length).toBe(3);
});

test('Check that we cannot add more than the available copies', () => {

    // Already taken three copies
    expect(basket.getBasket().length).toBe(3);

    // Now try and taken 6 copies (there are only 8 in stock)
    basket.addBookToBasket("784-461", 6);

    // Basket shouldn't be updated
    expect(basket.getBasket().length).toBe(3);
});