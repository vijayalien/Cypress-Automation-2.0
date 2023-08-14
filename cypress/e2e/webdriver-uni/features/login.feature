Feature: Webdriver Universtiy Login page

    # Scenario: Login using valid creds

    #     Given I access the Webdriver Universtiy login page
    #     When I enter a username "webdriver"
    #     And I enter password "webdriver123"
    #     And I click on login button
    #     Then I check for validation message "validation succeeded"

    # Scenario: Login using invalidvalid creds

    #     Given I access the Webdriver Universtiy login page
    #     When I enter a username "webdriver12"
    #     And I enter password "webdriver123"
    #     And I click on login button
    #     Then I check for validation message "validation failed"

    Scenario Outline: Login to webdriver uni page

        Given I access the Webdriver Universtiy login page
        When I enter a username "<username>"
        And I enter password "<password>"
        And I click on login button
        Then I check for validation message "<validation message>"

        Examples:
            | username   | password     | validation message   |
            | webdriver  | webdriver123 | validation succeeded |
            | webdriver1 | webdriver1   | validation failed    |