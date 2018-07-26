const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo server');
    }
    console.log('connection successfull');
    db.collection('Todos').insertOne({
        text: 'working todo',
        completed: true
    }, (err, result) => {
        console.log(JSON.stringify(result.ops, undefined, 4));
    })
    db.close();
})