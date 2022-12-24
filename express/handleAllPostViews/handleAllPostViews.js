

 const handleGetAllPostViews = function (req, res, Article) {
    // update the user eventSchedule field
    // find the user by id and execute the callback
    Article.aggregate(
       [
           {$match:{authorId:req.params.id}},
           {$group: {_id:null,totalViews:{$sum:"$numberOfViews"}}}
       ],
       (err, result) => {
      if (err) {
        return res.status(400).send({error: err.message})
      }
       // send back the user
       return res.status(200).send(result)
    })
  }
  // export function for further usage
  module.exports = handleGetAllPostViews
  