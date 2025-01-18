const { Router } = require("express");
const newrouter = Router();

// Route for the homepage
newrouter.get('/', (req, res) => {
    res.render('form'); // Rendering the 'form' template
  });

module.exports = newrouter;