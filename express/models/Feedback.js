const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const FeedBackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  noOfRes: {
    type: Number,
    required: true,
    default: 0
  },
  replies: [
    {
      userId: String,
      authorName: String,
      reply: String,
      datePosted: {
        required: true,
        type: Number,
        default: Date.now()
      }
    }
  ],
  datePosted: {
    type: Number,
    required: true,
    default: Date.now()
  }

})


module.exports = mongoose.model('Feed', FeedBackSchema)
