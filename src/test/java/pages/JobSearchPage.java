package pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import Utils.Driver;
import config.PropertiesFile;
import cucumber.api.DataTable;

public class JobSearchPage extends Driver {

	PropertiesFile pr = new PropertiesFile();
	List<List<String>> listData;

	public WebElement getSearchOpt(WebDriver driver) {
		return driver.findElement(By.id("searchOptionsBtn"));
	}

	public WebElement getSearchLoc(WebDriver driver) {
		return driver.findElement(By.id("location"));
	}

	public WebElement getSearchEmpl(WebDriver driver) {
		return driver.findElement(By.id("employer"));
	}

	public WebElement getJobKey(WebDriver driver) {
		return driver.findElement(By.id("keyword"));
	}

	public WebElement getSearch(WebDriver driver) {
		return driver.findElement(By.id("search"));
	}

	public WebElement getWorkPattern(WebDriver driver) {
		return driver.findElement(By.cssSelector("summary[aria-controls='working-pattern-details']"));
	}

	public WebElement getContractType(WebDriver driver) {
		return driver.findElement(By.cssSelector("summary[aria-controls='contract-type-details']"));
	}

	public WebElement getPayRange(WebDriver driver) {
		return driver.findElement(By.cssSelector("summary[aria-controls='pay-range-details']"));
	}

	public WebElement getPattern(WebDriver driver) {
		return driver.findElement(By.id("pattern"));
	}

	public WebElement getContract(WebDriver driver) {
		return driver.findElement(By.id("contract"));
	}

	public WebElement getPay(WebDriver driver) {
		return driver.findElement(By.id("pay"));
	}

	public WebElement getSort(WebDriver driver) {
		return driver.findElement(By.id("sort"));
	}

	public WebElement getRefineSearch(WebDriver driver) {
		return driver.findElement(By.id("refine-search"));
	}

	public WebElement getNoResults(WebDriver driver) {
		return driver.findElement(By.cssSelector(".nhsuk-grid-column-two-third h3.nhsuk-heading-m"));
	}

	public WebElement getJobRef(WebDriver driver) {
		return driver.findElement(By.xpath("//input[@id='jobReference']"));
	}

	public List<WebElement> getJobTitles(WebDriver driver) {
		return driver.findElements(By.cssSelector("li h3 a[data-test='search-result-job-title']"));
	}

	public List<WebElement> getEmployers(WebDriver driver) {
		return driver.findElements(By.cssSelector("div.nhsuk-u-margin-bottom-4 h3"));
	}

	public List<WebElement> getLocations(WebDriver driver) {
		return driver.findElements(By.cssSelector("div.nhsuk-u-margin-bottom-4 h3 div"));
	}

	public List<WebElement> getContractTypes(WebDriver driver) {
		return driver.findElements(By.cssSelector("li[data-test='search-result-jobType'] strong"));
	}

	public List<WebElement> getWorkingPatterns(WebDriver driver) {
		return driver.findElements(By.cssSelector("li[data-test='search-result-workingPattern'] strong"));
	}

	public WebElement getDidYouMeanHeader(WebDriver driver) {
		return driver.findElement(By.cssSelector("h2.nhsuk-heading-l"));
	}

	public WebElement getChkJobTitle(WebDriver driver) {
		return driver.findElement(By.cssSelector("ul.ad-job-info li[data-test='bullet-one']"));
	}

	public WebElement getChkSpelling(WebDriver driver) {
		return driver.findElement(By.cssSelector("ul.ad-job-info li[data-test='bullet-two']"));
	}

	public WebElement getChkDistance(WebDriver driver) {
		return driver.findElement(By.cssSelector("ul.ad-job-info li[data-test='bullet-three']"));
	}

	public WebElement getClear(WebDriver driver) {
		return driver.findElement(By.linkText("Clear filters"));
	}

	public void simpleSearch(WebDriver driver, String value) {
		getJobKey(driver).sendKeys(value);
		getSearch(driver).click();
	}

	public void noResultsValidation(WebDriver driver) {
		Assert.assertTrue(getDidYouMeanHeader(driver).isDisplayed());
		Assert.assertTrue(getChkJobTitle(driver).isDisplayed());
		Assert.assertTrue(getChkSpelling(driver).isDisplayed());
		Assert.assertTrue(getChkDistance(driver).isDisplayed());
	}

	public void jobSearchListValidations(WebDriver driver, String value, List<WebElement> ele) {
		try {
			List<WebElement> jobs = ele;
			for (int i = 0; i < 3; i++) {
				String text = jobs.get(i).getText();
				Assert.assertTrue(pr.getProperties("searchTxt"), text.contains(value));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void locEmpPreferenceSelection(WebDriver driver, String loc, String emp) {
		try {
			getSearchOpt(driver).click();
			getSearchLoc(driver).sendKeys(loc);
			getSearchEmpl(driver).sendKeys(emp);
			search(driver);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void search(WebDriver driver) {
		WebElement search = getSearch(driver);
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", search);
	}

	public String header(WebDriver driver) {
		String head = driver.findElement(By.cssSelector("legend#heading h1")).getText().trim();
		return head;
	}

	public void headerValidation(WebDriver driver, String title) {
		Assert.assertTrue(header(driver).contains(pr.getProperties(title)));
	}

	public void sortJobs(WebDriver driver) {
		Select sort = new Select(getSort(driver));
		sort.selectByVisibleText(pr.getProperties("latestJob"));
	}

	public void moreFilters(WebDriver driver, String pattern, String contract, String pay) throws InterruptedException {
		getWorkPattern(driver).click();
		driver.findElement(By.id(pattern)).click();
		getContractType(driver).click();
		driver.findElement(By.id(contract)).click();
		getPayRange(driver).click();
		driver.findElement(By.id(pay)).click();
		getRefineSearch(driver).click();
	}

	public void filter1(WebDriver driver, DataTable dataTable) throws InterruptedException {
		List<List<String>> listData = dataTable.asLists(String.class);

		moreFilters(driver, listData.get(0).get(2), listData.get(0).get(3), listData.get(0).get(4));

		jobSearchListValidations(driver, listData.get(0).get(0), getContractTypes(driver));

		jobSearchListValidations(driver, listData.get(0).get(1), getWorkingPatterns(driver));
	}

	public void filter2(WebDriver driver, DataTable dataTable) throws InterruptedException {
		listData = dataTable.asLists(String.class);
		moreFilters(driver, listData.get(1).get(2), listData.get(1).get(3), listData.get(1).get(4));

		jobSearchListValidations(driver, listData.get(1).get(0), getContractTypes(driver));

		jobSearchListValidations(driver, listData.get(1).get(1), getWorkingPatterns(driver));
	}

	public void applyFilterAndValidate(WebDriver driver, DataTable dataTable) {
		try {
			filter1(driver, dataTable);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		getClear(driver).click();
		try {
			filter2(driver, dataTable);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
