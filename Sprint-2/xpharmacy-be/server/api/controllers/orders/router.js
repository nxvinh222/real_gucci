import OrderController from './controller';
import * as express from 'express';

export default express
  .Router()
  .get('/', OrderController.all)
  .get('/:id', OrderController.byId)
  .post('/', OrderController.create)
  .delete('/:id',OrderController.delete);