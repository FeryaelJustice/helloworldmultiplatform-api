const config = require('./db_config');

// Database
const { Pool } = require('pg');
const pool = new Pool(config);

module.exports = pool;