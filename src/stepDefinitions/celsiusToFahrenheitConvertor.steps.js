const {Given, When, Then} = require('cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given(/^I launch the app$/, () => {
    celsiusToFahrenheitConvertorPage.launchApp();
});

When(/^I enter (.*) as (.*)$/, (field,value) => {
    celsiusToFahrenheitConvertorPage.enterFieldValue(field,value);
});

Then(/^I verify (.*) contains (.*)$/, (field,value) => {
    celsiusToFahrenheitConvertorPage.verifyFieldValue(field,value);
});
When(/^I click reset button$/, () => {
    celsiusToFahrenheitConvertorPage.clickRestButton();
});



