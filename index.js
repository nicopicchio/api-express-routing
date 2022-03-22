const express = require('express');
const app = express();
const port = 3030;
const cors = require('cors');
const morgan = require('morgan');
const data = require('./data');

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
  console.log(req.params)
  res.json({ user: data.users.find(user => user.id === parseInt(req.params.id)) });
})

// //POST /users - adds a new user
app.post("/users", (req, res) => {

//   //We can get the json data from the post body using req.body
//   console.log("in post USERS, body is:", req.body)

//   //Create the new user
  const newUser = {
    id: data.users.length+1,
    //Get the email property from the post body
    email: req.body.email
  }
  data.users.push(newUser)
  res.json({user:newUser})
})
