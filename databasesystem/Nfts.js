const mongoose = require('mongoose')

const NftSchema  = new mongoose.Schema({
    image:String,
    name:String,
    price:String,
    userId:String
})

module.exports = mongoose.model('nfts',NftSchema)