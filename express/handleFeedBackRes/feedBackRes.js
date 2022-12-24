const Feedback = require("../models/Feedback")

const handleFeedBackRes = function (req, res) {
    console.log(req.body)
    // find the user with email and update then execute the callback function
    Feedback.updateOne(
      { _id: req.params.id },
      { 
      $inc: {noOfRes:1},
      $push: {replies: req.body}
     },
       
      (err, response) => {
        
        if(response.n===0){
          return res.status(400).send({error:'Feed back does not exist'})
        }
        else {
         return res.status(201).send({ replySent:true })
        }
        // send back the updated user
        // console.log(passwordChanged);
      }
    )
  }
  // export the function for further usage
  module.exports = handleFeedBackRes