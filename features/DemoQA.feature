@tag
Feature: DemoQA Tests
  

  @tag1
  Scenario: Testing Components of DemoQA page
  Given user navigates to "https://demoqa.com/" site
  When user clicks on "HTML Contact Form"
  Then corresponding "HTML Contact Form" page should be displayed
