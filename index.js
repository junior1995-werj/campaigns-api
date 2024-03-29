const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const campaigns = require('./api/routes/campaigns.routes'); 
const avertiser = require('./api/routes/avertiser.routes'); 
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express();

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

let url = 'mongodb+srv://juninhowerner31:SogamXB8ZbbyMChu@challenge-campaigns-api.jcu0q4u.mongodb.net/?retryWrites=true&w=majority';
let mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use('/v1/campaigns', campaigns);
app.use('/v1/avertiser', avertiser);

const PORT = process.env.PORT || 5000

app.listen(PORT,"0.0.0.0", () => {
    console.log('Servidor em execução na porta' + PORT);
});