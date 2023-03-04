var objectId = require('mongoose').Types.ObjectId; 

var Campaigns = require('../model/Campaigns.model');


exports.create = function (req, res) {
    let campaigns = new Campaigns(
        {
            id_advertiser: req.body.id_advertiser,
            name_campaign: req.body.name_campaign,
            conversion_type: req.body.conversion_type,
            briefing: req.body.briefing,
            offer_price: req.body.offer_price, 
            country_target: req.body.country_target,
        }
    );
    
    campaigns.save().then(()=>{
            res.send("Criado com sucesso");
        }).catch((err)=>{
            console.log(err);
        })
   
}

exports.all_campaigns = (req, res) => {
    console.log("get from all_campaigns")
    Campaigns.find().exec().then((campaigns)=>{
        res.json(campaigns)
    });
}

exports.alter_campaign = function (req,res) {
    Campaigns.findByIdAndUpdate(req.params.id, {$set: req.body}).then(campaigns=>res.send(campaigns))
    .catch(err=>console.log(err));
};

exports.campaigns_by_advertiser = (req, res) => {
    Campaigns.find({id_advertiser: req.params.id}).exec().then((campaigns)=>{
        res.send(campaigns)
    });
}

exports.campaigns_by_id = function (req, res) {
    console.log("Get ok")
    Campaigns.findById(req.params.id).exec().then((campaigns) =>{
        res.json(campaigns)
    })
};    

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
    
};

exports.best_campaign_by_region = function (req, res) {
    Campaigns.find({country_target: req.params.region.toUpperCase()}).exec().then((campaigns)=>{
        var index = undefined
        var value = 0
        for(campaign in campaigns){
            if (value < parseFloat(campaigns[campaign].offer_price)){
                index = campaign
                value = parseFloat(campaigns[campaign].offer_price)
            }
        }
        res.send(campaigns[index])
    });
};