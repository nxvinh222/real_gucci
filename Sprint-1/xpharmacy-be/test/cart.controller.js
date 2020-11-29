import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Cart', () => {
  it('should get all products in cart', () =>
    request(Server)
      .get('/api/v1/cart')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(0);
      }));

  it('should add a new product', () =>
    request(Server)
      .post('/api/v1/cart')
      .send({ id: '123' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('id')
          .equal('123');
      }));

});
