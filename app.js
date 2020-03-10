//Import Express
const express = require("express");
//
const app = express();


//set view engine setup
app.set('view engine', 'pug');

//Static middleware
app.use(express.static('public'))


/**
 * Set routes
 */

//index
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/projects', (req, res) => {
  res.render('project')
});

app.listen(3001, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})