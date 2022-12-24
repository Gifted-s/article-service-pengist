const Tweeter = require("../models/Tweeter")

const handleUnLikeTweet = function (req, res) {
 
    // find the user with email and update then execute the callback function
    Tweeter.updateOne(
      { _id: req.params.id },
      { $inc: {unlikes:1} },
      (err, response) => {
       
        if(response.n===0){
          return res.status(400).send({error:'There is no tweet with this id'})
        }
        else {
         return res.status(201).send({ unliked:true })
        }
        // send back the updated user
        // console.log(passwordChanged);
      }
    )
  }
  // export the function for further usage
  module.exports = handleUnLikeTweet