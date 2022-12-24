// this module will update users items
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleRecent = function (req, res, Article) {
  // update the user eventSchedule field
  // find the user by id and execute the callback
  Article.aggregate(
    [
     { $match:{dateAdded:{ $gt:Date.now()-86400000*3}}},
      {$sort : {dateAdded:-1}},
      {$project:{content:0}}
    ],
     (err, articles) => {
    if (err) {
      return res.status(400).send({error: err.message})
    }
     // send back the user
     return res.status(200).send(articles)
  })
}
// export function for further usage
module.exports = handleRecent
