
const Tweeter = require("../models/Tweeter")

const handleGetTweets=function(req,res){
    Tweeter.find({}).then(tweets=>{
      
       return res.status(200).send({tweets})
    })
    .catch(err=>{
       return res.status(400).send({error:err.message})
    })
}

module.exports  =handleGetTweets