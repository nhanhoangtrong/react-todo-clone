process.env.NODE_ENV = 'test'

let connectdb = require('../src/server/connectdb')
let User = require('../src/server/models/User')
let Folder = require('../src/server/models/Folder')
let List = require('../src/server/models/List')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/server/app')
let should = chai.should()

chai.use(chaiHttp)

// Start server
server.listen(8080)

describe('User', () => {
    before((done) => {
        User.remove({}, (err) => {
            done()
        })
    })

    // Test the GET route
    describe('/GET profile', () => {
        it('it should GET user profile', (done) => {
            chai.request(server)
                .get('/api/profile/admin')
                .end((err, res) => {
                    res.should.have.status(400)
                    done()
                })
        })
    })

    // Test the POST route
    describe('/POST user', () => {
        let user = {
            username: "user1",
            password: "user1",
            email: "user1@email.com",
            is_admin: false
        }
        it('it should POST a new user', (done) => {
            chai.request(server)
                .post('/api/user/create')
                .send(user)
                .end((err, res) => {
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
                .get('/api/profile/user1')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('_id')
                    res.body._id.should.be.a('string')
                    res.body.username.should.equal('user1')
                    done()
                })
        })
    })
})

describe('Folder and List', () => {

    let _user = ""

    // Clean all folders and lists
    before((done) => {
        let user = new User({
            username: "ownnerFolder",
            password: "ownerFolder",
            email: "userOwnerFolder@email.com",
            is_admin: false
        })
        user.save(function(err) {
            _user = user._id
            done()
        })
    })

    // Clean test user
    after((done) => {
        // Remove all test folder and list
        List.remove({_user:_user}, function(err) {
            Folder.remove({_user: _user}, function(err) {
                // Then remove test user
                User.findByIdAndRemove(_user, (err, raw) => {
                    done()
                })
            })
        })
        
    })

    // Test POST an folder
    describe('/POST folder', () => {
        it('it should POST create a new folder', (done) => {
            let folder = {
                title: "This is a test folder",
                order: 1,
                _user: _user
            }
            chai.request(server)
                .post('/api/folder')
                .send(folder)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    // Test GET all folder
    describe('/GET folder', () => {
        it('it should GET a folder list', (done) => {
            chai.request(server)
                .get('/api/folder')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })
})