const Feedback = require("../models/Feedback")
const handlePostFeed = function(req,res){
  
    const {name, content, userId}= req.body
   
    const newFeed = new Feedback({
       name,content, userId
    })
    newFeed.save((err, feed)=>{
        if(err){
          
          return  res.status(400).send({error:'Feedback could not be saved due to some reasons'})
        }
       
        return res.status(200).send({status:'success'})
    })
}
module.exports = handlePostFeed