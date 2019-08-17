package com.tajawal.test.framework.helpers;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.io.StringWriter;
import java.util.Map;

import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;
import static  io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class SendRequest {
	public static Response sendGetRequest(String url, Map<String, String> headers,Map<String,String> query,Map<String,String> cookies) {
		Response rsp = null ;
		try {
			
			File file = new File(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"request.txt");
			file.getParentFile().mkdirs();
			PrintStream pwRequest = new PrintStream(new FileOutputStream(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"request.txt"));
			PrintStream pwResponse = new PrintStream(new FileOutputStream(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"response.txt"));
			rsp = RestAssured.given().queryParams(query).cookies(cookies).filter(new RequestLoggingFilter(pwRequest)).filter(new ResponseLoggingFilter(pwResponse)).log().all().headers(headers).relaxedHTTPSValidation().when().get(url);
			pwRequest.close();
			pwResponse.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return rsp;
	}

	public static Response sendPostRequest(String url, Map<String, String> headers, String body, Map<String,String> cookies) {
		Response rsp = null ;
		try {
			
			File file = new File(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"request.txt");
			file.getParentFile().mkdirs();
			PrintStream pwRequest = new PrintStream(new FileOutputStream(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"request.txt"));
			PrintStream pwResponse = new PrintStream(new FileOutputStream(System.getProperty("user.dir")+"/target/logs/"+BaseHelper.scenarioId+"response.txt"));
			rsp = RestAssured.given().cookies(cookies).filter(new RequestLoggingFilter(pwRequest)).filter(new ResponseLoggingFilter(pwResponse)).log().all().headers(headers).body(body).relaxedHTTPSValidation().when()
					.post(url);
			pwRequest.close();
			pwResponse.close();			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return rsp;
	}
	
	public static void verifyServiceSchema(Response response,String schemaPath) {
		response.then().assertThat().body(matchesJsonSchemaInClasspath(schemaPath));

		
	}

}
