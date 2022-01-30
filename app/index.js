const express = require('express');
const cors = require('cors');

const router = require('./routers');

const app = express();
require('./helpers/apiDocs')(app);

// Config des views avec chemin absolu pour faciliter deploiement sur Heroku
app.set('views', `${process.cwd()}/app/views`);

// Moteur de views : pug
app.set('view engine', 'pug');

// Midleware pour parser le JSON
app.use(express.json());
// Midlewar pour parser l'urlencoded
app.use(express.urlencoded({ extended: true }));

// On lève la restriction CORS pour le Front
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;
