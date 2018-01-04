const { defineSupportCode } = require('cucumber');
var rp = require('request-promise');

defineSupportCode(function({ Given, When, Then }) {
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


    Given('I have valid header', function(callback) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
        // this.scenarioVariables["userdefinedHeader"] = "Apickli-header";
        console.log(this.apickli.domain);
        self.apickli.storeValueInScenarioScope("userdefinedHeader", "Apickli-header");
        callback();
    });



    When('I am requesting data', function(callback) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
        rp.get({
            uri: self.apickli.domain + '/get',
            headers: {
                "customHeaderfortest": self.apickli.scenarioVariables.userdefinedHeader
            },
            json: true
        }).then(function(body) {
            console.log(body);
            self.apickli.storeValueInScenarioScope("userdefinedheaderdata", body.headers.Customheaderfortest)
            callback();
        }).catch(function() {
            callback(new Error('An exception has occured'))
        })

    });


    Then('valid header is found', function(callback) {
        // Write code here that turns the phrase above into concrete actions

        if (this.apickli.scenarioVariables.userdefinedheaderdata == 'Apickli-headr') {
            callback();
        } else {
            callback(new Error('Value Mismatch'));
        }

    });
});