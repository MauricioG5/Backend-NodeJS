
const { Pool } = require('pg');
const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.host}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({ connectionString: URI });

module.exports = pool;
