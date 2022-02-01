const express = require('express');

const { teamController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(teamController.getAll));

router.route('/:id')
    .get(controllerHandler(teamController.getOne));

module.exports = router;
