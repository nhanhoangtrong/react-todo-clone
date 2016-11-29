process.env.NODE_ENV = 'test'

let connectdb = require('../src/server/connectdb')
let User = require('../src/server/models/User')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/server/app')
let should = chai.should()

chai.use(chaiHttp)

// Start server
server.listen(8080)

describe('User', () => {
    before( (done) => {
        // Before each test, we empty the database
        var db = connectdb( (err) => {
            User.remove({}, (err) => {
                db.disconnect()
                done()
            })
        })
    })

    // Test the GET route
    describe('/GET profile', () => {
        it('it should GET user profile', (done) => {
            chai.request(server)
                .get('/api/profile/admin')
                .end( (err, res) => {
                    res.should.have.status(400)
                    done()
                })
        })
    })

    // Test the POST route
    describe('/POST user', () => {
        let user = {
            username: "admin",
            password: "admin",
            email   : "admin@email.com",
            is_admin: true
        }
        it('it should POST a new user', (done) => {
            chai.request(server)
                .post('/api/user/create')
                .send(user)
                .end( (err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('_id')
                    res.body._id.should.be.a('string')
                    done()
                })
        })
    })

    // Test the GET route
    describe('/GET profile', () => {
        it('it should GET an user profile', (done) => {
            chai.request(server)
                .get('/api/profile/admin')
                .end( (err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('_id')
                    res.body._id.should.be.a('string')
                    done()
                })
        })
    })
})
