const { Pool } = require('pg');

const pool = new Pool ({
    user: 'your_username',
    host: 'localhost',
    database: 'employee_tracker',
    password: '2256',
    port: 5432,
});

module.exports = pool;
