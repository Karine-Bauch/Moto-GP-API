const express = require('express');

// const validate = require('../../validation/validator');
// const schema = require('../../validation/schemas/manufacturerSchema');

const { manufacturerController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
    .get(controllerHandler(manufacturerController.getOne));

module.exports = router;
