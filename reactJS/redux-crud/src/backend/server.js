import express from 'express';
import mongodb from 'mongodb'
const app = express();
const dburl ='mongodb://localhost/';
const PORT = process.env.NODE_ENV || 8080;
const MongoClient = mongodb.MongoClient;

MongoClient.connect(dburl, function(err, db){
if(err) throw err;
var dbo = db.db("crudwithredux");

app.use("/api/games",(req,res)=>{
    dbo.collection('games').find({}).toArray((err,games)=>{
        res.json({games})
    });
});
app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
  })
app.listen(PORT, () => console.log(`Server runing at: ${PORT}`))
    
});

