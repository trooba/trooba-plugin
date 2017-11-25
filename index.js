'use strict';

var semver = require('semver');

module.exports = function (plugin, attributes) {
    var troobaVersion = attributes.troobaVersion;
    if (troobaVersion) {
        var actualVersion;
        try {
            actualVersion = require('trooba/package.json').version;
        }
        catch (err) {
            console.log('[WARN] trooba version cannot be detected, skipping version enforcement');
        }
        if (actualVersion && !semver.satisfies(actualVersion, troobaVersion)) {
            throw new Error('trooba-plugin needs trooba@' + troobaVersion + ', actual version detected trooba@' + actualVersion);
        }
    }
    plugin.attributes = attributes;
    return plugin;
};
