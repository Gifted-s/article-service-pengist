// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} User
 */
const handleDeleteArticle = function (req, res, Article) {


    // find a user by id
    Article.remove({ _id: req.params.id }, (err, deleted) => {
     
      // if an error occured, throw it
      if (err) {
        return res.status(400).send({error: err.message})
      }
      // if user does not exist in database
        if(!deleted){
          return res.status(400).send({error: 'Article not found in the database'})
        }
       // send back the user
       return res.status(200).send({status:'success'})
    })
  }
  // export the function for further usage
  module.exports = handleDeleteArticle
  