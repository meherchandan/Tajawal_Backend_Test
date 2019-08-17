package com.tajawal.test.steps.tajawalservicesimpl;

import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Assert;

import com.tajawal.test.framework.helpers.BaseHelper;
import com.tajawal.test.framework.helpers.PropertyHelper;
import com.tajawal.test.framework.helpers.SendRequest;
import com.tajawal.test.pages.posthotelsearch.PostHotelSearchImplemenation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.http.Header;
import io.restassured.response.Response;

public class HotelSearchSteps {
	String baseUrl;
	JSONObject requestBody = new JSONObject();
	JSONArray rooms = new JSONArray();
	Response response;
	String primaryResponse;
	Map<String, String> serviceCookies = new HashMap<String, String>();
	Map<String, String> headers = new HashMap<String, String>();
	public static String query = "";
	public String placeId;
	PostHotelSearchImplemenation hotelSearch = new PostHotelSearchImplemenation();
	
	@Given("^create the request with date from next \"([^\"]*)\" days to \"([^\"]*)\" days and destination \"([^\"]*)\" and placeid \"([^\"]*)\" for scenario \"([^\"]*)\"$")
	public void create_the_request_with_date_from_next_days_to_days_and_destination_and_placeid_for_scenario(String checkin, String checkout,
			String destination, String placeId, String scenarioId) throws Throwable {
		baseUrl = PropertyHelper.getProperty("hotel-search-service");
		BaseHelper.scenarioId = scenarioId+"_1";
		query="";
		query = query + destination + "/";
		this.placeId = placeId;
		requestBody.put("dates", hotelSearch.createDatesRequestObject(checkin, checkout));
		requestBody.put("destination", destination);
		requestBody.put("placeId", placeId);
		requestBody.put("room", rooms);

	}

	@Given("^add room with \"([^\"]*)\"$")
	public void add_room_with(String pax) throws Throwable {
		if(!pax.isEmpty())
			hotelSearch.addRoomWithPassenger(rooms, pax);
		else
			query = query + "/2_adult";
	}

	@Given("^Send the hotel-search request$")
	public void send_the_hotel_search_request() throws Throwable {
		headers.put("Content-Type", "application/json");
		response = SendRequest.sendPostRequest(baseUrl, headers, requestBody.toJSONString(), serviceCookies);
		serviceCookies.putAll(response.getCookies());
		BaseHelper.writeResponseData(response.getBody().asString(), "hotel-search/response1.json");
	}

	@Given("^Send the hotel-search request without content-type header$")
	public void send_the_hotel_search_request_without_content_type_header() throws Throwable {
		response = SendRequest.sendPostRequest(baseUrl, headers, requestBody.toJSONString(), serviceCookies);
		serviceCookies.putAll(response.getCookies());
		BaseHelper.writeResponseData(response.getBody().asString(), "hotel-search/response1.json");
	}
	
	@Then("^Verify the hotel-search service status code$")
	public void verify_the_hotel_search_service_status_code() throws Throwable {
		Assert.assertEquals("Status code is not matching", 200, response.getStatusCode());
		Assert.assertEquals("Status line is not matching", "HTTP/1.1 200 OK", response.getStatusLine());
	}

	@Then("^Verify the hotel-search service response schema$")
	public void verify_the_hotel_search_service_response_schema() throws Throwable {
		 SendRequest.verifyServiceSchema(response, "hotel-search.json");
	}

	@Then("^Verify the hotel-search service response headers and primary cookies$")
	public void verify_the_hotel_search_service_response_headers_and_primary_cookies() throws Throwable {
		Assert.assertTrue("Cookies data is not valid", hotelSearch.verifyHotelSearchServiceRequestAndCookies(response));
		Assert.assertEquals("content type header is not matching", "application/json",
				response.getHeader("Content-Type"));
		for (Header header : response.getHeaders()) {
			System.out.println(header.getName() + "-" + header.getValue());
		}
	}

	@Then("^Verify the hotel-search service response data$")
	public void verify_the_hotel_search_service_response_data() throws Throwable {
		hotelSearch.verifyHotelSearchResponse(response, placeId);
	}

	@Given("^Send the hotel-search service request with primary cookies$")
	public void send_the_hotel_search_service_request_with_primary_cookies() throws Throwable {
		System.out.println("cookies" + serviceCookies.size());
		BaseHelper.scenarioId = BaseHelper.scenarioId.replace("_1", "_2");
		response = SendRequest.sendPostRequest(baseUrl, headers, requestBody.toJSONString(), serviceCookies);
		BaseHelper.writeResponseData(response.getBody().asString(), "hotel-search/response2.json");
	}

	@Then("^Verify the hotel-search service response header$")
	public void verify_the_hotel_search_service_response_header() throws Throwable {
		for (Header header : response.getHeaders()) {
			System.out.println(header.getName() + "-" + header.getValue());
		}
		Assert.assertTrue("Session not created as cookies are available", response.getCookies().size() < 6);
	}

	@Then("^compare the hotel-search service response data with primary response$")
	public void compare_the_hotel_search_service_response_data_with_primary_response() throws Throwable {
		JSONParser jsonParser = new JSONParser();
		JSONObject obj = new JSONObject();
		try (FileReader reader = new FileReader("target/hotel-search/response1.json")) {
			// Read JSON file
			Object data = jsonParser.parse(reader);
			obj = (JSONObject) data;

		} catch (Exception e) {
			e.printStackTrace();
		}
		BaseHelper.compareJsonData(response.getBody().asString(), obj.toJSONString());
	}
	@Then("^Verify no cookies available in hotel-search response$")
	public void verify_no_cookies_available_in_hotel_search_response() throws Throwable {
		 Assert.assertEquals("Session not created as cookies are available",0,response.getCookies().size());
	}
	@Then("^Verify the hotel-search service status code for bad Request$")
	public void verify_the_hotel_search_service_status_code_for_bad_Request() throws Throwable {
		Assert.assertEquals("Status code is not matching", 400, response.getStatusCode());
		Assert.assertEquals("Status line is not matching", "HTTP/1.1 400 Bad Request", response.getStatusLine());
	}

	@Then("^Verify the error response for destination missing$")
	public void verify_the_error_response_for_destination_missing() throws Throwable {
		Assert.assertTrue("Error response is not matching",hotelSearch.verifyDestinationMissingErrorResponse(response));
	}

	@Then("^Verify the error response for header missing$")
	public void verify_the_error_response_for_header_missing() throws Throwable {
		Assert.assertTrue("Error response is not matching",hotelSearch.verifyDestinationMissingErrorResponse(response));
	}
	@Then("^Verify the error response for invalid dates$")
	public void verify_the_error_response_for_invalid_dates() throws Throwable {
		Assert.assertTrue("Error response is not matching",hotelSearch.verifyInvalidDatesErrorResponse(response));
	 
	}
}
