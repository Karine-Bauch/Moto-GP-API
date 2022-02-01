const ApiError = require('../../errors/apiError');
const manufacturerDatamapper = require('../../models/manufacturer');

module.exports = {

    async getAll(_, res) {
        const manufacturers = await manufacturerDatamapper.findAll();
        return res.json(manufacturers);
    },

    async getOne(req, res) {
        const manufacturer = await manufacturerDatamapper.findOne(req.params.id);

        if (!manufacturer || manufacturer.length === 0) {
            throw ApiError(404, 'Manufacturer not found');
        }

        return res.json(manufacturer);
    },
};
