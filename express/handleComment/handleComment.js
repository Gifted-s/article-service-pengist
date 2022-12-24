const handleComment = function (req, res, Article) {
   
    // find the user with email and update then execute the callback function
    Article.updateOne(
      { _id: req.params.id },
      { 
      $inc: {noOfComments:1},
      $push: {comments: req.body}
     },
       
      (err, response) => {
        
        if(response.n===0){
          return res.status(400).send({error:'There is no article with this id'})
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
  module.exports = handleComment