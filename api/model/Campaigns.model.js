const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CampaignsSchema = new Schema({
    id_advertiser: {type: String, required: true, max: 100},
    name_campaign: {type: String, required: true},
    conversion_type: {type: String, required: true},
    briefing: {type: String, required: true},
    offer_price: {type: Number, required:true},
    country_target: {type: String,  required:true},
});

module.exports = mongoose.model('Campaigns', CampaignsSchema);