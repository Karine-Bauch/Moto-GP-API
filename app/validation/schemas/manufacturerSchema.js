const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().pattern(/^[A-Z][a-z-A-Z0-9 ]*$/).required(),
}).required();
