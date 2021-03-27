const expect = require('chai').expect
const axios = require('axios')

describe('async test suite', () => {
    it ('promise based way', () => {
        return axios.get('https://reqres.in/api/users/2')
        .then(res => {
            expect(res.data.data.email).to.be.equal('jan.weavr@reqres.int')
        })
    });

    it ('Test 2', () => {
        console.log('Test 2')
    })


    it ('done based way', (done) => {
        axios.get('https://reqres.in/api/users/2')
        .then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
            done()
        })
        .catch(err => {
            done(err)
        })
    });

    
    it ('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
    });
})