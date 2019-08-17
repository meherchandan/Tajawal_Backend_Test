Feature: Verify response for geo-suggest services

@TC001_geo-suggest
Scenario Outline: I want to verify success header and response with correct cookies for geo-suggest service
Given Form the request for geo-suggest service with query "<query>" for scenario "<scenarioName>"
And Send the geo-suggest service request without cookies
Then Verify the service status code
Then Verify the geo-suggest service response schema
Then Verify the geo-suggest service response headers and primary cookies
Then Verify the geo-suggest service response data
Given Send the geo-suggest service request with primary cookies
Then Verify the geo-suggest service response header
Then compare the geo-suggest service response data with primary response
Given Send the geo-suggest service request with secodary cookies
Then compare the geo-suggest service response data with primary response
Then Verify no cookies available in response
Examples:
|scenarioName          |query|Description|
|TC001_geo-suggest_TD1|Paris|test data for valid data|
|TC001_geo-suggest_TD2|$#%$*|test data for empty hotel and location|
|TC001_geo-suggest_TD3|$#3421| failed test case data --thumbnail missing|

@TC002_geo-suggest
Scenario Outline: I want to verify header and response with wrong cookies for geo-suggest service
Given Form the request for geo-suggest service with query "<query>" for scenario "<scenarioName>"
And Send the geo-suggest service request without cookies
Then Verify the service status code
Then Verify the geo-suggest service response schema
Then Verify the geo-suggest service response headers and primary cookies
Then Verify the geo-suggest service response data
Given Send the geo-suggest service request with wrong cookies
Then Verify all cookies are resent
Then compare the geo-suggest service response data with primary response

Examples:
|scenarioName          |query|Description|
|TC001_geo-suggest_TD1|Paris|test data for valid data|
