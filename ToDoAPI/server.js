// Init
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

// Set up a const for express and a port
const app = express();
const port = 3000;

// Init connection to database
const db = require('./db');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routers
const todoRouter = require('./routes/todo.route');

// Use routers
app.use('/todo', todoRouter);

// Start listening/server
app.listen(port, () => console.log(`ToDo API listening on port ${port}...`));