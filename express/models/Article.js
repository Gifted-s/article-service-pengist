const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  articleId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  categoryId: {
    type: String,
    required: false
  },
  episode: {
    type: Number,
    required: false,
    default: 1
  },
  authorName: {
    type: String,
    required: true
  },
  pretext: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  featuredUntil: {
    type: Number,
    required: false,
    default: 0
  },
  dateAdded: {
    type: Number,
    required: false,
    default: Date.now()
  },
  dateModified: {
    type: Number,
    required: false,
    default: Date.now()
  },

  sponsoredUntil: {
    type: Number,
    required: false,
    default: 0
  },
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  comments: [
    {
      postedOn: {
        type: Number,
        required: false
      },
      name: String,
      text: {
        type: String,
        required: false
      },
      commenterId: {
        type: String,
        required: false
      },
    }

  ],
  numberOfViews: {
    type: Number,
    required: false,
    default: 0
  },

  likes: [{
    userId: String
  }],

  numberOfLikes: {
    type: Number,
    required: false,
    default: 0
  },

  noOfComments: {
    required: false,
    type: Number,
    default: 0
  }

})


module.exports = mongoose.model('Article', ArticleSchema)
