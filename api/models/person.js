const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    payments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Payment"
    }]
})

const PersonModel = mongoose.model("Person", PersonSchema)

module.exports = PersonModel