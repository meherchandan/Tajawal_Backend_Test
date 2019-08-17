$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/geo-suggest.feature");
formatter.feature({
  "line": 1,
  "name": "Verify response for geo-suggest services",
  "description": "",
  "id": "verify-response-for-geo-suggest-services",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "I want to verify header and response with wrong cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-header-and-response-with-wrong-cookies-for-geo-suggest-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TC002_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Form the request for geo-suggest service with query \"\u003cquery\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Send the geo-suggest service request with wrong cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Verify all cookies are resent",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-header-and-response-with-wrong-cookies-for-geo-suggest-service;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "query",
        "Description"
      ],
      "line": 36,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-header-and-response-with-wrong-cookies-for-geo-suggest-service;;1"
    },
    {
      "cells": [
        "TC001_geo-suggest_TD1",
        "Paris",
        "test data for valid data"
      ],
      "line": 37,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-header-and-response-with-wrong-cookies-for-geo-suggest-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "I want to verify header and response with wrong cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-header-and-response-with-wrong-cookies-for-geo-suggest-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TC002_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Form the request for geo-suggest service with query \"Paris\" for scenario \"TC001_geo-suggest_TD1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Send the geo-suggest service request with wrong cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Verify all cookies are resent",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 53
    },
    {
      "val": "TC001_geo-suggest_TD1",
      "offset": 74
    }
  ],
  "location": "GeoSuggestSteps.form_the_request_for_geo_suggest_service_with_query_for_scenario(String,String)"
});
formatter.result({
  "duration": 4907129,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_without_cookies()"
});
formatter.result({
  "duration": 439653324,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_service_status_code()"
});
formatter.result({
  "duration": 223375,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_chema()"
});
formatter.result({
  "duration": 24413761,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 473805,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_data()"
});
formatter.result({
  "duration": 25449322,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_wrong_cookies()"
});
formatter.result({
  "duration": 493549089,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_all_cookies_are_resent()"
});
formatter.result({
  "duration": 149645,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 1396984,
  "status": "passed"
});
});