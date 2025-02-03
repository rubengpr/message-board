import { Router } from 'express';

const indexRouter = Router();
export default indexRouter;

indexRouter.get('/', (req, res) => {
    res.render('index');
});