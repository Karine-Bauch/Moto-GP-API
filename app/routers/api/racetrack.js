const express = require('express');

const { racetrackController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(racetrackController.getAll));

module.exports = router;
