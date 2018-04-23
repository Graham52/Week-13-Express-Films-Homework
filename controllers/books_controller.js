const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

books_dataRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.get('/:id', function (req, res) {
  const film = booksData.find(req.params.id);
  res.json({ book: book} );
});

booksRouter.post('/', function (req, res) {
  const newBook = req.body.film;
  booksData.add(newBook);
  res.json({ books: booksData.all() });
});

booksRouter.put('/:id', function (req, res) {
  const updatedBook = req.body.film;
  const index = req.params.id;
  booksData.update(index, updatedBook)
  res.json({ books: boooksData.all() });
});

booksRouter.delete('/:id', function (req, res) {
  const index = req.params.id;
  booksData.delete(index, 1);
  res.json({ books: booksData.all() });
});

module.exports = booksRouter;
