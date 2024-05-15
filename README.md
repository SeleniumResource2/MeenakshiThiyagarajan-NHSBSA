# MeenakshiThiyagarajan-NHSBSA
About the Framework –

Feature File: Feature files store high-level description of scenarios, scenario outline and steps in the Gherkin language The feature file “JobSearch.feature”, is placed under the folder “src/test/resources/features”

Configuration File: The configuration file “config.properties” is placed under the folder “src/test/java/config”. All user inputs and data validations are fetched from this file

StepDefinition File: The step definition file “commonSteps.java” is placed under the package “src/test/java/steps”

POM File: The objects, locators and corresponding reusable methods are present under the package “src/test/java/pages” with the class name “JobSearchPage.java”

Utilities File: This package is placed under “src/test/java/Utils” and is created to separate the main driver class and configuration files and to make the code look more readable. The class file “Drivers.java” is used to initialize the browser driver.

Test Runner File: The test runner file executes the Cucumber feature files and coordinates the steps defined in those feature files with the corresponding step definitions This Test Runner file is under location location "src/test/java/runner/". Ensure feature file path is appropriate before execution.

Pre-requisites: Below software are required to be installed on a local machine:

    Java (JDK 11)
    Eclipse IDE – If running from the IDE
    Maven Integration for Eclipse
    Cucumber Eclipse Plugin
    
Running the Project: Make sure the pre-requisites are performed before running.

Step 1: Open the Eclipse IDE on your local machine and open the project.

Step 2: Go to Test Runner file at location "src/test/java/runner/"

Step 3: Right-click on the Project name --> Run As --> Junit Test

Step 4: To run from command line ensure that below commands are provided:
a. mvn clean ==> This command is used to clean the project by removing any files or directories generated during the build process. It's often used to ensure that the project is in a clean state before building or packaging it again
b. mvn test ==>This command will trigger the Maven test phase, which will compile the project's source code, run the tests, and produce test reports.
c. mvn test -Dtest=runner.TestRunner
