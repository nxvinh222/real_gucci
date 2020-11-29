import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Athenticate', () => {
  it('Login success', () =>
    request(Server)
      .post('/api/v1/login')
      .send({ 
        username: 'mindx',
        password: '123'
     })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('username')
          .equal('mindx');
        expect(r.body)
          .to.have.property('password')
          .equal('123');
      }));

  it('Sign up success', () =>
    request(Server)
      .post('/api/v1/signup')
      .send({
        username: 'mindx',
        password: '123',
        email: 'mindx@gmail.com',
        name: 'Nam Nguyen'
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('username')
          .equal('mindx');
        expect(r.body)
          .to.have.property('password')
          .equal('123');
        expect(r.body)
          .to.have.property('email')
          .equal('mindx@gmail.com');
        expect(r.body)
          .to.have.property('name')
          .equal('Nam Nguyen');
      }));
});
