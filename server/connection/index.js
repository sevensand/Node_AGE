const mongoose = require('mongoose');

var uri = "mongodb://adminCitygate:citygate123@ds159993.mlab.com:59993/db_citygate";

mongoose.connect(uri, function(err, db) {
  if(err) {
    console.log(err)
  } else {
    console.log("connected to DB");
    console.log()
  }
});
