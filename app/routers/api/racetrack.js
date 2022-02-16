const express = require('express');

const { racetrackController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    /**
     * GET /api/racetracks
     * @summary Get All racetracks
     * @tags Racetracks
     * @returns {racetracks} 200 - racetracks object
     */
    .get(controllerHandler(racetrackController.getAll));

router.route('/:id')
    /**
     * GET /api/racetracks/{id}
     * @summary Get One racetrack
     * @tags Racetracks
     * @param {number} id.path.required racetrack id we want to show
     * @returns {racetrack} 200 - racetrack object
     */
    .get(controllerHandler(racetrackController.getOne));

module.exports = router;
