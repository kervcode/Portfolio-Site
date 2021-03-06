//Import Express
const express = require("express");
// Import body-parser middle
const bodyParser = require('body-parser');
//require the data file
const data = require("./data/data.json").projects;

// console.dir(data)
const app = express();

//set view engine setup
app.set("view engine", "pug");

//Static middleware
// app.use(express.static('public'));
app.use(bodyParser.json());
app.use("/static", express.static("public"));
// app.use(express.static(__dirname + '/public'));

// Middleware
app.use((req, res, next) => {
  console.log(req.params);
  next();
});

// Error Middleware
app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(500)
  res.render('error')
});
/**
 * Set routes
 */

//index
app.get("/", (req, res) => {
  res.render("index", { data });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.render("project", { data });
});

app.get("/projects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  res.render("project", { data
    // title: data[id].project_name,
    // description: data[id].description,
    // image: data[id].image_urls,
    // technologies: data[id].technologies,
    // live_link: data[id].live_link,
    // github_link: data[id].github_link,
  });
});

app.listen(3000, () => {
  console.log("SERVER LISTENING ON PORT 3000");
});
