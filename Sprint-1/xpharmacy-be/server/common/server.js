import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';

import swaggerify from './swagger';

import l from './logger';

const app = new Express();

export default class ExpressServer {
  constructor() {

    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    // app.use(cors({origin: 'http://localhost:3000'}));
    
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    //session
    app.use(session({
      secret: "worthy", 
      saveUninitialized: false,
      resave: false,
      cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7
      }
  }))
    //********* */
  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    mongoose.connect('mongodb+srv://divinevinh:ug6y6crKwUP0Fsv0@cluster0-scqka.mongodb.net/test?retryWrites=true&w=majority', err =>{
    if (err) console.log(err)
    else
    console.log("CONNECT SUCCESS!")
}, { useNewUrlParser: true });

  }

  router(routes) {
    swaggerify(app, routes);

    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
