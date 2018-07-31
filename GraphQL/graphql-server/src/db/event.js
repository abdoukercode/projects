const mongose = require('./')
const {Schema} = mongoose

module.exports = new mongose.model('Event', Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type:  Date,
        required: true
    }
}))
