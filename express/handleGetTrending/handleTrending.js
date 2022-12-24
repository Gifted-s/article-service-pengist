// this module will update users items
/**
 * handleUpdateEvent
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleGetTrending = function (req, res, Article) {
   // update the user eventSchedule field
   // find the user by id and execute the callback
   const maxNumOfLikesForTrending= 30;// 30 likes 
   Article.aggregate(
      [// 5 days
         { $match: { numberOfLikes: { $gt: maxNumOfLikesForTrending }, dateAdded: { $gt: Date.now() - (86400000*5) } } },
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
module.exports = handleGetTrending
