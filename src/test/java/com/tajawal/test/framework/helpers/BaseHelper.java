package com.tajawal.test.framework.helpers;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.json.JSONException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompare;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.skyscreamer.jsonassert.JSONCompareResult;

import io.restassured.http.Cookie;
import io.restassured.internal.UriValidator;

public class BaseHelper {
	public static String scenarioId = "";
	public static boolean isNotNullOrEmpty(String value){
		return !value.isEmpty()&&!value.equals(null);
	}
	public static boolean IsValidURL(String url) {
		return UriValidator.isUri(url);
	}
	
	public static void writeResponseData(String responseData,String fileName){
		JSONParser jsonParser = new JSONParser();
		 JSONObject obj = new JSONObject();
		 Object data;
		try {
			data = jsonParser.parse(responseData);
		
		  obj = (JSONObject) data;
		  File filetemp = new File(System.getProperty("user.dir")+"/target/"+fileName);
		  filetemp.getParentFile().mkdirs();
		FileWriter file = new FileWriter( System.getProperty("user.dir")+"/target/"+fileName);
			file.write(obj.toJSONString());
			System.out.println("Successfully Copied JSON Object to File...");
			System.out.println("\nJSON Object: " + obj);
			file.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void compareJsonData(String obj1, String obj2) {
		try {
			JSONAssert.assertEquals(obj1, obj2, false);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	public static boolean verifyCookiesDomain(Cookie cookie) {
		return cookie.getDomain().contains("tajawal.ae");
		
	}
	public static boolean verifyCookiesAge(Cookie cookie) {
		return cookie.getMaxAge() == 900;
		
	}
	
	public static void writeDataToFile(String data,String fileName) {
		File filetemp = new File(System.getProperty("user.dir")+"/target/"+fileName);
		  filetemp.getParentFile().mkdirs();
		FileWriter file;
		try {
			file = new FileWriter( fileName);
			file.write(data);		
			file.close();	
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}
	

}
