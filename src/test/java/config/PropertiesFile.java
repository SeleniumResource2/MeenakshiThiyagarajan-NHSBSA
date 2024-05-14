package config;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.openqa.selenium.WebElement;

public class PropertiesFile {
	
	public static String getProperties(String arg) {
		String value = null;
		Properties prop = new Properties();
		String projectPath = System.getProperty("user.dir");
		try {
			InputStream input = new FileInputStream(projectPath + "/src/test/java/config/config.properties");
			prop.load(input);
			value = prop.getProperty(arg);
			
		} catch (Exception e) {
			
			System.out.println(e.getMessage());
			System.out.println(e.getCause());
			e.printStackTrace();
		}
		
		return value;
	}
	

}
