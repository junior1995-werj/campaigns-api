var Avertiser = require('../model/Avertiser.model');

exports.create = function (req, res) {
    let avertiser = new Avertiser(
        {
            company_name_advertiser: req.body.company_name_advertiser,
            region: req.body.region,
        }
    );
    avertiser.save().then(()=>{
        res.send("Criado com sucesso");
    }).catch((err)=>{
        console.log(err);
    })
}

exports.all_avertiser = (req, res) => {
    Avertiser.find().exec().then((avertiser)=>{
        res.send(avertiser)
    }).catch((err)=>{
        res.send(err)
    });
}