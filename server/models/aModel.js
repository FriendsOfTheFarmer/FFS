const { Pool } = require('pg');
//new DB instance named "FarmersDb"
const PG_URI = 'postgres://xssmdaxh:bEfGSaNXBz_QPeCPrzH3l8SfAo2ZZ-uK@rajje.db.elephantsql.com:5432/xssmdaxh';
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});
// Adding some notes about the database here will be helpful for future you or other developers.

// schema model for reference with dbdesigner.net in FarmerSchema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
