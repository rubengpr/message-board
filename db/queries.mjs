import pool from './pool.mjs';

async function getAllMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
};

export { getAllMessages };