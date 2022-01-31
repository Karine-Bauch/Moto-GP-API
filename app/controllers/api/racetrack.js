const racetrackDatamapper = require('../../models/racetrack');

module.exports = {

    async getAll(_, res) {
        const racetracks = await racetrackDatamapper.findAll();
        return res.json(racetracks);
    },
};
