var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  }
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'hello' });
});

router.post('/new', function (req, res, next) {
  messages.push({ text: req.body.text, user: req.body.user, added: new Date().toJSON().slice(0, 10).replace(/-/g, '/') })
  res.redirect('/')
});



module.exports = router;
