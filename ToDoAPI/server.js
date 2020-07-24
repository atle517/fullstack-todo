const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const db = require('./db');

// Middleware
app.use(bodyParser.json());

// Routers
const todoRouter = require('./routes/todo.route');

// Use routers
app.use('/todo', todoRouter);

app.listen(port, () => console.log(`ToDo API listening on port ${port}...`));