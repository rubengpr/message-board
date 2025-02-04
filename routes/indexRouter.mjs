import { Router } from 'express';
import { getMessages } from '../controllers/indexController.mjs'

const indexRouter = Router();

indexRouter.get('/', getMessages);

export default indexRouter;