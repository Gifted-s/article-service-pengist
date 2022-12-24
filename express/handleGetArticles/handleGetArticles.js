// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
 const handleGetArticles = function (req, res, Article) {
    // find a user by id
    Article.find({ authorId: req.params.id }).sort({dateAdded:-1}).then( articles => {
      // if an error occured, throw it
       return res.status(200).send(articles)
    })
    .catch(err=>{
        return res.status(200).send(err.message)
    })
  }
  // export the function for further usage
  module.exports = handleGetArticles
  