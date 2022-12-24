const handleUnlike = function (req, res, Article) {

    // find the user with email and update then execute the callback function
    Article.updateOne(
        { _id: req.params.id },
        {
            $inc: { numberOfLikes: -1 },
            $pull: { likes: { userId: req.body.userId } }

        },
        (err, response) => {

            if (response.n === 0) {
                return res.status(400).send({ error: 'There is no article with this id' })
            }
            else {
                return res.status(201).send({ liked: true })
            }
            // send back the updated user
            // console.log(passwordChanged);
        }
    )
}
// export the function for further usage
module.exports = handleUnlike