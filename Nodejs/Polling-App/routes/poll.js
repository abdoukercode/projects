const express = require('express');
router = express.Router();
var Pusher = require('pusher');
const mongoose = require('mongoose');

const Vote = require('../models/Vote');


var pusher = new Pusher({
    appId: '466077',
    key: '31c4da638442ceb6c6e0',
    secret: '914aa6bb8f80d7c320c5',
    cluster: 'eu',
    encrypted: true
  });


router.get('/', (req,res)=>
    Vote.find().then(votes=>res.json({
        success:true,
        votes:votes
    }))
)
router.post('/', (req,res)=> {

const newVote = {
    points:1,
    os: req.body.os,

}

new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
        points:parseInt(vote.points),
        os:vote.os
      });
    return res.json({
        success:true,
        message: "Thank You for voting !"
    })
})


      

});



module.exports= router
