import { postDbMessage } from '../db/queries.mjs';

async function postMessage(req, res) {
    const { messageUser, messageText } = req.body;
    await postDbMessage(messageUser, messageText);
    res.redirect('/');
}

export { postMessage };