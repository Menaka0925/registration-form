// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); // Add path module to serve static files

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration_form')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Import User model
const User = require('./models/User');

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Register Route
app.post('/register', (req, res) => {
  const { firstname, lastname, phone, birthdate, gender, email, password } = req.body;
  const newUser = new User({
      firstname,
      lastname,
      phone,
      birthdate,
      gender,
      email,
      password

  });


    newUser.save()
        .then(user => res.send('User registered successfully'))
        .catch(err => console.log(err));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
