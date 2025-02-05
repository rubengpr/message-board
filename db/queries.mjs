import pool from './pool.mjs';

async function getAllMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
};

async function postDbMessage(messageUser, messageText) {
    const result = await pool.query('INSERT INTO messages (username, message) VALUES ($1, $2)', [messageUser, messageText]);
    return result;
};

export { getAllMessages, postDbMessage };