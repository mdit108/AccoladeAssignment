const express = require('express');
const app = express();
const db = require('./db');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


const Book = require('./BookSchema.js');

// Create
app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (e) {
    res.status(500).send();
  }
});

// Update
app.patch('/books/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'author', 'publishedDate', 'description'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
 }

 try {
   const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
     new: true,
     runValidators: true,
   });

   if (!book) {
     return res.status(404).send();
   }

   res.send(book);
 } catch (e) {
   res.status(400).send(e);
 }
 });

 // Delete
app.delete('/books/:id', async (req, res) => {
try {
const book = await Book.findByIdAndDelete(req.params.id);
 if (!book) {
     return res.status(404).send();
   }

   res.send(book);
 } catch (e) {
   res.status(500).send();
 }
});



//To add a new book: Send post request to http://localhost:3000/books with data
/*{
"title": "The Hitchhiker's Guide to the Galaxy",
"author": "Douglas Adams",
"publishedDate": "1979-10-12",
"description": "A hilarious science fiction classic."
}
*/
