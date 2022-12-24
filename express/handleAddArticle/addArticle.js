// function performs the insertion of products to the database
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} Product
 */
const addArticle = function (req, res, Article) {
  const { v4: uuidv4 } = require('uuid')
    // Create a new instance of a product
    const newArticle = new Article({
      ...req.body, articleId: !req.body.articleId? uuidv4(): req.body.articleId
    })
  // save product to database
  newArticle.save().then(result => {
    // send back the result which is the added product
    res.status(200).send(result)
  })
    .catch(err => {
      // if error, send back the error
      res.status(400).send({ error: err.message })
    })
}
// export this function for usage in another module
module.exports = addArticle
