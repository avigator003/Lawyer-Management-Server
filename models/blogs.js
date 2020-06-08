const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Blogs = new Schema({
    title:String,
    description:String,
    shortDescription:String,
    author:String


})

module.exports = mongoose.model('Blogs', Blogs)