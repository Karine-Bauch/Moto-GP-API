const express = require('express');

const { manufacturerController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router.route('/')
    /**
     * GET /api/manufacturers
     * @summary Get All manufacturers
     * @tags Manufacturers
     * @returns {manufacturers} 200 - Manufacturers object
     */
    .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
    /**
     * GET /api/manufacturers/{id}
     * @summary Get One manufacturer
     * @tags Manufacturers
     * @param {number} id.path.required manufacturer id we want to show
     * @returns {manufacturer} 200 - Manufacturer object
     */
    .get(controllerHandler(manufacturerController.getOne));

module.exports = router;
