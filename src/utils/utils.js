class Utils {

    static launchApp() {
        driver.launchApp();
    }


    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }
}

module.exports = Utils;
