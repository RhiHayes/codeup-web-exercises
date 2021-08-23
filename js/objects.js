console.log("I'm connected");

(function(indexOf) {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Rhiannon",
        lastName: "Hayes",
        sayHello() {
            alert("Hello " + this.firstName + " " + this.lastName)
        }
    }

    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

/* NOTES FROM ME

Starting with the forEach Loop!

The forEach loop loops through every shopper and their amount (see shoppers object above).
Then it states that if the shopper's amount is greater than 200, they get a 12%. The math to do this is
executed and the discount is logged. If not, the discount is equal to zero and the discount of 0 is logged.

Then at the bottom, everything is logged!

 */


    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            var discount = shopper.amount * .12;
            console.log(shopper.amount - discount);
        } else {
            discount == 0;
            console.log(shopper.amount)
        }

        console.log("Here is the name: " + shopper.name + " and the amount: " + shopper.amount + "." + " Your discount is " + (shopper.amount - discount))



    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

/*NOTES FROM ME:

  This was probably the easiest thing to do for me.

  All of these books are inside of the books array object. Inside of each book is a nested author name, which includes the first and last name of the authors of the books.

   */



    var books = [
        {
            name: "Attack on Titan",
            authorName: {
                firstName: "Hajime",
                lastName: "Isayama"
            },
        },

        {
            name: "My Hero Academia",
            authorName: {
                firstName: "Kohei",
                lastName: "Horikoshi"
            },
        },

        {
            name: "Death Note",
            authorName: {
                firstName: "Tsugumi",
                lastName: "Ohba"
            },
        },

        {
            name: "Black Butler",
            authorName: {
                firstName: "Yana",
                lastName: "Toboso"
            },
        },


        {
            name: "Tokyo Ghoul",
            authorName: {
                firstName: "Sui",
                lastName: "Ishida"
            }

        }]

    console.log(books[0].name);
    console.log(books[0].authorName);
    console.log(books[0].authorName.firstName);
    console.log(books[0].authorName.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


 /* NOTES FROM ME

  The for each loop loops through all of the books!

  INCLUDE INDEX IN THE FOREACH LOOP IF YOU WANT THE INDEX TO BE LOGGED!

  - console.log(index) states the index of the books
  - the second console.log logs the title
  - the third console.log logs the author name
  the last console.log is a barrier

   */


    books.forEach(function(book, index) {
    console.log(index);
    console.log("Title: " + book.name);
    console.log("Author: " + book.authorName.firstName + " " + book.authorName.lastName);
    console.log("---------");
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();