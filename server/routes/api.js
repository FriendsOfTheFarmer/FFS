/* eslint-disable function-paren-newline */
const express = require('express');
const path = require('path');
const aController = require('../controllers/aController.js');

const router = express.Router();

router.get('/', aController.findAllMarkets, function(req, res) {
  console.log('in / after findAllMarkets');
  console.log('res.locals', res.locals.rows);
  const marketNameArr = res.locals.rows;

  res.status(200).json(marketNameArr);
}
)


router.get('/market-vendors', aController.findVendorByMarket, function(req, res) {
  console.log('in /market-vendors after findVendorByMarket');
  console.log('res.locals', res.locals.rows);
  const vendorNameArr = res.locals.rows;

  res.status(200).json(vendorNameArr);
}
)

router.get('/vendors-date', aController.findVendorAtMarketsByDate, function(req, res) {
  console.log('in /market-vendors after findVendorAtMarketsByDate');
  console.log('res.locals', res.locals.rows);
  const vendorNameArr = res.locals.rows;

  res.status(200).json(vendorNameArr);
}
)

router.get('/yo', function(req, res) {
  console.log('yoooooo');
  res.status(200).send('hey dog');
}
)


//place middle ware actions here
module.exports = router;
