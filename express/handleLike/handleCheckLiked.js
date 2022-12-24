const handleCheckLiked = function (req, res, Article) {
    
    //  check if an article was liked by a particular user
    Article.findOne(
        { _id: req.params.id, "likes.userId": req.body.userId }, 
        (err, response) => {
            if (err) { 
                return res.send({ error: err })
            }

            if (!response) {
                return res.status(200).send({ found: false })
            }
            else {
                return res.status(200).send({ found: true })
            }
            // send back the updated user 
        }
    )
}
// export the function for further usage
module.exports = handleCheckLiked