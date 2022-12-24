const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const NoteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  datePosted:{
    type: Number,
    default:Date.now()
  }
})
module.exports = mongoose.model('Note', NoteSchema)
