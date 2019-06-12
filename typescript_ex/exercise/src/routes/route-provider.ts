import { Router, Express } from 'express';
import { runTask }  from '../controllers/run-task.controller';

const router = Router();

router.get('/', runTask);
router.post('/', runTask);

const createRoutes = (app: Express) => {
    app.use('/', router);

    return app;
}

export default createRoutes;

