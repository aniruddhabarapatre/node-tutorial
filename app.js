var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var blogEngine = require('./blog');

// Page routes
app.get('/', function(req, res) {
  res.render('index',{ title: 'Home Page', entries: blogEngine.getBlogEntries() });
});

app.get('/article/:id', function(req, res) {
  var entry = blogEngine.getBlogEntry(req.params.id);
  res.render('article',{ title: entry.title, blog: entry });
});

console.log('Listening at port 3000');
app.listen(3000);
