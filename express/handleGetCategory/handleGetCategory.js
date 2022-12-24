// this module will update users items
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleCategory = function (req, res, Article) {
  // update the user eventSchedule field
  // find the user by id and execute the callback
  Article.aggregate(
    [
      { $match: { category: req.params.id } },
      { $project: { content: 0 } },
      { $sort: { dateAdded: -1 } }
    ]
    , (err, articles) => {
      if (err) {
        return res.status(400).send({ error: err.message })
      }
      // send back the user
      return res.status(200).send(articles)
    })
}
// export function for further usage
module.exports = handleCategory
