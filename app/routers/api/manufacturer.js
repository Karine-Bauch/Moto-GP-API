const express = require('express');

const { manufacturerController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
    .get(controllerHandler(manufacturerController.getOne));

module.exports = router;
