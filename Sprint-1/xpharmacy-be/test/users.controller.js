import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Users', () => {
  it('should get all users', () =>
    request(Server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array');
      }));

  it('should add a new user', () =>
    request(Server)
      .post('/api/v1/users')
      .send({ 
        username: 'mindx',
        password: '123',
        email: 'mindx@gmail.com',
        name: 'Nam Nguyen'
     })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('Nam Nguyen');
      }));
      
  it('should get an user by id', () =>
    request(Server)
      .get('/api/v1/users/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('username');
        expect(r.body)
          .to.have.property('password');
        expect(r.body)
          .to.have.property('email');
        expect(r.body)
          .to.have.property('name');
      }));

  it('should update user\'s info', () =>
      request(Server)
        .put('/api/v1/users/1')
        .send({
          phone: '0123456789',
          age: '21'
        })
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('object')
            .that.has.property('phone')
            .equal('0123456789');
          expect(r.body)
          .have.property('age')
          .equal('21');
      }));
});