const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const TweetSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes:{
    type: Number,
    default:0,
  },
  unlikes:{
    type: Number,
    default:0,
  },
  comments:[
    {
      name:String,
      date:{
        type:Number,
        default:Date.now()
      },
      comment:String
    }
  ],

  url:{
    type: String,
    required: false
  },
  imageUrl:{
    type: String,
    required: false
  },
  datePosted:{
      type:Number,
      default:Date.now()
  }


})


module.exports = mongoose.model('Tweet', TweetSchema)
