import express, { Response, Request, NextFunction } from 'express';
import routes from './routes'
import dbInit from './db/init'



dbInit();

const app = express();
app.use(express.json());
app.use(express.urlencoded());



app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use('/api', routes);


export default app;