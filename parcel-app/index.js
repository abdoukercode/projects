//const jokes = require("./jokes");
/* 
import {jokes} from './jokes'
jokes.getOne()
.then(res => document.querySelector("#joke").innerHTML = res); */
    

// jquery version
import {jokes} from './jokes'
import $ from 'jquery'
import fs from 'fs'

jokes.getOne()
.then(res => 
    $("#joke").text(res)
);

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy)
