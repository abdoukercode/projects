const mongoose = require('mongoose');

// Map global Promise

mongoose.Promise = global.Promise;
//mongoose connect

mongoose.connect
('mongodb://admin:almath1106@ds121118.mlab.com:21118/polling-station')
.then(()=> console.log("mongoose Connected !!"))
