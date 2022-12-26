
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useUnifiedTopology: true, autoIndex: true, useNewUrlParser: true }, () => console.log('yello'))
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const handleAddArticle = require('./express/handleAddArticle/addArticle')
const handleLike = require('./express/handleLike/handleLike')
const handleEditArticle = require('./express/handleEditArticle/editArticle')
const handleGetArticle = require('./express/handleGetArticle/handleGetArticle')
const handleGetUserArt = require('./express/handleGetUserArt/handleGetUserArt')
const handleRecent = require('./express/handleGetRecent/handleGetRecent')
const handleGetNextEpisode = require('./express/handleGetNextEpisode/getNextEpisode')
const handleComment = require('./express/handleComment/handleComment')
const handleGetCategory = require('./express/handleGetCategory/handleGetCategory')
const handleSponsor = require('./express/handleSponsor/handleSponsor')
const cors = require('cors')
const helmet = require('helmet')
const Article = require('./express/models/Article')
const handleGetTrending = require('./express/handleGetTrending/handleTrending')
const handleGetFeatured = require('./express/handleFeature/handleGetFeature')
const handleGetSponsored = require('./express/handleGetSponsored/handleGetSponsored')
const handlePostNote = require('./express/handlePostNote/handlePostNote')
const handlePostFeed = require('./express/handlePostFeed/handleFeedBack')
const handlePostTweet = require('./express/handlePostTweeter/handlePostTweeter')
const handleGetFeedBack = require('./express/handleGetFeedBacks/handleGetFeedBack')
const handleGetNotes = require('./express/handleGetNotes/handleGetNotes')
const handleGetTweets = require('./express/handleGetTweets/handleGetTweets')
const handleFeedBackRes = require('./express/handleFeedBackRes/feedBackRes')
const handleGetPosts = require('./express/handleGetPosts/handleGetPosts')
const handleTweetComment = require('./express/handleTweetComment/handleTweetComment')
const handleLikeTweet = require('./express/handleLikeTweet/handleLikeTweet')
const handleUnLikeTweet = require('./express/handleUnlikeTweet/handleUnlkeTwet')
const handleDeleteArticle = require('./express/handleDeleteArt/handleDeleteArt')
const handleView = require('./express/handleViews/handleView')
const handleGetArticles = require('./express/handleGetArticles/handleGetArticles')
const handleGetAllPostViews = require('./express/handleAllPostViews/handleAllPostViews')
const handleSearchArticle = require('./express/handleSearchArticle/handleSearchArticle')
const handleCheckLiked = require('./express/handleLike/handleCheckLiked')
const handleGetCategories = require('./express/handleCategory/handleGetCategories')
const Category = require('./express/models/Category')
const handleGetArticlesInCategory = require('./express/handleGetCategory/handleGetArticlesInCategory')
const handleGetDashboardData = require('./express/handleDashboardData/handleDashboardData')
const handleUnlike = require('./express/handleLike/handleUnlike')
const handleDeleteFeed = require('./express/handleDeleteFeed/handleDeleteFeed')
const Feedback = require('./express/models/Feedback')
const handleDeleteFeedbackRes = require('./express/handleDeleteFeedbackRes/handleDeleteFeedbackRes')
const handleFetchAllArticles = require('./express/handleFetchAllArticles/handleFetchAllArticles')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(helmet())
app.listen(process.env.PORT || 4001, () => console.log('listening on port 4001 Article Service'))

