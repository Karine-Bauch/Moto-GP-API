const express = require('express');

const { pilotController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(pilotController.getAll));

router.route('/:id')
    .get(controllerHandler(pilotController.getOne));

module.exports = router;
