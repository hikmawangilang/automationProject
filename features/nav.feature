@testing
Feature: testing feature

@tc1
Scenario: testing scenario
Given user on home page
And user want to login with Google
When user fill username and password
And user click button login
Then verify user successfully login