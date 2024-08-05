const pool = require('./db');

const getDeparments = async () => {
    const result = await pool.query('SELECT * FROM deparment');
    return result.rows;
};

const getRoles = async () => {
    const result = await pool.query('SELECT * FROM role'); 
    return result.rows;
};

const getEmployees = async () => {
    const result = await pool.query('SELECT * FROM employees');
};

module.exports= { getDeparments, getRoles, getEmployees };