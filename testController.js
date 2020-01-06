const models = require('../models/aModel.js');
const fs = require('fs');
const path = require('path');
const dataController = {};
// vendorItems: array
// productPrice: array
// productDetails: array
// vendorName: string
// marketName: string
// blogPost: string
// vendorEmail: string
// vendorWebsite: string
// vendorPhone: string or number
dataController.getAllVendors = (req, res, next) => {
  let querryString = 'SELECT vendor_name FROM vendor';
  models.query(querryString)
  .then((data) => {
    console.log(data);
    res.locals.vendorNames = data;
    return next();
  })
  .catch((err) => {
    return next({
      log: 'dataController.getAllVendors: ERROR: Error from querry',
      message: { err: 'Error occurred in dataController.getAllVendors. Check server logs for more details.' }
    })
  })
}
dataController.uploadVendorDetails = (req, res, next) => {
  let queryString = '';
  let {vendorItems,
    productPrice,
    productDetails,
    vendorName,
    marketName,
    blogPost,
    vendorEmail,
    vendorWebsite,
    vendorPhone,} = req.body;
    models.query(querryString)
};
dataController.uploadVendorItems = (req, res, next) => {
  let queryString = '';
  let {vendorItems,
    productPrice,
    productDetails,
    vendorName,
   } = req.body;
    models.query(queryString)
};
//add controllers for DB works
module.exports = dataController
