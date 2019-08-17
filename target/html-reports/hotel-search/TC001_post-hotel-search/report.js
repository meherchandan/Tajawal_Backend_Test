$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/hotel-search.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Post Hotel search service",
  "description": "",
  "id": "verify-post-hotel-search-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify hotel service response with valid request data",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-with-valid-request-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_hotel-search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "create the request with date from next \"\u003ccheckin\u003e\" days to \"\u003ccheckout\u003e\" days and destination \"\u003cdestination\u003e\" and placeid \"\u003cplaceid\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "add room with \"\u003cguest1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "add room with \"\u003cguest2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in hotel-search response",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-with-valid-request-data;",
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
      "line": 19,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-with-valid-request-data;;1"
    },
    {
      "cells": [
        "TC001_hotel-search_TD1",
        "7",
        "14",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 20,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-with-valid-request-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify hotel service response with valid request data",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-with-valid-request-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC001_hotel-search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "create the request with date from next \"7\" days to \"14\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC001_hotel-search_TD1\"",
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
  "line": 6,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify no cookies available in hotel-search response",
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
      "val": "TC001_hotel-search_TD1",
      "offset": 141
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 5756401,
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
  "duration": 123344,
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
  "duration": 61441,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 982000654,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code()"
});
formatter.result({
  "duration": 47036,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_schema()"
});
formatter.result({
  "duration": 20174,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 434098,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_data()"
});
formatter.result({
  "duration": 13808032,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 447450548,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_header()"
});
formatter.result({
  "duration": 267889,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.compare_the_hotel_search_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 342460,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response()"
});
formatter.result({
  "duration": 323386,
  "error_message": "java.lang.AssertionError: Session not created as cookies are available expected:\u003c0\u003e but was:\u003c5\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat com.tajawal.test.steps.tajawalservicesimpl.HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response(HotelSearchSteps.java:130)\n\tat ✽.Then Verify no cookies available in hotel-search response(src/test/resources/features/services/hotel-search.feature:16)\n",
  "status": "failed"
});
});