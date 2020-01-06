const db = require('../models/aModel.js');
const fs = require('fs');
const path = require('path');
const aController = {};

/*
  helpful query examples

  add column to table:
  alter table vendor_item
  add column "market_id" integer NOT NULL;

  insert data into multiple columns at once
  INSERT INTO business_hours (hours_day, hours_open, hours_close, market_hours_id)
  VALUES (0, '09:00', '14:00', 7);

  alter table vendor
  alter column "vendor_phone" set data type varchar(255);

  INSERT INTO vendor_item (vendor_item_price, vendor_item_details, vendor_id, item_id, date_id, market_id )
 VALUES ('1.25', 'The dilliest dalliest pickles you ever did eat.', '1', '1', '1', '1');

  INSERT INTO vendor (vendor_name, vendor_phone, vendor_website, vendor_email, vendor_bio)
 VALUES ('Boris Farms', '(555) 555-5555', 'http://www.borisfarmfun.com', 'boris@borisfarmfun.com', 'Boris loves to farm!');

 */

 // To-Do
//  Find all Market on page load (customer facing) - Done
// Find all Vendors per Market when they click on drop down (customer facing) - Done
// Find all Items by Vendor for single Market -> Sorted By Date - Done
// Search all items for all vendors, sorted by date, per market

// aController.sendMainApp = (req, res, next) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../../client/index.html'));
//   return next ();
// }

aController.findAllMarkets = (req, res, next) => {
   // get all markets

    const sqlQueryStr = `select *
                          from market
                          order by
                          market_name ASC
                          ;`
                          ;

    db.query(sqlQueryStr).then((data) => {
      res.locals = data;
      // console.log('data: ', res.locals.rows);
      return next();
    })

};

 aController.createVendorDetails = (req, res, next) => {
    // post vendor details

     // for this to work the application will have to send these in the body of
     //  the request as json object containing these keys.
     const { vendor_name,
     vendor_phone,
     vendor_website,
     vendor_email,
     vendor_bio } = req.body; // or req.params depending how we build it

     const values = [vendor_name,
     vendor_phone,
     vendor_website,
     vendor_email,
     vendor_bio];

     res.locals.particularVendor = values;
     next();
    // please uncomment below and delete lines 74+75 to have the query do it's thing
    //  const sqlQueryStr = `insert into vendor
    //                        (vendor_name,
    //                        vendor_phone,
    //                        vendor_website,
    //                        vendor_email,
    //                        vendor_bio)
    //                        values
    //                        ($1, $2, $3, $4, $5)
    //                        ;`
    //                        ;

    //  db.query(sqlQueryStr, values).then((data) => {
    //    res.locals = data;
    //    // console.log('data: ', res.locals.rows);
    //    return next();
    //  })
    //    .catch((err) => next(err));
 };



  aController.createVendorItems = (req, res, next) => {
    // post vendor details

     // for this to work the application will have to send these in the body of
     //  the request as json object containing these keys.
     const { item_name,
     vendor_item_price,
     vendor_item_details,
     market_vendor_date,
     market_name,
     vendor_name} = req.body; // or req.params depending how we build it

     const values = [item_name,
     vendor_item_price,
     vendor_item_details,
     market_vendor_date,
     market_name,
     vendor_name];

     res.locals.particularVendorItems = values;
     next();
    // please uncomment below and delete lines 74+75 to have the query do it's thing
    //  const sqlQueryStr = NEED TO BUILD THIS OUT

    //  db.query(sqlQueryStr, values).then((data) => {
    //    res.locals = data;
    //    // console.log('data: ', res.locals.rows);
    //    return next();
    //  })
    //    .catch((err) => next(err));
 };

aController.findVendorDetails = (req, res, next) => {
    // get single vendor details

    // write code here
    // console.log('req: ', req);
    // console.log('req.query.id: ', req.query.id);
    // const values = [req.query.id];

    const { vendor_name } = req.body; // or req.params depending how we build it

    const values = [vendor_name];
    const sqlQueryStr = `select
                          vendor_name,
                          vendor_phone,
                          vendor_website,
                          vendor_email,
                          vendor_bio,
                          market_name

                          from date d
                          inner join market m
                          on m.market_id = d.market_id
                          inner join vendor v
                          on v.vendor_id = d.vendor_id
                          where vendor_name like $1
                          order by
                          market_name ASC
                          ;`
                          ;

    db.query(sqlQueryStr, values).then((data) => {
      res.locals = data;
      // console.log('data: ', res.locals.rows);
      return next();
    })
      .catch((err) => next(err));
};

aController.findVendorByMarket = (req, res, next) => {
    // search for list of vendors by markets sorted  by date

    // write code here
    // console.log('req: ', req);
    // console.log('req.query.id: ', req.query.id);
    // const values = [req.query.id];

    const { market_name } = req.body; // or req.params depending how we build it

    const values = [market_name];

    const sqlQueryStr = `select
                          vendor_name,
                          market_vendor_date,
                          market_name

                          from date d
                          inner join market m
                          on m.market_id = d.market_id
                          inner join vendor v
                          on v.vendor_id = d.vendor_id
                          where market_name like $1
                          order by
                          market_vendor_date ASC;`;

    db.query(sqlQueryStr, values).then((data) => {
      res.locals = data;
      // console.log('data: ', res.locals.rows);
      return next();
    })
      .catch((err) => next(err));
};

aController.findVendorAtMarketsByDate = (req, res, next) => {
    // search for vendor's schedule of markets by date

    // write code here
    // console.log('req: ', req);
    // console.log('req.query.id: ', req.query.id);
    // const values = [req.query.id];

    const { market_vendor_date } = req.body; // or req.params depending how we build it

    const values = [market_vendor_date];

    const sqlQueryStr = `select
                          vendor_name,
                          market_vendor_date,
                          market_name

                          from date d
                          inner join market m
                          on m.market_id = d.market_id
                          inner join vendor v
                          on v.vendor_id = d.vendor_id
                          where market_vendor_date like $1
                          order by
                          market_vendor_date ASC;`;

    db.query(sqlQueryStr, values).then((data) => {
      res.locals = data;
      // console.log('data: ', res.locals.rows);
      return next();
    })
      .catch((err) => next(err));
};

aController.findVendorItemByDate = (req, res, next) => {
    // search by item name

    // write code here
    // console.log('req: ', req);
    // console.log('req.query.id: ', req.query.id);
    // const values = [req.query.id];

    const { item_name } = req.body; // or req.params depending how we build it

    const values = [item_name];

    const sqlQueryStr = `select
                          vendor_name,
                          market_vendor_date,
                          market_name,
                          item_name,
                          vendor_item_price,
                          vendor_item_details

                          from vendor_item vi
                          inner join date d
                          on d.date_id = vi.date_id
                          inner join vendor v
                          on v.vendor_id = vi.vendor_id
                          inner join item i
                          on i.item_id = vi.item_id
                          inner join market m
                          on m.market_id = vi.market_id
                          where item_name like $1
                          order by
                          market_vendor_date ASC;`;

    db.query(sqlQueryStr, values).then((data) => {
      res.locals = data;
      // console.log('data: ', res.locals.rows);
      return next();
    })
      .catch((err) => next(err));
};

//add controllers for DB works
module.exports = aController
