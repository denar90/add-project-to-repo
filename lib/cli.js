'use strict';
const helpers = require('./helpers');

/**
 * Runs CLI
 */
exports.run = () => {
    const command = helpers.buildCommand();
    helpers.runCommand(command);
};