const Note = require("../models/Note")
const handlePostNote = function(req,res){
    const {note}= req.body
    const newNote = new Note({
        note
    })
    newNote.save((err, note)=>{
        if(err){
          return  res.status(400).send({error:'Note could not be saved due to some reasons'})
        }
        console.log(note)
        return res.status(200).send({status:'success'})

    })
}

module.exports = handlePostNote