const express = require('express');
const router = express.Router();

let messages = [
  { text: 'First message', user: 'Emil', added: new Date() },
  { text: 'Second message', user: 'User 2', added: new Date() }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const name = req.body.name;
  const msgText = req.body.message;

  messages = messages.concat({ text: msgText, user: name, added: new Date() });

  res.redirect('/');
});

module.exports = router;
