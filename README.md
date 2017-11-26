# trooba-plugin

[![codecov](https://codecov.io/gh/trooba/trooba-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/trooba/trooba-plugin)
[![Build Status](https://travis-ci.org/trooba/trooba-plugin.svg?branch=master)](https://travis-ci.org/trooba/trooba-plugin) [![NPM](https://img.shields.io/npm/v/trooba-plugin.svg)](https://www.npmjs.com/package/trooba-plugin)
[![Downloads](https://img.shields.io/npm/dm/trooba-plugin.svg)](http://npm-stat.com/charts.html?package=trooba-plugin)
[![Known Vulnerabilities](https://snyk.io/test/github/trooba/trooba-plugin/badge.svg)](https://snyk.io/test/github/trooba/trooba-plugin)

The module provides a way to assign trooba plugins or handlers with necessary attributes required by trooba as well as specify trooba version that plugin requires.

## Install

```bash
npm install trooba-plugin -S
```

## Usage

```js
const plugin = require('trooba-plugin');

function myPlugin(pipe) {
    pipe.on('request', () => {});
}

module.exports = plugin(myPlugin, {
    troobaVersion: '^2',
    runtime: 'generic'
})
```
