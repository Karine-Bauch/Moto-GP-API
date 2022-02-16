const ApiError = require('../../errors/apiError');
const teamDatamapper = require('../../models/team');

module.exports = {

    async getAll(_, res) {
        const teams = await teamDatamapper.findAll();
        return res.json(teams);
    },

    async getOne(req, res) {
        const team = await teamDatamapper.findOne(req.params.id);

        if (!team) {
            throw new ApiError(404, 'Team not found');
        }

        return res.json(team);
    },
};
