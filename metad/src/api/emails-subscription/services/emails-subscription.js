'use strict';

/**
 * emails-subscription service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emails-subscription.emails-subscription');
