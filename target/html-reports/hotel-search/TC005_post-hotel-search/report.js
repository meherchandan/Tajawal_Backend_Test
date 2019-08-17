$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/hotel-search.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Post Hotel search service",
  "description": "",
  "id": "verify-post-hotel-search-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Verify hotel service response when invalid dates are added to the request",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-invalid-dates-are-added-to-the-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@TC005_hotel-search"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "create the request with date from next \"\u003ccheckin\u003e\" days to \"\u003ccheckout\u003e\" days and destination \"\u003cdestination\u003e\" and placeid \"\u003cplaceid\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "add room with \"\u003cguest1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Verify the error response for invalid dates",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-invalid-dates-are-added-to-the-request;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "description",
        "checkin",
        "checkout",
        "destination",
        "placeid",
        "guest1"
      ],
      "line": 75,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-invalid-dates-are-added-to-the-request;;1"
    },
    {
      "cells": [
        "TC005_hotel-search_TD1",
        "Data where checkout date is prior to checkin",
        "7",
        "5",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3"
      ],
      "line": 76,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-invalid-dates-are-added-to-the-request;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 76,
  "name": "Verify hotel service response when invalid dates are added to the request",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-invalid-dates-are-added-to-the-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@TC005_hotel-search"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "create the request with date from next \"7\" days to \"5\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC005_hotel-search_TD1\"",
  "matchedColumns": [
    0,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Verify the error response for invalid dates",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 40
    },
    {
      "val": "5",
      "offset": 52
    },
    {
      "val": "Paris",
      "offset": 77
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 97
    },
    {
      "val": "TC005_hotel-search_TD1",
      "offset": 140
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 2062563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2_ADT-1_CHD@3",
      "offset": 15
    }
  ],
  "location": "HotelSearchSteps.add_room_with(String)"
});
formatter.result({
  "duration": 68959,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 471912857,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code_for_bad_Request()"
});
formatter.result({
  "duration": 46433,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_error_response_for_invalid_dates()"
});
formatter.result({
  "duration": 36486623,
  "status": "passed"
});
});