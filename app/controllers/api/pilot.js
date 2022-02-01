const { json } = require('express');
const ApiError = require('../../errors/apiError');
const pilotDatamapper = require('../../models/pilot');
const { getOne } = require('./manufacturer');

module.exports = {

    async getAll(_, res) {
        const pilots = await pilotDatamapper.findAll();
        return res.json(pilots);
    },

    async getOne(req, res) {
        const pilot = await pilotDatamapper.findOne(req.params.id);

        if (!pilot || pilot.length === 0) {
            throw new ApiError(404, 'Pilot not found');
        }

        return res.json(pilot);
    },
};
