const express = require('express');
const router = express.Router();

const messages = [
  { text: 'First message', user: 'Emil', added: new Date() },
  { text: 'Second message', user: 'User 2', added: new Date() }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

module.exports = router;
