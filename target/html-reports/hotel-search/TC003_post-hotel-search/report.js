$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/hotel-search.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Post Hotel search service",
  "description": "",
  "id": "verify-post-hotel-search-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Verify hotel service response when header content type is missing",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-header-content-type-is-missing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@TC003_hotel-search"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "create the request with date from next \"\u003ccheckin\u003e\" days to \"\u003ccheckout\u003e\" days and destination \"\u003cdestination\u003e\" and placeid \"\u003cplaceid\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "add room with \"\u003cguest1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "add room with \"\u003cguest2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Send the hotel-search request without content-type header",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify the error response for header missing",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-header-content-type-is-missing;",
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
      "line": 45,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-header-content-type-is-missing;;1"
    },
    {
      "cells": [
        "TC003_hotel-search_TD1",
        "7",
        "14",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 46,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-header-content-type-is-missing;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Verify hotel service response when header content type is missing",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-header-content-type-is-missing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@TC003_hotel-search"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "create the request with date from next \"7\" days to \"14\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC003_hotel-search_TD1\"",
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
  "line": 38,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Send the hotel-search request without content-type header",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify the hotel-search service status code for bad Request",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Verify the error response for header missing",
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
      "val": "Paris",
      "offset": 78
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 98
    },
    {
      "val": "TC003_hotel-search_TD1",
      "offset": 141
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 1941282,
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
  "duration": 114561,
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
  "duration": 48533,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request_without_content_type_header()"
});
formatter.result({
  "duration": 659176714,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code_for_bad_Request()"
});
formatter.result({
  "duration": 62496,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_error_response_for_header_missing()"
});
formatter.result({
  "duration": 29286890,
  "status": "passed"
});
});