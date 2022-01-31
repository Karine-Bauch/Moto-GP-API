const pilotDatamapper = require('../../models/pilot');

module.exports = {

    async getAll(_, res) {
        const pilots = await pilotDatamapper.findAll();
        return res.json(pilots);
    },
};
