const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://muditnawalgaria:trespassers@cluster0.bxrepgb.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB Atlas!');
});

module.exports = db;
