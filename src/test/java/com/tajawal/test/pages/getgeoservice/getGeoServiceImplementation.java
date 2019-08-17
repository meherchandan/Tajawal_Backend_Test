package com.tajawal.test.pages.getgeoservice;

import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.tajawal.test.framework.helpers.BaseHelper;

import io.restassured.http.Cookie;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.internal.UriValidator;
import io.restassured.response.Response;

public class getGeoServiceImplementation {

	public boolean verifyGeoServiceRequestAndCookies(Response response) {
		boolean result = true;
		Map<String, String> cookiesList = response.getCookies();
		result = result && cookiesList.containsKey("visid_incap_1982617");
		result = result && cookiesList.containsKey("incap_ses_774_1982617");
		result = result && cookiesList.containsKey("nlbi_1982617");
		result = result && cookiesList.containsKey("___utmvmVzutFapB");
		result = result && cookiesList.containsKey("___utmvaVzutFapB");
		result = result && cookiesList.containsKey("___utmvbVzutFapB");
		result = result && BaseHelper.verifyCookiesDomain(response.getDetailedCookie("visid_incap_1982617"));
		result = result && BaseHelper.verifyCookiesDomain(response.getDetailedCookie("incap_ses_774_1982617"));
		result = result && BaseHelper.verifyCookiesDomain(response.getDetailedCookie("nlbi_1982617"));
		result = result && BaseHelper.verifyCookiesAge(response.getDetailedCookie("___utmvmVzutFapB"));
		result = result && BaseHelper.verifyCookiesAge(response.getDetailedCookie("___utmvaVzutFapB"));
		result = result && BaseHelper.verifyCookiesAge(response.getDetailedCookie("___utmvbVzutFapB"));
		return result;

	}
	
	
	public void verifyHotelData(Response response) {
		ArrayList<HashMap<String, String>> hotels = (ArrayList<HashMap<String, String>>) response.jsonPath()
				.get("hotels");
		for (HashMap<String, String> hotel : hotels) {
			verifyHotelId(hotel);
			verifyHotelName(hotel);
			verifyHotelCity(hotel);
			verifyHotelcountry(hotel);
			verifyHotelthumbnail_url(hotel);
			verifyDisplayType(hotel);
			verifyLattituteAndLongitute(hotel);
		}
	}

	public void verifyLocationData(Response response) {
		ArrayList<HashMap<String, String>> locations = (ArrayList<HashMap<String, String>>) response.jsonPath()
				.get("locations");
		for (HashMap<String, String> location : locations) {
			verifyLocationName(location);
			verifyLocationPlaceId(location);
			verifyLocationCity(location);
			verifyLocationCountry(location);
			verifyLocationSource(location);
			verifyDisplayTypeForLocation(location);
		}
	}

	public void verifyHotelId(HashMap<String, String> hotel) {
		try {
			Long hotelId = Long.parseLong(String.valueOf(hotel.get("hotelId")));
			Assert.assertTrue("Hotel Id is 0", hotelId > 0);

		} catch (Exception e) {
			e.printStackTrace();
			Assert.assertTrue("Hotel Is not in correct format", false);
		}

	}

	public void verifyHotelName(HashMap<String, String> hotel) {
		String hotelName = hotel.get("name");
		Assert.assertTrue("Hotel Name is missing for Hotel name " + hotel.get("name"), BaseHelper.isNotNullOrEmpty(hotelName));
	}

	public void verifyHotelCity(HashMap<String, String> hotel) {
		String hotelCity = hotel.get("city");
		Assert.assertTrue("Hotel city is missing for Hotel name " + hotel.get("name"), BaseHelper.isNotNullOrEmpty(hotelCity));
	}

	public void verifyHotelcountry(HashMap<String, String> hotel) {
		String hotelCountry = hotel.get("country");
		Assert.assertTrue("Hotel country is missing for Hotel name " + hotel.get("name"), BaseHelper.isNotNullOrEmpty(hotelCountry));
	}

	public void verifyHotelthumbnail_url(HashMap<String, String> hotel) {
		String hotelThumbnail = hotel.get("thumbnail_url");
		Assert.assertTrue("Hotel thumbnail is not valid URL for hotel name " + hotel.get("name"),
				BaseHelper.IsValidURL(hotelThumbnail));
	}

	public void verifyDisplayType(HashMap<String, String> hotel) {
		String displayType = hotel.get("displayType");
		Assert.assertEquals("Hotel Display Type is incorrect for hotel name " + hotel.get("name"), displayType,
				"Hotel");
	}

	public void verifyLattituteAndLongitute(HashMap<String, String> hotel) {

		Assert.assertNotNull("latitude is null for Hotel name " + hotel.get("name"), hotel.get("longitude"));
		Assert.assertNotNull("longitude is null for Hotel name " + hotel.get("name"),
				hotel.get("longitude"));	
	}

	public void verifyLocationName(HashMap<String, String> location) {
		String locationName = location.get("name");
		Assert.assertTrue("Location name is missing for placeId" + location.get("placeId"), BaseHelper.isNotNullOrEmpty(locationName));
	}

	public void verifyLocationPlaceId(HashMap<String, String> location) {
		String placeId = location.get("placeId");
		Assert.assertTrue("Location placeId is missing ", BaseHelper.isNotNullOrEmpty(placeId));
	}

	public void verifyLocationSource(HashMap<String, String> location) {
		String source = location.get("source");
		Assert.assertTrue("Location placeId is missing for placeid " + location.get("placeId"), BaseHelper.isNotNullOrEmpty(source));
	}
	
	

	public void verifyLocationCountry(HashMap<String, String> location) {
		String country = location.get("country");
		Assert.assertTrue("Location country is missing for placeid " + location.get("placeId"), BaseHelper.isNotNullOrEmpty(country));
	}

	public void verifyLocationCity(HashMap<String, String> location) {
		String city = location.get("city");		
		Assert.assertTrue("Location city is missing for placeid " + location.get("placeId"), BaseHelper.isNotNullOrEmpty(city));
	}

	public void verifyDisplayTypeForLocation(HashMap<String, String> location) {
		String displayType = location.get("displayType");
		Assert.assertEquals("Location Display Type is incorrect for placeId " + location.get("placeId"), displayType,
				"Location");
	}

}
