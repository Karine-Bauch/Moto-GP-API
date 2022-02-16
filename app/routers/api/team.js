const express = require('express');

const { teamController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    /**
     * GET /api/teams
     * @summary Get All teams
     * @tags Teams
     * @returns {teams} 200 - teams object
     */
    .get(controllerHandler(teamController.getAll));

router.route('/:id')
    /**
     * GET /api/teams/{id}
     * @summary Get One team
     * @tags Teams
     * @param {number} id.path.required team id we want to show
     * @returns {team} 200 - team object
     */
    .get(controllerHandler(teamController.getOne));

module.exports = router;
