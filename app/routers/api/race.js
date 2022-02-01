const express = require('express');

const { raceController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(raceController.getAll));

module.exports = router;
