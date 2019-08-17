# Tajawal_Backend_Test
This project is created for the assignment submission for QA Backend Test for Tajawal.

### Getting Started
Clone this repo to your local machine using https://github.com/meherchandan/Tajawal_Backend_Test.git

### Prerequisites
Please setup below tools before running the test
1. Java 8 or higher
2. Maven

## Project Structure


## Running the tests

Open command prompt/Terminal
Go to the project directory
To run all the test:-
Run 
```shell
$ mvn clean test
```
To Run the test for specific feature:
```shell
$ mvn clean test
```
You can also run the specific test using your preferred IDE(Eclipse, intellij)

## Break down into end to end tests

### First Scenario:
Response validation for geo-suggest **GET** service. Below are the summarized Test case included in the tests

```
Verify response schema
Verify status code
Verify response data for null and empty data check
Verify the cookies received in the response
Verify the headers
Verify the subsequent request with cookies
Comparision the response for with and without cookies request
Verify service response when no result found
Verify response for service request with invalid cookies values
```

### Second Scenario
Response validation for hotel search result **POST** service.  As per the requirement, all required data has been parameteries and getting passed through the feature files.

Below are the summarized Test case included in the tests

```
Verify response schema
Verify status code
Verify response data for null and empty data check
Verify the cookies received
Verify the headers
Verify the subsequent request with cookies
Comparision the response for with and without cookies request
Verify the response with different dates, room and guest combinations
Verify the response error messages for bad requests
```

## Request and Response Logging

All the request and response(with headers) are getting stored in the below location:-

```
/target/logs
```

## Test Result

After running the tests, test result in HTML and JSON format can be found inside Target folder.

#### HTML reports
```
/target/html-reports/geo-suggest
/target/html-reports/hotel-search
```
#### JSON reports
```
/target/cucumber-report/geo-suggest
/target/cucumber-report/hotel-search
```

## Built With

* [Rest-Assured](http://rest-assured.io/) - Web service testing tool
* [Maven](https://maven.apache.org/) - Dependency Management
* [Java](https://www.java.com/) - Programming Language
* [Cucumber](https://cucumber.io/) - BDD framework
* [Junit](https://junit.org/) - Unit testing framework




#### Authors

* **Meher Chandan** - https://github.com/meherchandan
