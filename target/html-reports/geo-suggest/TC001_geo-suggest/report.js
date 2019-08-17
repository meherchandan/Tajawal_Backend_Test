$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/geo-suggest.feature");
formatter.feature({
  "line": 1,
  "name": "Verify response for geo-suggest services",
  "description": "",
  "id": "verify-response-for-geo-suggest-services",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I want to verify success header and response with correct cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Form the request for geo-suggest service with query \"\u003cquery\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Send the geo-suggest service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify the geo-suggest service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Send the geo-suggest service request with secodary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in response",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "query",
        "Description"
      ],
      "line": 18,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;1"
    },
    {
      "cells": [
        "TC001_geo-suggest_TD1",
        "Paris",
        "test data for valid data"
      ],
      "line": 19,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;2"
    },
    {
      "cells": [
        "TC001_geo-suggest_TD2",
        "$#%$*",
        "test data for empty hotel and location"
      ],
      "line": 20,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;3"
    },
    {
      "cells": [
        "TC001_geo-suggest_TD3",
        "$#3421",
        "failed test case data --thumbnail missing"
      ],
      "line": 21,
      "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "I want to verify success header and response with correct cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Form the request for geo-suggest service with query \"Paris\" for scenario \"TC001_geo-suggest_TD1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Send the geo-suggest service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify the geo-suggest service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Send the geo-suggest service request with secodary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in response",
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
  "duration": 223565251,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_without_cookies()"
});
formatter.result({
  "duration": 2761564267,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_service_status_code()"
});
formatter.result({
  "duration": 1589539,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_chema()"
});
formatter.result({
  "duration": 646151695,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 2568244,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_data()"
});
formatter.result({
  "duration": 419469318,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 832146106,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_header()"
});
formatter.result({
  "duration": 1326379,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 10079449,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_secodary_cookies()"
});
formatter.result({
  "duration": 791072385,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 3160349,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_no_cookies_available_in_response()"
});
formatter.result({
  "duration": 46509,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I want to verify success header and response with correct cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Form the request for geo-suggest service with query \"$#%$*\" for scenario \"TC001_geo-suggest_TD2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Send the geo-suggest service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify the geo-suggest service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Send the geo-suggest service request with secodary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$#%$*",
      "offset": 53
    },
    {
      "val": "TC001_geo-suggest_TD2",
      "offset": 74
    }
  ],
  "location": "GeoSuggestSteps.form_the_request_for_geo_suggest_service_with_query_for_scenario(String,String)"
});
formatter.result({
  "duration": 152932,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_without_cookies()"
});
formatter.result({
  "duration": 1246036322,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_service_status_code()"
});
formatter.result({
  "duration": 44002,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_chema()"
});
formatter.result({
  "duration": 7097779,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 782420,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_data()"
});
formatter.result({
  "duration": 16522938,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 1581019399,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_header()"
});
formatter.result({
  "duration": 619775,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 455737,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_secodary_cookies()"
});
formatter.result({
  "duration": 965314429,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 565516,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_no_cookies_available_in_response()"
});
formatter.result({
  "duration": 36953,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to verify success header and response with correct cookies for geo-suggest service",
  "description": "",
  "id": "verify-response-for-geo-suggest-services;i-want-to-verify-success-header-and-response-with-correct-cookies-for-geo-suggest-service;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_geo-suggest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Form the request for geo-suggest service with query \"$#3421\" for scenario \"TC001_geo-suggest_TD3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Send the geo-suggest service request without cookies",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify the service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify the geo-suggest service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify the geo-suggest service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the geo-suggest service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Send the geo-suggest service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify the geo-suggest service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Send the geo-suggest service request with secodary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "compare the geo-suggest service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "$#3421",
      "offset": 53
    },
    {
      "val": "TC001_geo-suggest_TD3",
      "offset": 75
    }
  ],
  "location": "GeoSuggestSteps.form_the_request_for_geo_suggest_service_with_query_for_scenario(String,String)"
});
formatter.result({
  "duration": 99048,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_without_cookies()"
});
formatter.result({
  "duration": 422137026,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_service_status_code()"
});
formatter.result({
  "duration": 60637,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_chema()"
});
formatter.result({
  "duration": 26392924,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 402396,
  "status": "passed"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_data()"
});
formatter.result({
  "duration": 30577224,
  "error_message": "java.lang.AssertionError: Hotel thumbnail is not valid URL for hotel name Maui Vista 3421 Condo by RedAwning\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat com.tajawal.test.pages.getgeoservice.getGeoServiceImplementation.verifyHotelthumbnail_url(getGeoServiceImplementation.java:97)\n\tat com.tajawal.test.pages.getgeoservice.getGeoServiceImplementation.verifyHotelData(getGeoServiceImplementation.java:49)\n\tat com.tajawal.test.steps.tajawalservicesimpl.GeoSuggestSteps.verify_the_geo_suggest_service_response_data(GeoSuggestSteps.java:79)\n\tat ✽.Then Verify the geo-suggest service response data(src/test/resources/features/services/geo-suggest.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_primary_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_the_geo_suggest_service_response_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoSuggestSteps.send_the_geo_suggest_service_request_with_secodary_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoSuggestSteps.compare_the_geo_suggest_service_response_data_with_primary_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoSuggestSteps.verify_no_cookies_available_in_response()"
});
formatter.result({
  "status": "skipped"
});
});