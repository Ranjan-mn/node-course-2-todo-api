const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo } = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: "5ad600b5deb914a423819ef0"}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove("5ad600b5deb914a423819ef0").then((todo) => {
//     console.log(todo);
// });