'use strict';

const express = require('express');
const users = require("./cities.json")
const fs = require('fs');
const path= require('path')
var usersFilePath = path.join(__dirname, 'cities.json');



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hi alebrose , Hello world\n');
});

app.get('/users', function(req, res){
/*   var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res); */
  const usersList = JSON.parse(fs.readFileSync("./cities.json", "utf8"));
  console.log(usersList);

  res.render('index', { users : usersList})
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

