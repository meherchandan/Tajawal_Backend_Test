Feature: Verify Post Hotel search service

@TC001_hotel-search
Scenario Outline: Verify hotel service response with valid request data
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And add room with "<guest2>"
And Send the hotel-search request
Then Verify the hotel-search service status code
Then Verify the hotel-search service response schema
Then Verify the hotel-search service response headers and primary cookies
Then Verify the hotel-search service response data
Given Send the hotel-search service request with primary cookies
Then Verify the hotel-search service response header
Then compare the hotel-search service response data with primary response
Then Verify no cookies available in hotel-search response

Examples:
|scenarioName          |checkin|checkout|destination|placeid                      |guest1          |   guest2|
|TC001_hotel-search_TD1|7      |14      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ|    2_ADT-1_CHD@3| 3_ADT|  

@TC002_hotel-search
Scenario Outline: Verify hotel service response when destination is missing
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And add room with "<guest2>"
And Send the hotel-search request
Then Verify the hotel-search service status code for bad Request
Then Verify the error response for destination missing

Examples:
|scenarioName         |checkin|checkout|destination|placeid                      |guest1          |   guest2|
|TC002_hotel-search_TD1|7      |14      |      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ|    2_ADT-1_CHD@3| 3_ADT|  

@TC003_hotel-search
Scenario Outline: Verify hotel service response when header content type is missing
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And add room with "<guest2>"
And Send the hotel-search request without content-type header
Then Verify the hotel-search service status code for bad Request
Then Verify the error response for header missing

Examples:
|scenarioName          |checkin|checkout|destination|placeid                      |guest1          |   guest2|
|TC003_hotel-search_TD1|7      |14      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ      |    2_ADT-1_CHD@3| 3_ADT|  

@TC004_hotel-search
Scenario Outline: Verify hotel service response when empty room is added to the request
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And Send the hotel-search request
Then Verify the hotel-search service status code
Then Verify the hotel-search service response schema
Then Verify the hotel-search service response headers and primary cookies
Then Verify the hotel-search service response data
Given Send the hotel-search service request with primary cookies
Then Verify the hotel-search service response header
Then compare the hotel-search service response data with primary response
Then Verify no cookies available in hotel-search response

Examples:
|scenarioName          |checkin|checkout|destination|placeid                      |guest1          | 
|TC004_hotel-search_TD1|7      |14      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ      |    |  

@TC005_hotel-search
Scenario Outline: Verify hotel service response when invalid dates are added to the request
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And Send the hotel-search request
Then Verify the hotel-search service status code for bad Request
Then Verify the error response for invalid dates

Examples:
|scenarioName          |description                                 |checkin|checkout|destination|placeid                      |guest1          | 
|TC005_hotel-search_TD1|Data where checkout date is prior to checkin|7      |5      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ  |2_ADT-1_CHD@3   |   


@TC006_hotel-search
Scenario Outline: Verify hotel service response when checkin checkout dates are not provided
Given create the request with date from next "<checkin>" days to "<checkout>" days and destination "<destination>" and placeid "<placeid>" for scenario "<scenarioName>"
And add room with "<guest1>"
And add room with "<guest2>"
And Send the hotel-search request
Then Verify the hotel-search service status code
Then Verify the hotel-search service response schema
Then Verify the hotel-search service response headers and primary cookies
Then Verify the hotel-search service response data
Given Send the hotel-search service request with primary cookies
Then Verify the hotel-search service response header
Then compare the hotel-search service response data with primary response
Then Verify no cookies available in hotel-search response

Examples:
|scenarioName          |description          |checkin|checkout|destination|placeid                      |guest1          |   guest2|
|TC006_hotel-search_TD1|checkout date missing|7      |      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ|    2_ADT-1_CHD@1| 3_ADT|  
|TC006_hotel-search_TD2|checkin date missing|        | 7    |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ|    2_ADT-1_CHD@2| 1_ADT|  
|TC006_hotel-search_TD3|both dates missing  |        |      |Paris      | ChIJD7fiBh9u5kcRYJSMaMOCCwQ|    2_ADT-1_CHD@3| 2_ADT-1_CHD@2|  
