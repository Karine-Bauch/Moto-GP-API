const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: 'MotoGP',
        description: "Site d'informations sur les courses de Moto GP",
    },
    baseDir: __dirname,
    filesPattern: '../**/*.js',
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
    exposeApiDocs: true,
    apiDocsPath: '/api/docs',
};

/**
 *
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that create web doc
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
