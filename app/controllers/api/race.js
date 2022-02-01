const ApiError = require('../../errors/apiError');
const raceDatamapper = require('../../models/race');

module.exports = {

    async getAll(_, res) {
        const races = await raceDatamapper.findAll();
        return res.json(races);
    },

    async getOne(req, res) {
        const race = await raceDatamapper.findOne(req.params.id);

        if (!race) {
            throw new ApiError(404, 'Race not found');
        }

        return res.json(race);
    },
};
