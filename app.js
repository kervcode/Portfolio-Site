//Import Express
const express = require("express");
//require the data file
const data = require("./data/data.json").projects;

// console.dir(data)
const app = express();


//set view engine setup
app.set('view engine', 'pug');

//Static middleware
// app.use(express.static('public'));
app.use('/static', express.static('public'))
// app.use(express.static(__dirname + '/public'));


/**
 * Set routes
 */

//index
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/projects/:id', (req, res) => {
  // const id = req
  console.log(req.params.id)
  // const projet = req.params.
  res.render('project')
});

app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})