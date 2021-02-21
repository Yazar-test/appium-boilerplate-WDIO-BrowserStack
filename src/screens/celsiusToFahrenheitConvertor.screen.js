class CelsiusToFahrenheitConvertorScreen{
    constructor(){
        this.celsiusTextField ='//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextC"]';
        this.fahrenheitTextField ='//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextF"]';
        this.submitButtonCtoF ='//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvCF"]';
 	this.submitButtonFtoC ='//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvFC"]';
        this.rateAppMessage = '//android.widget.TextView[@resource-id="android:id/message"]';
        this.laterButton = '//android.widget.Button[@resource-id="android:id/button3"]';
	this.resetButton = '//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btnreset"]';

    }
}

module.exports = new CelsiusToFahrenheitConvertorScreen();
