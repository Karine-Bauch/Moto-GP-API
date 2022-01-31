const manufacturerDatamapper = require('../../models/manufacturer');

module.exports = {

    async getAll(_, res) {
        const manufacturers = await manufacturerDatamapper.findAll();
        return res.json(manufacturers);
    },
};
