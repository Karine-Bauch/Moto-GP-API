const ApiError = require('../../errors/apiError');
const racetrackDatamapper = require('../../models/racetrack');

module.exports = {

    async getAll(_, res) {
        const racetracks = await racetrackDatamapper.findAll();
        return res.json(racetracks);
    },

    async getOne(req, res) {
        const racetrack = await racetrackDatamapper.findOne(req.params.id);

        if (!racetrack) {
            throw new ApiError(404, 'Racetrack not found');
        }

        return res.json(racetrack);
    },
};
