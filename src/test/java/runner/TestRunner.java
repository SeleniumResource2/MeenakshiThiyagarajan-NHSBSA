package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"D:\\SeleniumProjects\\NHSBSA\\src\\test\\resources\\features\\NHSFeatures.feature"},
		glue={"steps"},
		plugin= {
				"pretty", "html:reports/myreport.html"			
		},
		dryRun=false,
		monochrome=true
		//tags="@sanity"
		)

public class TestRunner {
	
	

}
