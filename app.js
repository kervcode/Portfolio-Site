//Import Express
const express = require("express");
//require the data file
const data = require("./data/data.json").projects;

// console.dir(data)
const app = express();

//set view engine setup
app.set("view engine", "pug");

//Static middleware
// app.use(express.static('public'));
app.use("/static", express.static("public"));
// app.use(express.static(__dirname + '/public'));

// Middleware
app.use((req, res, next) => {
  // console.log(data[0]);
  next();
});
/**
 * Set routes
 */

//index
app.get("/", (req, res) => {
  // console.log(data);
  const small_image = [];
  data.map((project) => small_image.push(project.image_urls[0]));
  console.log(small_image);
  res.render("index", { small_image });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.send("project");
});
app.get("/projects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  res.render("project", {
    title: data[id].project_name,
    description: data[id].description,
    image: data[id].image_urls,
    technologies: data[id].technologies,
    live_link: data[id].live_link,
    github_link: data[id].github_link,
  });
});

app.listen(3000, () => {
  console.log("SERVER LISTENING ON PORT 3000");
});
