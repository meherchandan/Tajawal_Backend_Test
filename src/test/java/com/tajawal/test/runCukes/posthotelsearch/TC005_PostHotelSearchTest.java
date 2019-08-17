package com.tajawal.test.runCukes.posthotelsearch;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/html-reports/hotel-search/TC005_post-hotel-search",
				"json:target/cucumber-report/hotel-search/TC005_post-hotel-search.json"},
		features = {"src/test/resources/features/services/hotel-search.feature"},
		glue = {"com.tajawal.test.steps"},
		tags = {"@TC005_hotel-search"},
		monochrome = true)


public class TC005_PostHotelSearchTest {

}

