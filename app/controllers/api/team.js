const teamDatamapper = require('../../models/team');

module.exports = {

    async getAll(_, res) {
        const teams = await teamDatamapper.findAll();
        return res.json(teams);
    },
};
