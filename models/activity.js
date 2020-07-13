const mongoose = require("mongoose")
const Schema = mongoose.Schema
const SchemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}

const Activity = new Schema({
    type:String,
    qty:String,
    description:String,
    rate:String,
    date:{type:Date, default:Date.now},
    user:{type:Schema.Types.ObjectId, ref: "User"},
    invoiceStatus:String,
    time:String,
    amount:String,
    userId:{type:Schema.Types.ObjectId, ref:"User"}
}, SchemaOptions)


module.exports = mongoose.model("Activity", Activity)