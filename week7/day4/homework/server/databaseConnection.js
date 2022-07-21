const Pool = require('pg').Pool
// replace database with the name of your local database on on your computer
const creds = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    //
    user: 'postgres',
    // import your password from your .env file and inerpolate it here
    password: '',
})

module.exports = creds
