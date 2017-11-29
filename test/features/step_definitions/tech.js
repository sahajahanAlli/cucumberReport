const { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, Then }) {
    Given('I have valid credentials', function(callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log(this.apickli.scenarioVariables.username);
        console.log(this.apickli.scenarioVariables.password);
        callback();
    });

    Given('I have invalid username', function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    Given('I have invalid password', function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });
});