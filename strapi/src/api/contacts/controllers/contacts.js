'use strict';

/**
 * contacts controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contacts.contacts');
