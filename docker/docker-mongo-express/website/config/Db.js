const mongoose = require('mongoose');



//require('dotenv').config();

mongoose.set("debug", true)

// Map global Promise

//mongoose.Promise = global.Promise;
mongoose.Promise = Promise;

const Pass= process.env.DB_PASS;
const Host = process.env.DB_HOST;
const User = process.env.DB_USER;

console.log(Pass,Host);
//mongoose connect

mongoose.connect
(`mongodb://${User}:${Pass}@${Host}`)
.then(()=> console.log("mongoose Connected !!"))
