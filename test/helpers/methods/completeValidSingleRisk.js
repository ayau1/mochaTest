const expect = require('chai').expect;
const riskPageElementIds = require('../elements/riskPageElementIds');

module.exports = function() {

    browser.click(riskPageElementIds.proposerTitle)
        .selectByValue(riskPageElementIds.proposerTitle,"MRS")
        .setValue(riskPageElementIds.proposerFirstName,"Test")
        .setValue(riskPageElementIds.proposerSurname,"Test")
        .selectByValue(riskPageElementIds.proposerDateOfBirthDay,"string:01")
        .selectByValue(riskPageElementIds.proposerDateOfBirthMonth,"string:03")
        .selectByValue(riskPageElementIds.proposerDateOfBirthYear,"number:1979")
        .click(riskPageElementIds.proposerNonSmokerLabel)
        .setValue(riskPageElementIds.yearsTextBox,"25")
        .setValue(riskPageElementIds.amount,"250000")
        .setValue(riskPageElementIds.proposerEmailAddress,"test@test.com")
        .setValue(riskPageElementIds.proposerHouseNumber,"1")
        .setValue(riskPageElementIds.proposerPostcode,"PE2 6XJ")
        .click(riskPageElementIds.contactPrefEmail)
}