app.use(`/docs`, swaggerUi.serve, swaggerUi.setup(require('./swagger.json')))
app.post('/add-article', (req, res) => {
  handleAddArticle(req, res, Article)
})
app.get('/', (req, res) => {
  res.status(200).send({ message: "Article Server up" })
})
app.post('/edit', (req, res, next) => {
  handleEditArticle(req, res, Article)
})
app.post('/post-comment/:id', (req, res, next) => {
  handleComment(req, res, Article)
})
app.post('/post-like/:id', (req, res, next) => {
  handleLike(req, res, Article)
})
app.post('/unlike/:id', (req, res, next) => {
  handleUnlike(req, res, Article)
})
app.post('/checkLiked/:id', (req, res, next) => {
  handleCheckLiked(req, res, Article)
})
app.post('/view-post/:id', (req, res) => {
  handleView(req, res, Article)
})
app.post('/sponsor', (req, res, next) => {
  handleSponsor(req, res, Article)
})
app.get('/get-episode/:id/:episode', (req, res) => {
  handleGetNextEpisode(req, res, Article)
})
app.get('/get-posts', (req, res) => {
  handleGetPosts(req, res, Article)
})
app.get('/getArticles/:id', (req, res) => {
  handleGetArticles(req, res, Article)
})

app.get('/getAllPostViews/:id', (req, res) => {
  handleGetAllPostViews(req, res, Article)
})
app.get('/searchArticle/:id/:text', (req, res) => {
  handleSearchArticle(req, res, Article)
})
app.get('/get-article/:id', (req, res) => {
  handleGetArticle(req, res, Article)
})
app.get('/get-recent', (req, res) => {
  handleRecent(req, res, Article)
})
app.get('/get-user-article/:id', (req, res) => {
  handleGetUserArt(req, res, Article)
})
app.get('/get-category/:id', (req, res) => {
  handleGetCategory(req, res, Article)
})
app.get('/get-trending', (req, res) => {
  handleGetTrending(req, res, Article)
})
app.get('/get-featured', (req, res) => {
  handleGetFeatured(req, res, Article)
})
app.get('/get-sponsored', (req, res) => {
  handleGetSponsored(req, res, Article)
})

//
app.post('/post-note', (req, res) => {
  handlePostNote(req, res)
})
app.post('/post-feed', (req, res) => {
  handlePostFeed(req, res)
})
app.post('/delete-feed/:id', (req, res) => {
  handleDeleteFeed(req, res, Feedback)
})
app.post('/feed-res/:id', (req, res) => {
  handleFeedBackRes(req, res)
})
app.post('/delete-reply/:id/:replyId', (req, res) => {
  handleDeleteFeedbackRes(req, res, Feedback)
})
app.post('/post-tweet', (req, res) => {
  handlePostTweet(req, res)
})
app.get('/get-feeds', (req, res, next) => {
  handleGetFeedBack(req, res)
})
app.get('/get-notes', (req, res, next) => {
  handleGetNotes(req, res)
})
app.get('/get-tweets', (req, res, next) => {
  handleGetTweets(req, res)
})
app.post('/comment-tweet/:id', (req, res, next) => {
  handleTweetComment(req, res)
})
app.get('/like-tweet/:id', (req, res) => {
  handleLikeTweet(req, res)
})

app.get('/unlike-tweet/:id', (req, res) => {
  handleUnLikeTweet(req, res)
})
app.get('/delete-article/:id', (req, res) => {
  handleDeleteArticle(req, res, Article)
})
app.get('/categories', (req, res, next) => {
  handleGetCategories(req, res, Category)
})
app.get('/getArticlesInCategory/:id/:authorId', (req, res) => {
  handleGetArticlesInCategory(req, res, Article)
})

app.get('/getDashboardData/:id', async (req, res) => {
  await handleGetDashboardData(req, res, Article)
})
app.get('/articles-data', (req, res) => {
  handleFetchAllArticles(req, res, Article)
})
// add categories  do not uncomment 
// Category.insertMany( [
//   { category: "Article"  },
//   { category: "Short Stories" },
//   { category: "Poems" },
//   { category: "Series" },
// ] , (err, res)=>{
//   console.log(res)
// }) 


// update article schema to have catorgyId field do not uncomment
// Article.find({},  (err, art)=>{
//   if(err){
//     console.log("Error", err)
//   }
//    art.forEach(a=>{
//       Category.findOne( { category : a.category}, (err, res)=>{
//         Article.updateOne({ _id:a._id}, {$set:{categoryId: res._id }}, (err, r)=>{console.log(r, err)})
//       })
//    })
// })

app.get('/', (req, res) => {
  res.send('Server Started')
});






