const mongoose = require('mongoose');

var uri = "mongodb://";

mongoose.connect(uri, function(err, db) {
  if(err) {
    console.log(err)
  } else {
    console.log("connected to DB");
    console.log()
  }
});
