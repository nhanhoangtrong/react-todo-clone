process.env.NODE_ENV = 'test'

let User = require('../src/server/models/User')
let Folder = require('../src/server/models/Folder')
let List = require('../src/server/models/List')
let Todo = require('../src/server/models/Todo')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/server/app')
let should = chai.should()

chai.use(chaiHttp)

// Start server
server.listen(8080)

// Before the tests, we create a new admin
let admin
before((done) => {
    User.remove({}, function(err) {
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

    let user

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
                    res.body.should.not.have.property('password')
                    res.body._id.should.be.a('string')
                    user = res.body
                    user.password = "user1"
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
                    res.body.should.not.have.property('password')
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

    // Test GET all user's folder
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
    let list
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
                    list = res.body
                    done()
                })
        })
    })

    // Test PUT a list
    describe('/PUT /api/list/:list_id', () => {
        it('it should PUT update an existing list', (done) => {
            let payload = {
                title: "This list is modified",
                order: 2
            }
            chai.request(server)
                .put('/api/list/' + list._id)
                .auth(user.username, user.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    // Test GET a modified list
    describe('/GET /api/list/:list_id', () => {
        it('it should GET a modified list', (done) => {
            chai.request(server)
                .get('/api/list/' + list._id)
                .auth(user.username, user.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.have.property('title').with.equal('This list is modified')
                    res.body.should.have.property('order').with.equal(2)
                    done()
                })
        })
    })
})

describe('Todo and List', () => {

    // Create a test user and a test list
    let test_user, test_list
    before((done) => {
        test_user = new User({
            username: "tester",
            password: "tester",
            email: "tester@email.com",
            is_admin: false
        })
        test_user.save((err) => {
            if (err) {
                return console.error(err)
            }
            test_list = new List({
                title: "This is a test list",
                order: 1,
                _user: test_user._id
            })
            test_list.save((err) => {
                if (err) {
                    return console.error(err)
                }
                done()
            })
        })
    })

    // Remove test user and all related lists and todos after tests
    after((done) => {
        Todo.remove({_user: test_user._id}, (err, raw) => {
            List.remove({_user: test_user._id}, (err, raw) => {
                User.remove({_id: test_user._id}, (err, raw) => {
                    done()
                })
            })
        })
    })

    // Test POST create a new todo
    let todos = []
    describe('/POST /api/todo', () => {
        it('it should POST a new todo', (done) => {
            let payload = {
                text: "This is a test todo",
                order: 1,
                _list: test_list._id
            }
            chai.request(server)
                .post('/api/todo')
                .auth(test_user.username, test_user.password)
                .send(payload)
                .end((err, res) => {
                    
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    todos.push(res.body)
                    done()
                })
        })
    })

    // Test POST create another new todo
    describe('/POST /api/todo', () => {
        it('it should POST another new todo', (done) => {
            let payload = {
                text: "This is another test todo",
                order: 2,
                _list: test_list._id
            }
            chai.request(server)
                .post('/api/todo')
                .auth(test_user.username, test_user.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    todos.push(res.body)
                    done()
                })
        })
    })

    // Test PUT to edit an existing todo
    describe('/PUT /api/todo/:todo_id', () => {
        it('it should PUT to edit an existing todo', (done) => {
            let payload = {
                text: "This todo is modified",
                order: 1,
                _list: test_list._id
            }
            chai.request(server)
                .put('/api/todo/' + todos[0]._id)
                .auth(test_user.username, test_user.password)
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    // Test PUT to mark the second todo as completed
    describe('/PUT /api/todo/mark/:todo_id', () => {
        it('it should PUT to mark the second todo as completed', (done) => {
            let payload = {
                completed: true
            }
            chai.request(server)
                .put('/api/todo/mark/' + todos[1]._id)
                .auth(test_user.username, test_user.password)
                .send(payload)
                .end((err, res) => {
                    
                    res.should.have.status(200)
                    done()
                })
        })
    })

    // Test GET to query all user's todos
    describe('/GET /api/todo', () => {
        it("it should GET all user's todo", (done) => {
            chai.request(server)
                .get('/api/todo')
                .auth(test_user.username, test_user.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('array')
                    res.body.should.have.property('length').with.equal(2)
                    res.body.should.have.property(0).with.have.property('text', 'This todo is modified')
                    res.body.should.have.property(1).with.have.property('completed', true)
                    done()
                }) 
        })
    })

    // Test DELETE to remove an user's todo
    describe('/DELETE /api/todo/:todo_id', () => {
        it('it should DELETE remove an existing todo', (done) => {
            chai.request(server)
                .delete('/api/todo/' + todos[1]._id)
                .auth(test_user.username, test_user.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    // Test GET to query all user's todos after remove
    describe('/GET /api/todo', () => {
        it("it should GET all user's todo", (done) => {
            chai.request(server)
                .get('/api/todo')
                .auth(test_user.username, test_user.password)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('array')
                    res.body.should.have.property('length').with.equal(1)
                    res.body.should.have.property(0).with.have.property('text', 'This todo is modified')
                    done()
                }) 
        })
    })
})