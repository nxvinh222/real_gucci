import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Products', () => {
  it('should get all products', () =>
    request(Server)
      .get('/api/v1/products')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array');
      }));

  it('should add a new product', () =>
    request(Server)
      .post('/api/v1/products')
      .send({
        name: 'Bao cao su',
        price: 100,
        info: 'Tranh thai an toan',
        image: 'https://vn-test-11.slatic.net/p/5/bao-cao-su-durex-kingtex-3-bao-3716-8741962-c8f1bba28b808018fbb9d6e75be1da7a.jpg',
        category: 'Sex',
        sold: 10000
        })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('Bao cao su');
        expect(r.body)
          .to.have.property('price')
          .equal(100);
        expect(r.body)
          .to.have.property('info')
          .equal('Tranh thai an toan');
        expect(r.body)
          .to.have.property('image')
          .equal('https://vn-test-11.slatic.net/p/5/bao-cao-su-durex-kingtex-3-bao-3716-8741962-c8f1bba28b808018fbb9d6e75be1da7a.jpg');
        expect(r.body)
          .to.have.property('category')
          .equal('Sex')
        expect(r.body)
          .to.have.property('sold')
          .equal(10000);
      }));

  it('should get a product by id', () =>
    request(Server)
      .get('/api/v1/products/5d160a41d2ecab2258be0085')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name');
        expect(r.body)
          .to.have.property('price');
        expect(r.body)
          .to.have.property('info');
        expect(r.body)
          .to.have.property('image');

      }));
});
