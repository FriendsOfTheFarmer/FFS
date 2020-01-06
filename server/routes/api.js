/* eslint-disable function-paren-newline */
const express = require('express');
const path = require('path');
const aController = require('../controllers/aController.js');

const router = express.Router();

router.get('/', aController.findAllMarkets, function (req, res, next) {
  console.log('in / after findAllMarkets');
  console.log('res.locals', res.locals.rows);
  const marketNameArr = res.locals.rows;

  res.status(200).json(marketNameArr);
}
)


router.get('/market-vendors', aController.findVendorByMarket, function (req, res, next) {
  console.log('in /market-vendors after findVendorByMarket');
  console.log('res.locals.rows', res.locals.rows);
  const vendorNameArr = res.locals.rows;

  res.status(200).json(vendorNameArr);
}
)

router.get('/vendors-date', aController.findVendorAtMarketsByDate, function (req, res, next) {
  console.log('in /market-vendors after findVendorAtMarketsByDate');
  console.log('res.locals', res.locals.rows);
  const vendorNameArr = res.locals.rows;

  res.status(200).json(vendorNameArr);
}
)

//a post request for the first half of the vendor submission form
router.post("/vendor-post", aController.createVendorDetails, (req, res, next) => {
  console.log('yoooooo');
  console.log(res.locals.particularVendor)
  res.status(200).send('hey dog vendor was added');
}
)

//a post request for the second half of the vendor submission form
router.post("/vendor-items", aController.createOrFindItem, aController.createVendorItems, (req, res, next) => {
  console.log('yeeet');
  console.log(res.locals.particularVendorItems)
  res.status(200).send('hey dog vendor item(s) and details were added');
}
)

router.get('/yo', function (req, res, next) {
  console.log('yoooooo');
  res.status(200).send('hey dog');
}
)


//place middle ware actions here
module.exports = router;
