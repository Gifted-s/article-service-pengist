// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleGetArticle = function (req, res, Article) {
  // find a user by id
  Article.findOne({ _id: req.params.id }, (err, article) => {
    // if an error occured, throw it
    if (err) {
      return res.status(400).send({error: err.message})
    }
    // if user does not exist in database
      if(!article){
        return res.status(400).send({error: 'Article not found in the database'})
      }
     // send back the user
     return res.status(200).send(article)
  })
}
// export the function for further usage
module.exports = handleGetArticle
