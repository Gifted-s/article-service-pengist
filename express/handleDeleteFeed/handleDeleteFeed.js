 
const handleDeleteFeed= function(req,res, Feedback){ 
    // find a user by id
    Feedback.remove({ _id: req.params.id }, (err, deleted) => {
     
        // if an error occured, throw it
        if (err) {
          return res.status(400).send({error: err.message})
        }
        // if user does not exist in database
          if(!deleted){
             return res.status(400).send({error: 'Thread Deleted '})
          }
         // send back the user
         return res.status(200).send({status:'success'})
      })
}
module.exports = handleDeleteFeed