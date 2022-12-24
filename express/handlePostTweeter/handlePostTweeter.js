const Tweeter = require("../models/Tweeter")


const handlePostTweet = function(req,res){
  
    const newTweet = new Tweeter({
       ...req.body
    })
    newTweet.save((err, tweet)=>{
        if(err){
          return  res.status(400).send({error:'Tweet could not be saved due to some reasons'})
        }
        console.log(tweet)
        return res.status(200).send({status:'success'})

    })
}

module.exports = handlePostTweet