import { getAllMessages } from '../db/queries.mjs';

async function getMessages(req, res) {
    const messages = await getAllMessages();
    res.render('index', { messages });
};

export { getMessages };