const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const couponSchema = new mongoose.Schema({
   
    
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
    },
    code:{
        type: String,
        uppercase: true,
        required: true,
        unique: true
    },
    type: { 
        type: Number,
        required: true,
        default: 0
    },
    start: {
        type: Date,
        required: true,
        default: Date.now,
    },
    end: {
        type: Date,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    value: { 
        type: Number,
        required: true
    },
    max_value: { 
        type: Number,
    },
    limit: {
        type: Number,
        default: 0
    },
    limit_per_user: {
        type: Boolean,
        default: true
    },
    used: {
        type: Number,
        default: 0
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]

}, {
    timestamps: true
})

couponSchema.methods.toJSON = function () {
    const coupon = this
    const couponObject = coupon.toObject()
    return couponObject
}

couponSchema.plugin(AutoIncrement, {inc_field: 'id',start_seq: 2000001 })

const Coupon = mongoose.model('Coupon', couponSchema)

module.exports = Coupon
