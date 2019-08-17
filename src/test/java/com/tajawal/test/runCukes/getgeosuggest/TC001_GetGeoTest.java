package com.tajawal.test.runCukes.getgeosuggest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/html-reports/geo-suggest/TC001_geo-suggest",
				"json:target/cucumber-report/geo-suggest/TC001_geo-suggest.json"},
		features = {"src/test/resources/features/services/geo-suggest.feature"},
		glue = {"com.tajawal.test.steps"},
		tags = {"@TC001_geo-suggest"},
		monochrome = true)


public class TC001_GetGeoTest {

}

