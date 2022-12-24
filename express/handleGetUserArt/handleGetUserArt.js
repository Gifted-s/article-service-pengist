// function performs the fetching all products from the database
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} Product
 */
const handleGetUserArt= function (req, res, Article) {
  // find all the products
  Article.aggregate(
    [
     {$match: {authorId: req.params.id}},
     {$project: {content:0}},
     {$sort:{dateAdded:-1}}
    ],
      (err, articles) => {
    // if error, then throw it
    if (err) throw err
    // send back all the product
    res.status(200).send(articles)
  })
}
// export the function for further usage
module.exports =  handleGetUserArt
