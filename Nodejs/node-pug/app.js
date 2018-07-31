const express = require('express')
const Utils = require('./utils')

const app = express()

require('dotenv').config()
const Port = process.env.SERVER_PORT

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    const people = Utils.getPeople();
    res.render('people', {people: people})
})
app.get('/color',(req,res) => {
    res.render('index', {color: Utils.favoriteColor})
})


app.listen(Port, () => {
    console.log(` app listening at: ${ Port } `);
})
