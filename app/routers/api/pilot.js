const express = require('express');

const { pilotController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    /**
     * GET /api/pilots
     * @summary Get All pilots
     * @tags Pilots
     * @returns {pilots} 200 - pilots object
     */
    .get(controllerHandler(pilotController.getAll));

router.route('/:id')
    /**
     * GET /api/pilots/{id}
     * @summary Get One pilot
     * @tags Pilots
     * @param {number} id.path.required pilot id we want to show
     * @returns {pilot} 200 - pilot object
     */
    .get(controllerHandler(pilotController.getOne));

module.exports = router;
