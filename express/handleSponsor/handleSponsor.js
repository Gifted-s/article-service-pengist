// thismodule will handle the editing of a users profile
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Constructor} Article
 */

const handleSponsor = function (req, res, Article) {
 
    // find the user with email and update then execute the callback function
    Article.updateOne(
      { _id: req.body._id },
      { $set: { sponsoredUntil: req.body.sponsoredUntil} },
      (err, response) => {
        if(response.n===0){
          return res.status(400).send({error:'There is no article with this id'})
        }
        else {
         return res.status(201).send({ ...req.body })
        }
        // send back the updated user
        // console.log(passwordChanged);
      }
    )
  }
  // export the function for further usage
  module.exports = handleSponsor
  