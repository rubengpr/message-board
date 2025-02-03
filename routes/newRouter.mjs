import { Router } from 'express';

const newRouter = Router();
export default newRouter;

newRouter.get('/', (req, res) => {
    res.render('form');
});

newRouter.post('/new', (req,res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: formattedDate });
    res.redirect("/");
});