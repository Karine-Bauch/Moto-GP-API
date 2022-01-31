const raceDatamapper = require('../../models/race');

module.exports = {

    async getAll(_, res) {
        const races = await raceDatamapper.findAll();
        return res.json(races);
    },
};
