const express = require("express");
const app = express();
const indexrouter = require("./routers/indexrouter");
const newrouter = require('./routers/newrouter')
//router line only need if I want a router to handle the view

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");//serving static assets
app.use(express.static(assetsPath));//like a CSS file
app.use(express.urlencoded({ extended:true }))

app.set("views", path.join(__dirname, "views"));//for views tutorial.
app.set("view engine", "ejs");//these essentially tell my machine to use an engine and where to find
//views

app.use('/', indexrouter);//indexrouter will handle the ejs view
app.use('/new', newrouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
