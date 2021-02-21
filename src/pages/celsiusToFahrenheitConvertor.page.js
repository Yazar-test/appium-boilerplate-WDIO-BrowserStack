const Utils = require('./../utils/utils');
require('chai').should();
class CelsiusToFahrenhietConvertorPage {

    getObjectLocator() {
        return require(`./../screens/celsiusToFahrenheitConvertor.screen.js`);
    }

    dismissAppRatingIfPresent() {
        if (Utils.isVisible(this.getObjectLocator().rateAppMessage)) {
            Utils.click(this.getObjectLocator().laterButton);
        }
    }

    launchApp() {
        Utils.launchApp();
        
    }

    enterFieldValue(field,value) {
    	var fieldLocator = '';
	var buttonLocator = '';
    	if(field == "celsiusTextField"){
	fieldLocator = this.getObjectLocator().celsiusTextField;
	buttonLocator = this.getObjectLocator().submitButtonCtoF;
	}
	else{
	fieldLocator = this.getObjectLocator().fahrenheitTextField;
	buttonLocator = this.getObjectLocator().submitButtonFtoC;
	}
        this.dismissAppRatingIfPresent();
        Utils.waitForElement(fieldLocator, 4);	
        Utils.clearText(fieldLocator);
        Utils.sendText(fieldLocator, value);
        Utils.click(buttonLocator);
    }

    verifyFieldValue(field,value) {
	var fieldLocator = '';
    	if(field == "celsiusTextField"){
	fieldLocator = this.getObjectLocator().celsiusTextField;
	}
	else{
	fieldLocator = this.getObjectLocator().fahrenheitTextField;
	}
        Utils.waitForElement(fieldLocator, 4);
        Utils.getText(fieldLocator).should.equal(value);
    }

    clickRestButton(){
	Utils.click(this.getObjectLocator().resetButton);
	}
}

module.exports = CelsiusToFahrenhietConvertorPage;
