const express = require('express');
const app = express();
const port = 3030;
const cors = require('cors');
const morgan = require('morgan');
const data = require('./data');
const { films } = require('./data');

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/* START SERVER */
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/`);
});

// GET /users
app.get('/users', (req, res) => {
	res.json({ user: data.users });
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
	console.log(req.params);
	res.json({
		user: data.users.find((user) => user.id === parseInt(req.params.id)),
	});
});

// //POST /users - adds a new user
app.post('/users', (req, res) => {
	//   //We can get the json data from the post body using req.body
	//   console.log("in post USERS, body is:", req.body)

	//   //Create the new user
	const newUser = {
		id: data.users.length + 1,
		//Get the email property from the post body
		email: req.body.email,
	};
	data.users.push(newUser);
	res.json({ user: newUser });
});




// GET /films
app.get('/films', (req, res) => {
  if (req.query.director) {
    res.json({film: data.films.filter((film) => film.director === req.query.director) })
  }
	res.json({ film: data.films});
});




// GET /film:id
app.get('/films/:id', (req, res) => {
	res.json({
		film: data.films.find((film) => film.id === parseInt(req.params.id)),
	});
});

// POST /films - adds a new film
app.post('/films', (req, res) => {
	const newFilm = {
		id: data.films.length + 1,
		title: req.body.title,
		director: req.body.director,
	};
	data.films.push(newFilm);
	res.json({ film: newFilm });
});

// GET /books
app.get('/books', (req, res) => {
	res.json({ books: data.books });
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
	res.json({
		book: data.books.find((book) => book.id === parseInt(req.params.id)),
	});
});

// POST /books - adds a new book
app.post('/books', (req, res) => {
	const newBook = {
		id: data.books.length + 1,
		title: req.body.title,
		type: req.body.type,
		author: req.body.author,
	};
	data.books.push(newBook);
	res.json({ newBook });
});
