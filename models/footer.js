const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Footer = new Schema({
    logo:String,
    description:String,
    list:Object,
    list2:Object,
    address:String,
    socialMedia:Object,
    banner:Object,
    header:Object
},schemaOptions)

module.exports = mongoose.model('Footer', Footer)



