// this module will update users items
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleGetFeatured = function (req, res, Article) {
  // update the user eventSchedule field
  // find the user by id and execute the callback
  Article.aggregate(
    [
      // { $match: { sponsoredUntil: { $lt: Date.now() }, dateAdded: { $gt: Date.now() - 86400000*3 } } },
      { $match: { dateAdded: { $gt: Date.now() - 86400000 * 3 } } },
      { $project: { content: 0 } },
      { $sort: { dateAdded: -1 } }

    ],
    (err, articles) => {
      if (err) {
        return res.status(400).send({ error: err.message })
      }
      // send back the user
      return res.status(200).send(articles)
    })
}
// export function for further usage
module.exports = handleGetFeatured
