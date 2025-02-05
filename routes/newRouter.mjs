import { Router } from 'express';
import { postMessage } from '../controllers/newController.mjs'

const newRouter = Router();
export default newRouter;

newRouter.get('/', (req, res) => {
    res.render('form');
});

newRouter.post('/', postMessage);