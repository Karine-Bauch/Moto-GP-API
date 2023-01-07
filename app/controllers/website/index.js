const pilotDatamapper = require('../../models/pilot');
const teamDatamapper = require('../../models/team');
const manufacturerDatamapper = require('../../models/manufacturer');
const raceDatamapper = require('../../models/race');
const racetrackDatamapper = require('../../models/racetrack');

const websiteController = {

    home(_, res) {
        res.render('home', { title: 'MotoGP', message: "Bienvenue sur le Site Moto'GP" });
    },

    async allPilots(req, res) {
        const pilots = await pilotDatamapper.findAll();
        res.render('pilots', { pilots });
    },

    async allTeams(req, res) {
        const teams = await teamDatamapper.findAll();
        res.render('teams', { teams });
    },

    async allManufacturers(req, res) {
        const manufacturers = await manufacturerDatamapper.findAll();
        res.render('manufacturers', { manufacturers });
    },

    async allRaces(req, res) {
        const races = await raceDatamapper.findAll();
        res.render('races', { races });
    },

    async allRacetracks(req, res) {
        const racetracks = await racetrackDatamapper.findAll();
        res.render('racetracks', { racetracks });
    },
};

module.exports = { websiteController };
