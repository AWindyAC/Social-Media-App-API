//Make a routes folder and controller
//Try to follow MVC
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); //importing mongoose
const routes = require('./routes/api/index.js');

const app = express();
const PORT = 3000;

//Setting up MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log(err));

//Middleware to get express to read JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//
db.once("open", () => {
    app.listen(PORT, () => console.log('App server is running...'));
});
