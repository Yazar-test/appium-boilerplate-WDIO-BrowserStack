@Automated @UI @Mobile @Android 
Feature: Feature file to check CelciusToFahrenheit & FahrenheitToCelcius conversion

  @CelciusToFahrenheit
   Scenario: Check C to F conversion
    Given I launch the app
    When I enter celsiusTextField as 1
    Then I verify fahrenheitTextField contains 33.8

  @FahrenheitToCelcius
   Scenario: Check F to C conversion
    Given I launch the app
    When I enter fahrenheitTextField as 100
    Then I verify celsiusTextField contains 37.77777777777778

  @Reset
   Scenario: Check reset functionality
    Given I launch the app
    When I enter celsiusTextField as 1
    When I click reset button
    Then I verify fahrenheitTextField contains 0
    When I enter fahrenheitTextField as 100	
    When I click reset button
    Then I verify celsiusTextField contains 0

  @Regression @Smoke @E2E
   Scenario Outline: Check regression and smoke functionality
    Given I launch the app
    When I enter celsiusTextField as <CelsiusValue>
    Then I verify fahrenheitTextField contains <ExpectedFahrenheit>
    When I enter fahrenheitTextField as <FahrenheiValue>
    Then I verify celsiusTextField contains <ExpectedCelsiusValue>
    When I click reset button
    Then I verify celsiusTextField contains 0
    Then I verify fahrenheitTextField contains 0
    
    Examples:
      | CelsiusValue | ExpectedFahrenheit | FahrenheiValue | ExpectedCelsiusValue |
      | 1            |  33.8              |   100          | 37.77777777777778    |
      | -3           |  26.6              |   23           | -5.0                 |
    
