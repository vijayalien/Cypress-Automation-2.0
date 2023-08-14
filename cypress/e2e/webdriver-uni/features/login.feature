Feature: Webdriver Universtiy Login page

    Scenario: Login using valid creds

        Given I access the Webdriver Universtiy login page
        When I enter a username "webdriver"
        And I enter password "webdriver123"
        And I click on login button
        Then I check for validation successful message