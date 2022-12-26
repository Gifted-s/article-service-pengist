 
const handleDeleteFeedbackRes = function (req, res, Feedback) {
    
    // find the user with email and update then execute the callback function
    Feedback.updateOne(
      { _id: req.params.id },
      { 
      $inc: {noOfRes:-1},
      $pull: {replies: { _id: req.params.replyId }}
     },
       
      (err, response) => {
        
        if(response.n===0){
          return res.status(400).send({error:'Feed back does not exist'})
        }
        else {
         return res.status(201).send({ replyDeleted:true })
        }
    
      }
    )
  }
  // export the function for further usage
  module.exports = handleDeleteFeedbackRes;