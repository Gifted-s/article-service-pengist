const Feedback = require("../models/Feedback")
const handlePostFeed = function(req,res){
  console.log(req.bosy)
    const {name, content}= req.body
    const newFeed = new Feedback({
       name,content
    })
    newFeed.save((err, feed)=>{
        if(err){
          return  res.status(400).send({error:'Feedback could not be saved due to some reasons'})
        }
        console.log(feed)
        return res.status(200).send({status:'success'})
    })
}
module.exports = handlePostFeed