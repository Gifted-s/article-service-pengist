const Feedback = require("../models/Feedback")
const Note = require("../models/Note")

const handleGetNotes=function(req,res){
    Note.find({}).then(notes=>{
        res.status(200).send({notes})
    })
    .catch(err=>{
        res.status(400).send({error:err.message})
    })
}
module.exports  =handleGetNotes