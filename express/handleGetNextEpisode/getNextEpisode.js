// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleGetNextEpisode = function (req, res, Article) {
    // find a user by id
    const episode = parseInt(req.params.episode)
    Article.find({ articleId: req.params.id,episode}, (err, article) => {
      // if an error occured, throw it
      if (err) {
        return res.status(400).send({error: err.message})
      }
      // if user does not exist in database
        if(!article){
          return res.status(400).send({error: 'article not found in the database'})
        }
       // send back the user
       return res.status(200).send({article:article[0]})
    })
  }
  // export the function for further usage
  module.exports = handleGetNextEpisode
  