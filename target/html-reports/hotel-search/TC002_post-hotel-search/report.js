$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/hotel-search.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Post Hotel search service",
  "description": "",
  "id": "verify-post-hotel-search-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify hotel service response when destination is missing",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-destination-is-missing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TC002_hotel-search"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "create the request with date from next \"\u003ccheckin\u003e\" days to \"\u003ccheckout\u003e\" days and destination \"\u003cdestination\u003e\" and placeid \"\u003cplaceid\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "add room with \"\u003cguest1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "add room with \"\u003cguest2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify the error response for destination missing",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-destination-is-missing;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "checkin",
        "checkout",
        "destination",
        "placeid",
        "guest1",
        "guest2"
      ],
      "line": 32,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-destination-is-missing;;1"
    },
    {
      "cells": [
        "TC002_hotel-search_TD1",
        "7",
        "14",
        "",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 33,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-destination-is-missing;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Verify hotel service response when destination is missing",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-destination-is-missing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TC002_hotel-search"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "create the request with date from next \"7\" days to \"14\" days and destination \"\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC002_hotel-search_TD1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify the error response for destination missing",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 40
    },
    {
      "val": "14",
      "offset": 52
    },
    {
      "val": "",
      "offset": 78
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 93
    },
    {
      "val": "TC002_hotel-search_TD1",
      "offset": 136
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 1729580,
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
  "duration": 80262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3_ADT",
      "offset": 15
    }
  ],
  "location": "HotelSearchSteps.add_room_with(String)"
});
formatter.result({
  "duration": 47191,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 461557009,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code_for_bad_Request()"
});
formatter.result({
  "duration": 36117,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_error_response_for_destination_missing()"
});
formatter.result({
  "duration": 141954715,
  "status": "passed"
});
});