import { MONGODB_SERVER } from '../global.js'

import { MongoClient } from 'mongodb'

MongoClient.connect(MONGODB_SERVER + 'todo-clone', function(err, db) {
	if (err) {
		return console.error(err)
	}
	var todos = db.collection('todos')
})

const insertOneTodo = (todo, db, callback) => {
	db.collection('todos').insertOne({
		text: todo.text,
		day_id: todo.day_id,
		completed: todo.completed
	}, function(err, result) {
		if (err) {
			console.log(err)
		}
		db.close()
	})
}