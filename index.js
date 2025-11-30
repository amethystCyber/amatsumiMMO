const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors()); // allows frontend requests
app.use(bodyParser.json()); // allows JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // allows form submissions

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, "0.0.0.0", () => {
  console.log('Server running on http://localhost:3000');
});
