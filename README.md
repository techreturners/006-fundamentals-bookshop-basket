# Bookshop Further Exercises

The tasks within this repository build upon the Stock Manager tasks in the [Stock example repository].(https://github.com/techreturners/005-fundamentals-stock-example)

Its advised to complete the stock example tasks before continuing.

# Setting the scene

Our online book store is starting to take shape. 

We've got a database (JSON array) of books that we sell and we've got a piece of code (**stockmanager.js**) that provides information about the books we have in stock.

I think we're ready to create code that will allow people to add books in to their basket and in order to do this properly we can utilise our existing stock code.

We'll also enhance our stockmanager code to allow us to replenish our stock of books.

# Tasks

All the tasks below assume you will write the tests and the functionality for each requirement.

Try and do them in a TDD manner and write the tests before writing the code.

# 1) Fork and Clone Repo

Using GitHub fork this repository:

https://github.com/techreturners/006-fundamentals-bookshop-basket

Once **forked** you can clone it down to your laptops:

(Don't forget to ensure you're in the Developer directory and not already in another Git Repo)

```
git clone 
https://github.com/YOURUSERNAME/006-fundamentals-bookshop-basket.git
```

Also don't forget to run `npm install` before attempting to run any tests.

```
npm install
```


# 2) Creation of the basket and accompanying tests 

Go ahead and create a new JavaScript file for the basket. It should also have an accompanying test file.

# 3) Lets go shopping

We need the ability to add books to your basket.

When you add a book to your basket you will need to use the ISBN number and how many copies of the book you are adding in to your basket. So the function will look like this:

```
function addBookToBasket(isbnNumberOfBook, numberOfCopiesToAdd) {
    // Code to add book to basket
}
```

The basket will need to:

* Identify the correct book using the **stockmanager** (HINT: Remember how we import coding using **require**).
* Keep track of the books added to your basket along with how many copies of the book you choose. (HINT: An array would be good to use here)
* Update the **stockmanager** to ensure that the copies left of the particular book has been updated.

# 4) Lets change our mind

Similar to task 3 - we need to allow people to take books out of their basket and put them back on the shelf. Don't forget people may put 3 copies of a book in their basket and then return just 1 or they might choose to return all three copies.

Again the function will look like this:

```
function removeBookFromBasket(isbnNumberOfBook, numberOfCopiesToRemove) {
    // Code to remove book(s) from basket
}
```

# 5) But wait what happens if I try to add more copies than there are available?

So we know that in our stock we keep a track of copies for each book, people are now able to add/remove books from their basket and that has an impact on the number of copies available.

In real life we know that people can add a finite number of books into their basket. Basically as many as they can see on the shelf.

However, in application terms the visitor to our new online store doesn't really know how many copies are available for a book. 

So they might try to add three copies when there are only 2 remaining.

Our basket and stockmanager need to handle this.

If the user tries to add more copies than there are available then we shall throw an error and NO books will get added to the basket.

For example: That means if there are **two** copies left and we try to add **three** copies of a book to our basket then we respond with an error (even though in theory we could have added two books and told the person about the third).

In JavaScript the way your **throw** errors or test for errors can be done with `throw/try/catch` statements.

Before continuing have a read here:

**Throwing Errors**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

**try/catch**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

These are new topics so take time to read/watch videos around **JavaScript throwing errors** and **JavaScript try catch**.

HINT:

When the stockmanager decrements the copies count, if the copies count goes below zero it should **throw** an error.

The basket `addBookToBasket` function should contain the **try** and **catch** statements.

Also our testing library called Jest has a nifty test assertion that would allow you to ensure that the stockmanager has indeed **thrown** an error.

https://jestjs.io/docs/en/expect#tothrowerror



**NOTE**

Don't forget to save and COMMIT - little and often. This helps us see your working. Once you are happy with your code PUSH it up to your GitRepo and drop us a Slack message to review and feedback.



