const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2},
    amount: {
        type: Number,
        required: true,
        min: 0
    }
})
 
const PaymentModel = mongoose.model("Payment", PaymentSchema)

module.exports = PaymentModel