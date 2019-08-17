package com.tajawal.test.pages.posthotelsearch;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.tajawal.test.framework.helpers.BaseHelper;
import com.tajawal.test.framework.helpers.DateHelper;
import com.tajawal.test.steps.tajawalservicesimpl.HotelSearchSteps;

import io.restassured.response.Response;

public class PostHotelSearchImplemenation {
	public JSONObject createDatesRequestObject(String checkinDate, String checkoutDate) {

		JSONObject dates = new JSONObject();
		String format = "dd-MM-yyyy";
		String checkin = checkinDate.isEmpty() ? "14" : checkinDate;
		String checkout = checkoutDate.isEmpty() ? "15" : checkoutDate;
		String checkinDateModified = DateHelper.getModifiedDate(Integer.parseInt(checkin), format);
		String checkoutDateModified = DateHelper.getModifiedDate(Integer.parseInt(checkout), format);
		if(!checkinDate.isEmpty())
			dates.put("checkin", checkinDateModified);
		if(!checkoutDate.isEmpty())
			dates.put("checkout", checkoutDateModified);
		HotelSearchSteps.query = HotelSearchSteps.query + checkinDateModified + "/" + checkoutDateModified;
		return dates;
	}

	public void addRoomWithPassenger(JSONArray roomArray, String pax) {
		JSONObject room = new JSONObject();
		roomArray.add(room);
		JSONArray guestArray = new JSONArray();
		room.put("guest", guestArray);
		String[] paxList = pax.split("-");
		HotelSearchSteps.query = HotelSearchSteps.query + "/";
		for (String paxData : paxList) {
			String[] paxDataDetail = paxData.split("_");
			if (paxDataDetail[1].equals("ADT")) {
				HotelSearchSteps.query = HotelSearchSteps.query + paxDataDetail[0] + "_adult";
			} else if (paxDataDetail[1].contains("CHD")) {
				HotelSearchSteps.query = HotelSearchSteps.query + "," + paxDataDetail[0] + "_child";
				HotelSearchSteps.query = HotelSearchSteps.query + "," + paxDataDetail[1].split("@")[1] + "_age";
			}
			for (int i = Integer.parseInt(paxDataDetail[0]); i > 0; i--) {
				if (paxDataDetail[1].equals("ADT")) {
					JSONObject adt = new JSONObject();
					adt.put("type", "ADT");
					guestArray.add(adt);
				}
				if (paxDataDetail[1].contains("CHD")) {
					JSONObject chd = new JSONObject();
					chd.put("type", "CHD");
					chd.put("age", Integer.parseInt(paxDataDetail[1].split("@")[1]));
					guestArray.add(chd);

				}
			}
		}

	}

	public void verifyHotelSearchResponse(Response response, String placeId) {
		HashMap<String, String> hotelSearch = (HashMap<String, String>) response.jsonPath().get();
		verifyHotelType(hotelSearch.get("type"));
		verifyQuery(hotelSearch.get("query"));
		verifyqueryParametersObjAndqueryParameters(response.jsonPath().get("queryParametersObj"),
				hotelSearch.get("queryParameters"), placeId,response.jsonPath().get("queryParametersObj.types"));
	}

	public void verifyHotelType(String type) {
		Assert.assertEquals("Type is not hotel", "hotel", type);
	}

	public void verifyQuery(String query) {
		Assert.assertEquals("query data  is not correct", HotelSearchSteps.query.toLowerCase(), query);
	}

	public void verifyqueryParametersObjAndqueryParameters(HashMap<String, String> queryParametersObj,
			String queryParameters, String placeId,ArrayList<String> types) {
		Assert.assertEquals("sortBy value is not matching", "distanceScore", queryParametersObj.get("sortBy"));
		Assert.assertEquals("placeid is no matching", placeId, queryParametersObj.get("placeId"));
		String expectedqQeryParameters = "sortBy=" + queryParametersObj.get("sortBy") + "&isGeo="
				+ String.valueOf(queryParametersObj.get("isGeo")) + "&hId=" + queryParametersObj.get("hId") + "&placeId=" + placeId
				+ "&types=" +(types.size()>0?types.toString():"");
		System.out.println(expectedqQeryParameters);
		Assert.assertEquals("queryParameters is not matching", expectedqQeryParameters, queryParameters);

	}
	public boolean verifyHotelSearchServiceRequestAndCookies(Response response) {
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
	public boolean verifyDestinationMissingErrorResponse(Response response) {
		boolean result = true;
		result = result && (Integer)response.jsonPath().get("status")==400;
		String title= response.jsonPath().get("title");
		result = result && title.contains("Bad Request");
		result = result && ((ArrayList<String>)response.jsonPath().get("detail.destination")).get(0).equals("The destination field is required.");
		String type = response.jsonPath().get("type");
		result = result && type.equals("https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html");
		return result;
	}
	public boolean verifyInvalidDatesErrorResponse(Response response) {
		boolean result = true;
		result = result && (Integer)response.jsonPath().get("status")==400;
		String title= response.jsonPath().get("title");
		result = result && title.contains("Bad Request");
		HashMap<String,ArrayList<String>> detail = response.jsonPath().get("detail");
		detail.get("dates.checkout").get(0);
		result = result && detail.get("dates.checkout").get(0).equals("The dates.checkout must be a date after dates.checkin.");
		String type = response.jsonPath().get("type");
		result = result && type.equals("https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html");
		return result;
	}

}
