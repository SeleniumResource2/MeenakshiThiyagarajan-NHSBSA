package steps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import Utils.Driver;
import config.PropertiesFile;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.CommonPage;

public class commonSteps extends CommonPage{
	
	WebDriver driver;
	PropertiesFile pr = new PropertiesFile();    
	
	@Before
	public void before() {		
		driver = Driver.initializeDriver();
	}

	@Given("^Launch the nhs cost checker$")
	public void launch_the_nhs_cost_checker() throws Exception {	
		 
		 driver.get(pr.getProperties("url"));
		 driver.manage().window().maximize();		 
		 headerValidation(driver, "title1");		 
		 startChecker(driver);
		 
	}
	

	@Given("^I am a citizen of the UK live in \"([^\"]*)\"$")
	public void i_am_a_citizen_of_the_UK_live_in(String country) throws Exception {
		titl1Assertion(driver, "title2");
		selectOption(driver,country);

	}


	@When("^I register my gp in \"([^\"]*)\"$")
	public void i_register_my_gp_in(String place) throws Exception {		
		selectOption(driver,place);			
	}

	@When("^I register my dental practice in \"([^\"]*)\"$")
	public void i_register_my_dental_practice_in(String country) throws Exception {
		titl1Assertion(driver, "title3");
		selectOption(driver,country);

	}

	@When("^I enter my date of birth$")
	public void i_enter_my_date_of_birth() throws Exception {
		titl1Assertion(driver, "title4");
		enterDOB(driver);              
	}

	@When("^I am \"([^\"]*)\" living with partner and \"([^\"]*)\" claim benefits$")
	public void i_am_living_with_partner_and_claim_benefits(String live, String claim) throws Exception {
		titl1Assertion(driver, "title5");		
		selectOption(driver,live);
		
		titl1Assertion(driver, "title6");					
		selectOption(driver,claim);
	}

	@When("^I get \"([^\"]*)\" paid by universal credit payments$")
	public void i_get_paid_by_universal_credit_payments(String pay) throws Exception {
		titl1Assertion(driver, "title7");

		selectOption(driver, pay);		
		
	}

	@When("^I \"([^\"]*)\" opted for Joint universal credit$")
	public void i_opted_for_Joint_universal_credit(String jointAcc) throws Exception {
		titl1Assertion(driver, "title8");
		selectOption(driver,jointAcc);
	}

	@When("^Take home pay \"([^\"]*)\" is options$")
	public void take_home_pay_is_options(String homePay) throws Exception {
		titl1Assertion(driver, "title9");
		selectOption(driver,homePay);
	}

	@Then("^I should get a result of whether i would get help or not$")
	public void i_should_get_a_result_of_whether_i_would_get_help_or_not() throws Exception {
		try {
		WebElement ele = nhs1Element(driver);
		if(ele.isDisplayed()) {
          String text1 = ele.getText();
          Assert.assertTrue(text1.contains(pr.getProperties("nhsHelp1")));
          
          String text2 = nhs2Element(driver).getText();
          Assert.assertTrue(text2.contains(pr.getProperties("nhsHelp2")));
		} }
	   catch(Exception e) {
		   header1Validation(driver, "title10");			
	   }
          
	}
	
	
	@When("^I wait for decision$")
	public void i_wait_for_decision() throws Exception {
		if(titleValidation(driver).contains(pr.getProperties("title11"))){
			titl1Assertion(driver, "title11");

		driver.findElement(By.id("next-button")).click();	
		}
	}
	
	@When("^I am getting benifts \"([^\"]*)\"$")
	public void i_am_getting_benifts(String benifits) throws Exception {
		titl1Assertion(driver, "title12");
		selectOption(driver,benifits);
	}

	@When("^I get these \"([^\"]*)\" of tax credits$")
	public void i_get_these_of_tax_credits(String types) throws Exception {
		titl1Assertion(driver, "title13");
		selectOption(driver,types);
	}

	@When("^I have an household income - \"([^\"]*)\" within the limit$")
	public void i_have_an_household_income_within_the_limit(String limit) throws Exception {
		titl1Assertion(driver, "title14");
		selectOption(driver,limit);
	}
	
	@When("^I proceed the cost checker without selection$")
	public void i_proceed_the_cost_checker_without_selection() throws Exception {
	    errorMessage(driver);
	}

    @After
    public void after() {
    	driver.close();    	
    }

}
