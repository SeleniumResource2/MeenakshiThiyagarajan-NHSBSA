package steps;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import Utils.Driver;
import config.PropertiesFile;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.JobSearchPage;

public class commonSteps extends JobSearchPage{

	WebDriver driver;
	PropertiesFile pr = new PropertiesFile();   

	@Before
	public void before() {	
		
		driver = Driver.initializeDriver(pr.getProperties("browser"));
		
	}

	@Given("^I am a jobseeker on NHS Jobs website$")
	public void jobSeeker() throws Exception {	
		
		driver.get(pr.getProperties("url"));
		driver.manage().window().maximize();
		headerValidation(driver, "title1");
		
	}

	@When("^I put my preferences with \"([^\"]*)\" into the Search functionality$")
	public void jobTitlePreference(String jobTitle) throws Exception {
		
		simpleSearch(driver, jobTitle);	
		
	}

	@Then("^I should get a list of jobs which matches my preferences of \"([^\"]*)\"$")
	public void jobTitlePreferenceValidation(String jobtitle) throws Exception {
	    
	    try {
		WebElement ele = getNoResults(driver);				
		if(ele.getText().contains(pr.getProperties("noResTxt"))) {			
			noResultsValidation(driver);			
		}
		}catch(Exception e) {
			jobSearchListValidations(driver, jobtitle, getJobTitles(driver));
		}
	}
	

	@Then("^I should get a list of jobs which matches my filters$")
	public void jobWithfilterPreference(DataTable dataTable) throws Exception { 
		
		applyFilterAndValidate(driver, dataTable);

	}
	
	@When("^I add the reference code as \"([^\"]*)\"$")
	public void referenceCodePreference(String ref) throws Exception {
		
		 getJobRef(driver).sendKeys(ref);
		 search(driver);
		 
	}


	@When("^I add the preferences with \"([^\"]*)\", \"([^\"]*)\" into the Search functionality$")
	public void employerLocationPreference(String loc, String emp) throws Exception {
		
		locEmpPreferenceSelection(driver, loc, emp);
		
	}

	@Then("^I should get jobs with given preferences of \"([^\"]*)\" and \"([^\"]*)\"$")
	public void employerLocationPreferenceValidation(String loc, String emp) throws Exception {	
		
		jobSearchListValidations(driver, emp, getEmployers(driver));
		jobSearchListValidations(driver, loc, getLocations(driver));
		
	}

	@Then("^sort my search results with the newest Date Posted$")
	public void newestJobs() throws Exception {
		
		sortJobs(driver);
		
	}


	@After
	public void after() {
		driver.quit();      	
	}



}
