'use strict';

const apickli = require('apickli');
const yaml = require('js-yaml');
const fs = require('fs');
const { defineSupportCode } = require('cucumber');

var config = {};
var data = {};
/*try {
    config = yaml.safeLoad(fs.readFileSync('../setting.yml', 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(config.default);
} catch (e) {
    console.log(e);
}
data = config.default;
var secData = { "name": "sahajahan" }

console.log(data.apiUrl);*/
defineSupportCode(function({ Before, setDefaultTimeout }) {
    Before(function() {
        this.apickli = new apickli.Apickli('http', 'httpbin.org');
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
        this.apickli.scenarioVariables = config.default;
    });

    setDefaultTimeout(60 * 1000);
});