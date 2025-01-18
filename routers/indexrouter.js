const { Router } = require("express");
const indexrouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Durgler",
        added: new Date()
    },
    {
        text: "Arigato!",
        user: "Gruffler",
        added: new Date()
    },
    {
        text: "Bounjour",
        user: "Daoism",
        added: new Date()
    },
] //Minimized hard code

// Route for the homepage
indexrouter.get('/', (req, res) => {
  res.render('index', { messages: messages }); //the ejs variable: this file's variable
});

indexrouter.get('/new', (req, res) => {
    res.render('form'); // Rendering the 'form' template
  });

indexrouter.post('/', (req,res) => {
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    });
    res.redirect("/")
})

module.exports = indexrouter;
/*
router.post("/", (req,res) => {
    const isValid = true
    if (!isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)//go to the URL with the newest user via index math
    } else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })//puts users old input back
    }
})*/