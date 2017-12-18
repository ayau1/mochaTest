/**
 * Created by Amie Yau on 20/10/2017.
 */

// to run test type wdio wdioPROD.conf.js from the mochatest level. Selenium server, webdriverio and wdio-mocha-framework
//and wdio-selenium-stanalone-service are all installed globally
//To run a single test from a test file in cmd e.g. wdio --mochaOpts.grep "I should be able to apply online" wdioLOCAL.conf.js

//or if you do not have them installed globally, then navigate to the node_modules/.bin first and change youe spec file path accordingly in wdio config
// e.g. wdio ../../wdioPROD.conf.js
// and your spec file path in the conf should be in this instance '../../test/specs/test.js'
"use strict"

// I need to require a hooks file for each spec run.[y
// Each spec file will be small so that they can run in parallel

const navigateToRiskPage = require('../helpers/methods/navigateToRiskPage');
const completeValidSingleRisk = require('../helpers/methods/completeValidSingleRisk');

describe('Navigate to the risk page', function () {
    it('should visit the life risk page', function () {
        navigateToRiskPage();
    })
})

describe('I should be able to apply online', function () {
    it('given I have entered a valid risk',function () {
        navigateToRiskPage();
        completeValidSingleRisk();
    })

})