$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoQA.feature");
formatter.feature({
  "line": 2,
  "name": "DemoQA Tests",
  "description": "",
  "id": "demoqa-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Testing Components of DemoQA page",
  "description": "",
  "id": "demoqa-tests;testing-components-of-demoqa-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigates to \"https://demoqa.com/\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on \"HTML Contact Form\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "corresponding \"HTML Contact Form\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demoqa.com/",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.user_navigates_to_site(String)"
});
formatter.result({
  "duration": 28127952400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTML Contact Form",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 200600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTML Contact Form",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.corresponding_page_should_be_displayed(String)"
});
formatter.result({
  "duration": 152400,
  "status": "passed"
});
});