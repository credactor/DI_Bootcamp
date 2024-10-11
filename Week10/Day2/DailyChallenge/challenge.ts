// Create a simple library system with TypeScript:
// Interface Book: Define an interface Book with the following properties:
//     title (string)
//     author (string)
//     isbn (string)
//     publishedYear (number)
//     An optional genre property (string)
// Class Library: Create a class Library with:
//     A private property books (array of Book).
//     A public method addBook to add a new book to the library.
//     A public method getBookDetails that returns details of a book based on the isbn.
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
//     A readonly property website (string) for the library’s website.
//     A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.

interface Book {    
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    books: Book[];
      constructor() {
        this.books = [];
    }
    public addBook(newBook: Book): void {
        this.books.push(newBook);
    }
    public getBookDetails(isbn: string): Book {
        return this.books.filter((book) => book.isbn === isbn)[0];
    }
}

class DigitalLibrary extends Library {
    website?: string;
    public listBooks() {
        return this.books.map((book) => book.title);
    }
}

const list = [{isbn: "1", title: "The Lord of the Rings", publishedYear: 1954, author: "J.R.R. Tolkien"},
{isbn: "2", title: "The Catcher in the Rye", publishedYear: 1951, author: "J.D. Salinger"},
{isbn: "3", title: "To Kill a Mockingbird", publishedYear: 1960, author: "Harper Lee", website: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"},
{isbn: "4", title: "Brave New World", publishedYear: 1932, author: "Aldous Huxley", genre: "dystopia"},
{isbn: "5", title: "Jane Eyre", publishedYear: 1847, author: "Charlotte Bronte", genre: "novel"}];
let myLib = new DigitalLibrary();
for (let item of list) {
    myLib.addBook(item);
}

console.log(myLib.getBookDetails("2"));
console.log(myLib.listBooks());
