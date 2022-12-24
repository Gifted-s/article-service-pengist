const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const Category = new Schema({
  category: {
    type: String,
    required: true,
  },
  datePosted:{
    type: Number,
    default:Date.now()
  }
})
module.exports = mongoose.model('Category', Category)
