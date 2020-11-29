import authController from "./controller";
import * as express from 'express';

export default express
    .Router()
    .post('/', authController.Login)
    .get('/verify', authController.verify);

