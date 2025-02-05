const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

const todoRoutes = require('./routes/todoRoutes');

app.use('/api/v1/todos', todoRoutes);

module.exports = app;