const { add, sub } = require('../src/app')
const expect = require('chai').expect

//BDD
/*
describe('Suite 1', () => {
    it('add(2, 3) should return 5', () =>{
        expect(add(2, 3)).to.be.equal(5);
    })
})

describe('Suite 2', () => {
    it('add(3, 3) should return 6', () =>{
        expect(add(3, 3)).to.be.equal(6);
    })
})
*/
//TDD
//const { suite, test } = require('mocha')

suite('Suite 1', () => {
    test('add(2,3) should return 5', () => {
        expect(add(2, 3)).to.be.equal(5);
    })
})