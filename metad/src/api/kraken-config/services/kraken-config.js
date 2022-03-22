'use strict';

/**
 * kraken-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kraken-config.kraken-config');
