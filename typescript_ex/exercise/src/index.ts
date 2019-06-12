
import express, {Express} from 'express';


import routes  from './routes/route-provider';

//declare out start up logic
const appStart = () => {
    const app: Express = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    //setup our features (of which there is one)
    routes(app);
    //setup our view engine

    //start the app
    app.listen('3002', () => {console.log('Server listening on port 3002');});
}
//start app
appStart();
