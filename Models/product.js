const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true,
    },
    song: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("Product", productSchema)