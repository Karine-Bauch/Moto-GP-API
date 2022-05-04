const ApiError = require('../../errors/apiError');
const raceDatamapper = require('../../models/race');
// const location = require('../../models/apiLocation');
// const weather = require('../../models/apiWeather');

module.exports = {

    async getAll(_, res) {
        const races = await raceDatamapper.findAll();
        return res.json(races);
    },

    async getOne(req, res) {
        const id = Number(req.params.id);
        console.log(id);
        const race = await raceDatamapper.findOne(id);
        console.log(race);

        if (!race) {
            throw new ApiError(404, 'Race not found');
        }

        // const geocode = await location.cityLatLng(race.city);
        // const today = Math.floor(Date.now() / 1000);
        // // Pour tester -> now, parce que API payante pour les jours de 2021

        // const weatherRace = await weather.weatherCity(geocode.lat, geocode.lng, today);
        // console.log(weatherRace, today);
        return res.json({ race });
    },
};
