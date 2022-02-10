const pilotDatamapper = require('../../models/pilot');

const websiteController = {

    home(_, res) {
        res.render('home', { title: 'MotoGP', message: "Bienvenue sur le Site Moto'GP" });
    },

    async allPilots(req, res) {
        const pilots = await pilotDatamapper.findAll();
        res.render('pilots', { pilots });
    },
};

module.exports = { websiteController };
