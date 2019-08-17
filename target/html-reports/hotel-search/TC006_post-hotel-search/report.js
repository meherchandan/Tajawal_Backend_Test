$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/services/hotel-search.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Post Hotel search service",
  "description": "",
  "id": "verify-post-hotel-search-service",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 80,
  "name": "Verify hotel service response when checkin checkout dates are not provided",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@TC006_hotel-search"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "create the request with date from next \"\u003ccheckin\u003e\" days to \"\u003ccheckout\u003e\" days and destination \"\u003cdestination\u003e\" and placeid \"\u003cplaceid\u003e\" for scenario \"\u003cscenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "add room with \"\u003cguest1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "add room with \"\u003cguest2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Verify no cookies available in hotel-search response",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;",
  "rows": [
    {
      "cells": [
        "scenarioName",
        "description",
        "checkin",
        "checkout",
        "destination",
        "placeid",
        "guest1",
        "guest2"
      ],
      "line": 95,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;1"
    },
    {
      "cells": [
        "TC006_hotel-search_TD1",
        "checkout date missing",
        "7",
        "",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 96,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;2"
    },
    {
      "cells": [
        "TC006_hotel-search_TD2",
        "checkin date missing",
        "",
        "7",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 97,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;3"
    },
    {
      "cells": [
        "TC006_hotel-search_TD3",
        "both dates missing",
        "",
        "",
        "Paris",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "2_ADT-1_CHD@3",
        "3_ADT"
      ],
      "line": 98,
      "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 96,
  "name": "Verify hotel service response when checkin checkout dates are not provided",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@TC006_hotel-search"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "create the request with date from next \"7\" days to \"\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC006_hotel-search_TD1\"",
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
  "line": 82,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
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
      "val": "",
      "offset": 52
    },
    {
      "val": "Paris",
      "offset": 76
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 96
    },
    {
      "val": "TC006_hotel-search_TD1",
      "offset": 139
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 1993197,
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
  "duration": 122829,
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
  "duration": 71329,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 440999334,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code()"
});
formatter.result({
  "duration": 54126,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_schema()"
});
formatter.result({
  "duration": 23953,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 372968,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_data()"
});
formatter.result({
  "duration": 15763503,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 703237992,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_header()"
});
formatter.result({
  "duration": 566106,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.compare_the_hotel_search_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 371045,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response()"
});
formatter.result({
  "duration": 245458,
  "error_message": "java.lang.AssertionError: Session not created as cookies are available expected:\u003c0\u003e but was:\u003c5\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat com.tajawal.test.steps.tajawalservicesimpl.HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response(HotelSearchSteps.java:130)\n\tat ✽.Then Verify no cookies available in hotel-search response(src/test/resources/features/services/hotel-search.feature:92)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 97,
  "name": "Verify hotel service response when checkin checkout dates are not provided",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@TC006_hotel-search"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "create the request with date from next \"\" days to \"7\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC006_hotel-search_TD2\"",
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
  "line": 82,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Verify no cookies available in hotel-search response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    },
    {
      "val": "7",
      "offset": 51
    },
    {
      "val": "Paris",
      "offset": 76
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 96
    },
    {
      "val": "TC006_hotel-search_TD2",
      "offset": 139
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 540857,
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
  "duration": 72165,
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
  "duration": 60637,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 677047203,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code()"
});
formatter.result({
  "duration": 48768,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_schema()"
});
formatter.result({
  "duration": 20603,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 331106,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_data()"
});
formatter.result({
  "duration": 15305139,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 574348768,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_header()"
});
formatter.result({
  "duration": 391368,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.compare_the_hotel_search_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 461384,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response()"
});
formatter.result({
  "duration": 325994,
  "error_message": "java.lang.AssertionError: Session not created as cookies are available expected:\u003c0\u003e but was:\u003c5\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat com.tajawal.test.steps.tajawalservicesimpl.HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response(HotelSearchSteps.java:130)\n\tat ✽.Then Verify no cookies available in hotel-search response(src/test/resources/features/services/hotel-search.feature:92)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 98,
  "name": "Verify hotel service response when checkin checkout dates are not provided",
  "description": "",
  "id": "verify-post-hotel-search-service;verify-hotel-service-response-when-checkin-checkout-dates-are-not-provided;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@TC006_hotel-search"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "create the request with date from next \"\" days to \"\" days and destination \"Paris\" and placeid \"ChIJD7fiBh9u5kcRYJSMaMOCCwQ\" for scenario \"TC006_hotel-search_TD3\"",
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
  "line": 82,
  "name": "add room with \"2_ADT-1_CHD@3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "add room with \"3_ADT\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Send the hotel-search request",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Verify the hotel-search service status code",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Verify the hotel-search service response schema",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Verify the hotel-search service response headers and primary cookies",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Verify the hotel-search service response data",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Send the hotel-search service request with primary cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Verify the hotel-search service response header",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "compare the hotel-search service response data with primary response",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Verify no cookies available in hotel-search response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "Paris",
      "offset": 75
    },
    {
      "val": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      "offset": 95
    },
    {
      "val": "TC006_hotel-search_TD3",
      "offset": 138
    }
  ],
  "location": "HotelSearchSteps.create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String,String,String,String,String)"
});
formatter.result({
  "duration": 555780,
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
  "duration": 75473,
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
  "duration": 56409,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_request()"
});
formatter.result({
  "duration": 553572094,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_status_code()"
});
formatter.result({
  "duration": 37372,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_schema()"
});
formatter.result({
  "duration": 16679,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_headers_and_primary_cookies()"
});
formatter.result({
  "duration": 387325,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_data()"
});
formatter.result({
  "duration": 14339430,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.send_the_hotel_search_service_request_with_primary_cookies()"
});
formatter.result({
  "duration": 803093591,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_the_hotel_search_service_response_header()"
});
formatter.result({
  "duration": 576689,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.compare_the_hotel_search_service_response_data_with_primary_response()"
});
formatter.result({
  "duration": 318232,
  "status": "passed"
});
formatter.match({
  "location": "HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response()"
});
formatter.result({
  "duration": 354215,
  "error_message": "java.lang.AssertionError: Session not created as cookies are available expected:\u003c0\u003e but was:\u003c5\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat com.tajawal.test.steps.tajawalservicesimpl.HotelSearchSteps.verify_no_cookies_available_in_hotel_search_response(HotelSearchSteps.java:130)\n\tat ✽.Then Verify no cookies available in hotel-search response(src/test/resources/features/services/hotel-search.feature:92)\n",
  "status": "failed"
});
});