const Feedback = require("../models/Feedback")

const handleGetFeedBack=function(req,res){
   
    Feedback.find({}).then(feedbacks=>{
        
        res.status(200).send({feedbacks})
    })
    .catch(err=>{
        res.status(400).send({error:err.message})
    })
}

module.exports  =handleGetFeedBack