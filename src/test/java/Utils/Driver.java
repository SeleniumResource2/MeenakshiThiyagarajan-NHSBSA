package Utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;



public class Driver {
	
	  private static WebDriver driver;

	    public static WebDriver initializeDriver() {	         	
	    	WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();	    			 
	        driver.manage().deleteAllCookies();
	        driver.manage().window().maximize();

	        return driver;
	    }

}
