// thismodule will handle finding of one user
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} Article
 */
const handleSearchArticle = function (req, res, Article) {
    
    // find a user by id
    Article.aggregate([
        {
            '$search': {
                'index': 'default',
                'text': {
                    'query': req.params.text,
                    'path': ["title"],
                    'fuzzy': {
                        'maxEdits': 2,
                        'prefixLength': 2
                    }
                }
            }
        },
        { '$match': { 'authorId': req.params.id, "category": "Series" } },
        { '$sort': { 'episode': -1 } },
        { '$project': { 'content': 0 } },
    ], (err, articles) => {

        // if an error occured, throw it
        if (err) {
            return res.status(400).send({ error: err.message })
        }
        // if user does not exist in database
        if (!articles) {
            return res.status(400).send({ error: 'user not found in the database' })
        }

        // send back the user
        return res.status(200).send(articles[0])
    })
}
// export the function for further usage
module.exports = handleSearchArticle
