/* eslint-disable function-paren-newline */
const express = require('express');

const aController = require('../controllers/aController.js');

const router = express.Router();

router.get('/', function(req, res) {
  console.log('yoooooo');
  res.status(200).send('hey dog');
}
)


//place middle ware actions here
module.exports = router;