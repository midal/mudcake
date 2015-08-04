/*eslint-disable no-unused-expressions */
/*eslint-disable dot-notation */
module.exports = new (function() {
    var testCases = this;

    testCases['Smoketest'] = function (browser) {
        browser.url('localhost:3000');
        browser.waitForElementVisible('body', 1000);

        browser.expect.element('.landing-page .container').text.to.equal('Welcome');

        browser.end();
    };

})();
/*eslint-enable no-unused-expressions */
/*eslint-enable dot-notation */
