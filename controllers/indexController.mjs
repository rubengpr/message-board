import { getAllMessages } from '../db/queries.mjs'

async function getMessages(req, res) {
    const messages = await getAllMessages();
    console.log("Fetched messages: ", messages);
    const usernameMessages = messages.map(message => message.username).join(',');
    console.log(usernameMessages);
    const coreMessages = messages.map(message => message.message).join(',');
    console.log(coreMessages);
    res.render('index', { usernameMessages, coreMessages });
};

export { getMessages };