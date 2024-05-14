package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import Utils.Driver;
import config.PropertiesFile;

public class CommonPage extends Driver{

	PropertiesFile pr = new PropertiesFile();

    public String titleValidation(WebDriver driver) {
		String question = driver.findElement(By.id("question-heading")).getText().trim();
		return question;
	}
    
    public String titleSpanValidation(WebDriver driver) {
		String question = driver.findElement(By.cssSelector("#question-heading span")).getText().trim();
		return question;
	}
	
	public void selectOption( WebDriver driver, String value) {
		driver.findElement(By.cssSelector("input[value='"+ value +"']")).click();
		driver.findElement(By.id("next-button")).click();
	}
	
	
	public void titl1Assertion(WebDriver driver, String title) {
		Assert.assertTrue(titleValidation(driver).contains(pr.getProperties(title)));
		Assert.assertTrue(driver.findElement(By.id("back-button")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.cssSelector(".nhsbsa-phase-banner__text")).isDisplayed());
	}
	
	public void titl2Assertion(WebDriver driver, String title) {
		Assert.assertTrue(titleSpanValidation(driver).contains(pr.getProperties(title)));
		Assert.assertTrue(driver.findElement(By.id("back-button")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.cssSelector(".nhsbsa-phase-banner__text")).isDisplayed());
	}
	
	public void enterDOB(WebDriver driver) {
		driver.findElement(By.id("dob-day")).sendKeys(pr.getProperties("date"));
	    driver.findElement(By.id("dob-month")).sendKeys(pr.getProperties("month"));
	    driver.findElement(By.id("dob-year")).sendKeys(pr.getProperties("year"));
	    driver.findElement(By.id("next-button")).click();	}
	
	public String header(WebDriver driver) {
		String head = driver.findElement(By.cssSelector("div.heading-group h1")).getText().trim();
		return head;
	}
	public void headerValidation(WebDriver driver, String title) {		
		Assert.assertTrue(header(driver).contains(pr.getProperties(title)));
	}
	
	public String header1(WebDriver driver) {
		String head = driver.findElement(By.id("result-heading")).getText().trim();
		return head;
	}
	
	public void header1Validation(WebDriver driver, String title) {		
		Assert.assertTrue(header1(driver).contains(pr.getProperties(title)));
		Assert.assertTrue(driver.findElement(By.id("back-button")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.cssSelector(".nhsbsa-phase-banner__text")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.id("finished-survey")).isDisplayed());
	}
	
	public void startChecker(WebDriver driver) {
		driver.findElement(By.cssSelector("input[value='Start now']")).click();
	}
	
	public WebElement nhs1Element(WebDriver driver) {
		WebElement element = driver.findElement(By.cssSelector("h2 span"));
		return element;
	}
	
	public WebElement nhs2Element(WebDriver driver) {
		WebElement element = driver.findElement(By.cssSelector("div.done-panel h2.heading-large"));
		return element;
	}
	
	public void errorMessage(WebDriver driver) {
		driver.findElement(By.id("next-button")).click();
		WebElement ele = driver.findElement(By.cssSelector("div#error-summary div"));
		Assert.assertTrue(ele.isDisplayed());
		
	}

}
