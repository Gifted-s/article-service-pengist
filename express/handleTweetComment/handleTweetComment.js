const Tweeter = require("../models/Tweeter")

const handleTweetComment = function (req, res) {
    console.log(req.body)
    // find the user with email and update then execute the callback function
    Tweeter.updateOne(
      { _id: req.params.id },
      { 
      $push: {comments: req.body}
     },
       
      (err, response) => {
        
        if(response.n===0){
          return res.status(400).send({error:'There is no tweet with this id'})
        }
        else {
         return res.status(201).send({ commentSent:true })
        }
        // send back the updated user
        // console.log(passwordChanged);
      }
    )
  }
  // export the function for further usage
  module.exports = handleTweetComment