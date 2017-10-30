
const expect = require('chai').expect;

module.exports = function() {
        browser.url('?life_journeyredesign_test=false&AFFCLIE=TSTT');
        const text = 'About you';
        browser.waitForText('h1[class=main-heading]');
        expect(browser.getText('h1[class=main-heading]')).to.be.equal(text);
}