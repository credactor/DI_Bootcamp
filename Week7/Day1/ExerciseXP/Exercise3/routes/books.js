const express = require('express');
const router = express.Router();

const books = [{id: 1, title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien"},
{id: 2, title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger"},
{id: 3, title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee"},
{id: 4, title: "Brave New World", year: 1932, author: "Aldous Huxley"},
{id: 5, title: "Jane Eyre", year: 1847, author: "Charlotte Bronte"},
{id: 6, title: "Crime and Punishment", year: 1866, author: "Fyodor Dostoevsky"},
{id: 7, title: "War and Peace", year: 1867, author: "Leo Tolstoy"},
{id: 8, title: "Ulysses", year: 1922, author: "James Joyce"},
{id: 9, title: "Les Miserables", year: 1862, author: "Victor Hugo"}];
// {"title": "Vanity Fair", "year": 1847, "author": "W.M. Thackeray"}

router.get('/', (req, res) =>{
  res.json(books);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const book = req.body;
  const newBook = {id: books.length + 1, title: book.title, year: book.year, author: book.author};
  books.push(newBook);
  res.json(books);
});

router.put("/:id", (req, res) => {
  const {id} = req.params;
  const book = req.body;
  const index = books.findIndex((item) => item.id == id);
  if (index !== -1) {
      books[index] = { ...books[index], title: book.title, year: book.year, author: book.author};
      res.json(books);
  } else {
      res.status(404).json({ message: 'Book not found' });
  }
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  const index = books.findIndex((item) => item.id == id);
  if (index != -1) {
      books.splice(index, 1);
      res.json(books);
  } else {
      res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;