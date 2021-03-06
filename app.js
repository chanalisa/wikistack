const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const layout = require('./views/layout');
const { db } = require('./models');
const app = express();

// parses data received from user into a format usable by the server
app.use(express.urlencoded({ extended: false }));
// makes this directory available to the user
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get("/", (req, res) => {
    console.log("Hello, World!");
    res.send(layout('IS IT LUNCH TIME YET!?'));
})

const PORT = 1337;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

