const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// DB config

require('./config/DB')

const app = express();


// set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Enable Cors
app.use(cors());

//item route
itemRoutes = require('./expressRoutes/itemRoutes');
app.use('/items', itemRoutes);


app.get('/', function(req,res){
    res.render('index.html')
})

 // Serving PORT!!! 
const port= process.env.PORT || 5000;
app.listen(port, () =>
    console.log( `Serving runing at port ${port}`)
);

