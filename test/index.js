'use strict';

var Assert = require('assert');
var plugin = require('..');

var version;
var m = require('module');
m._load = (function overrideLoadFactory(original) {
    return function(name, meta) {
        if (name === 'trooba/package.json') {
            if (version instanceof Error) {
                throw version;
            }
            return {
                version: version
            };
        }

        return original.apply(m, arguments);
    };
})(m._load);

describe(__filename, function () {
    it('should assign attributes', function () {
        var p = plugin({}, {
            foo: 'bar',
            qaz: 'wsx'
        });

        Assert.deepEqual({
            attributes: {
                foo: 'bar',
                qaz: 'wsx'
            }
        }, p);
    });

    it('should enforce version', function () {
        version = '1.2.0';
        var p = plugin({}, {
            troobaVersion: '^1.0.0'
        });
        Assert.deepEqual({
            attributes: {
                troobaVersion: '^1.0.0'
            }
        }, p);
    });

    it('should require higher or equal version', function () {
        version = '0.2.0';
        Assert.throws(function () {
            plugin({}, {
                troobaVersion: '^1.0.0'
            });
        }, /trooba-plugin needs trooba\@\^1\.0\.0, actual version detected trooba\@0\.2\.0/);
    });

    it('should fail to enforce version', function () {
        version = new Error('NotFound');
        var p = plugin({}, {
            troobaVersion: '^1.0.0'
        });
        Assert.deepEqual({
            attributes: {
                troobaVersion: '^1.0.0'
            }
        }, p);
    });

});
