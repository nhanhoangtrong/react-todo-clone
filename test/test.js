process.env.NODE_ENV = 'test'

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

// Before the tests, we create a new admin
var admin
before((done) => {
    admin = new User({
        username: "admin",
        password: "admin",
        email: "admin@email.com",
        is_admin: true
    })
    admin.save(function(err) {
        if (err) {
            return console.error(err)
        }
        done()
    })
})

// After the tests, we remove the created admin user
after((done) => {
    User.findByIdAndRemove(admin._id, function(err) {
        done()
    })
})

describe('User', () => {
    // After all tests, we delete all created users
    after((done) => {
        User.remove({is_admin: false}, (err) => {
            done()
        })
    })

    var user

    // Test the POST route
    describe('/POST /api/user/', () => {
        let payload = {
            username: "user1",
            password: "user1",
            email: "user1@email.com",
            is_admin: false
        }
        it('it should POST a new user', (done) => {
            chai.request(server)
                .post('/api/user')
                .auth(admin.username, admin.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('_id')
                    res.body._id.should.be.a('string')
                    user = res.body
                    done()
                })
        })
    })

    // Test the PUT route
    describe('/PUT /api/user/:user_id', () => {
        it('it should PUT edit an user profile', (done) => {
            let payload = {
                first_name: "hello",
                last_name: "world"
            }
            chai.request(server)
                .put('/api/user/' + user._id)
                .auth(admin.username, admin.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    // Test the GET route of the profile
    describe('/GET /api/profile/:username', () => {
        it('it should GET an user profile with the fullname is hello world', (done) => {
            chai.request(server)
                .get('/api/profile/' + user.username)
                .auth(admin.username, admin.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('_id')
                    res.body._id.should.be.a('string')
                    res.body.should.have.property('first_name').with.equal('hello')
                    res.body.should.have.property('last_name').with.equal('world')
                    done()
                })
        })
    })

    // Test DELETE route of user api
    describe('/DELETE /api/user/:user_id', () => {
        it('it should DELETE an user with given id', (done) => {
            chai.request(server)
                .delete('/api/user/' + user._id)
                .auth(admin.username, admin.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})

describe('Folder and List', () => {

    let user

    // create a test user
    before((done) => {
        user = new User({
            username: "tester",
            password: "tester",
            first_name: "tester",
            last_name: "tester",
            email: "tester@email.com",
            is_admin: false
        })
        user.save(function(err) {
            if (err) {
                return console.error(err)
            }
            done()
        })
    })

    // Clean test user and all the related folders and lists
    after((done) => {
        // Remove all test folders and lists
        List.remove({_user: user._id}, function(err) {
            Folder.remove({_user: user._id}, function(err) {
                // Then remove test user
                User.findByIdAndRemove(user._id, (err, raw) => {
                    done()
                })
            })
        })

    })

    // Test POST an folder
    describe('/POST /api/folder', () => {
        it('it should POST create a new folder', (done) => {
            let payload = {
                title: "This is a test folder",
                order: 1,
                _user: user._id
            }
            chai.request(server)
                .post('/api/folder')
                .auth(user.username, user.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    // Test GET all folder
    describe('/GET /api/folder', () => {
        it('it should GET a folder list', (done) => {
            chai.request(server)
                .get('/api/folder')
                .auth(user.username, user.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })

    // Test POST a new List
    describe('/POST /api/list', () => {
        it('it should POST a new list', (done) => {
            let payload = {
                title: "It's a new list",
                order: 1,
                _user: user._id
            }
            chai.request(server)
                .post('/api/list')
                .auth(user.username, user.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
})
