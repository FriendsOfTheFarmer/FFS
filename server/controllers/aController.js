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


     const sqlQueryStr = `insert into vendor
                           (vendor_name,
                           vendor_phone,
                           vendor_website,
                           vendor_email,
                           vendor_bio)
                           values
                           ($1, $2, $3, $4, $5)
                           ;`
                           ;

     db.query(sqlQueryStr, values).then((data) => {
       res.locals = data;
       // console.log('data: ', res.locals.rows);
       return next();
     })
       .catch((err) => next(err));
 };

 aController.createOrFindItem = (req, res, next) => {
     // search by item name before adding item details to database

     // write code here
     // console.log('req: ', req);
     // console.log('req.query.id: ', req.query.id);
     // const values = [req.query.id];

     const { item_name } = req.body; // should be an array of strings due to batch processing
     // put each item from item_name array into the values array for parameterization
     const values = item_name.map((item) => item);

     // list of formatted values to be searched for in database
     let vList = "";
     values.forEach((item, i) => {
        if (i < values.length - 1) {
          vList += `$${i+1},`
          } else if (i === values.length - 1) {
          vList += `$${i+1}`
        }
      }
      )
      // list of formatted values to be inserted into database
      let iList = "";
       values.forEach((item, i) => {
         if (i < values.length - 1) {
           iList += `('${item}'),`
           } else if (i === values.length - 1) {
           iList += `('${item}')`
         }
       }
       )
       let orList = iList.replace(/\,/gi,' or item_name like ');

console.log('iList: ', iList);
console.log('vList: ', vList);
console.log('orList: ', orList);
// do update set (item_name) = ${orList}
// where item_name = ${orList}

// insert into item (item_name)
//                       values ${iList}
//                       on conflict (item_name)
//                       do update set (item_name) = EXCLUDED.item_name
//                       where item.item_name = EXCLUDED.item_name
//                       returning *;
     const sqlQueryStr1 = `insert into item (item_name)
                           values ${iList}
                           on conflict (item_name)
                           do nothing;

                           `
                           ;

     const sqlQueryStr2 = `select * from item
                          where item_name like ${orList};`

     db.query(sqlQueryStr1).then((blob) => db.query(sqlQueryStr2))
     .then((data) => {
       // data format is res.locals.items.rows is an array
       // the array is filled with objects for each item
       // each item object includes {item_name: string, item_id: number}
       res.locals.items = data;

       console.log('data: ', res.locals.items);
       // check if res.locals.rows contains any item names
       // if (res.locals.rows.length > 0){
       //   return next();
       // } else {
       //   // create new insertion inquiry
       // }
       return next();
     })
       .catch((err) => next(err));
 };

  aController.createVendorItems = (req, res, next) => {
    // post vendor item details

     // for this to work the application will have to send these in the body of
     //  the request as json object containing these keys.
     //  item name and item id comes from res.locals.items.rows
     // all other variables are actually arrays except for vendor name!!!
     const { vendor_item_price,
     vendor_item_details,
     market_vendor_date,
     market_name,
     vendor_name} = req.body;
     console.log('vendor_name: ', vendor_name);
console.log('res.locals.items.rows: ', res.locals.items.rows);
    // map all values from objects in res.locals.items.rows array to a single array
     const item_name  = res.locals.items.rows.map(({ item_name }) => item_name);
     const item_id = res.locals.items.rows.map(({ item_id }) => item_id);
console.log('item_id, item_name: ', item_id, item_name);
     const passedItemDetails = [vendor_item_price,
     vendor_item_details,
     market_vendor_date,
     market_name, item_id]
     // create lists of formatted values to be inserted into database
     const listTranspose = (arr) => {
      if (!arr.length) return arr;
      console.log('arr: ', arr);
      return arr[0].map((col, i) => arr.map(row => row[i]));
      }

     const transposedDetails = listTranspose(passedItemDetails);

    let values = transposedDetails.map((row) => {
      let valString = "(";
      row.forEach((item, i) => {
        if (i < row.length - 1) {
          valString += `'${item}',`
        } else if (i === row.length - 1) {
          valString += `${item}, '${vendor_name}')`
        }
      }
    )
    // console.log('valString: ', valString);
    return valString;
    }
     )
     console.log('crazy value string: ', values);

     // list of formatted values to be searched for in database
     let vList = "";
      values.forEach((item, i) => {
        if (i < values.length - 1) {
          vList += `$${i+1},`
          } else if (i === values.length - 1) {
          vList += `$${i+1}`
        }
      }
      )

      console.log('vList: ', vList);
     // const values = [item_name.map((item) => item),
     //   item_id.map((id) => id),
     //   vendor_item_price.map((vendor_item_price) => vendor_item_price),
     //   vendor_item_details.map((vendor_item_details) => vendor_item_details),
     //   market_vendor_date.map((market_vendor_date) => market_vendor_date),
     //   market_name.map((market_name) => market_name),
     //   vendor_name.map((vendor_name) => vendor_name)];


     const sqlQueryStr = `insert into vendor_item (vendor_item_price,
                           vendor_item_details,
                           market_vendor_date,
                           market_name, item_id, vendor_name)
                           values ${vList}
                           ;`
                           ;


     db.query(sqlQueryStr).then((data) => {
       res.locals.vendorItems = data;
       // console.log('data: ', res.locals.rows);
       return next();
     })
       .catch((err) => next(err));
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

    const { market_name } = req.query; // or req.params depending how we build it

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
