const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdvertiserSchema = new Schema({
    company_name_advertiser: {type: String, required: true, max: 100},
    region: {type: String, required: true},
});

module.exports = mongoose.model('Advertiser', AdvertiserSchema);