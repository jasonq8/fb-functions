var functions = require('firebase-functions');

var mongodb = require('mongodb');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");

    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://user:password@aws-eu-west-1-portal.7.dblayer.com:15673,aws-eu-west-1-portal.2.dblayer.com:15673/test22';

    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);
        }
    });


})
