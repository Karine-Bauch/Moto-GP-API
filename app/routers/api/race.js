const express = require('express');

const { raceController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    /**
     * GET /api/races
     * @summary Get All races
     * @tags Races
     * @returns {races} 200 - races object
     */
    .get(controllerHandler(raceController.getAll));

router.route('/:id')
    /**
     * GET /api/races/{id}
     * @summary Get One race
     * @tags Races
     * @param {number} id.path.required race id we want to show
     * @returns {race} 200 - race object
     */
    .get(controllerHandler(raceController.getOne));

module.exports = router;
