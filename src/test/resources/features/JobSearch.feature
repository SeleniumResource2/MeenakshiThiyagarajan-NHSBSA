Feature: NHS Job search validation based on the user input

  Background: User accessing NHS job search website
    Given I am a jobseeker on NHS Jobs website

  Scenario Outline: Validation of NHS job search using simple search
    When I put my preferences with "<jobtitle>" into the Search functionality
    Then I should get a list of jobs which matches my preferences of "<jobtitle>"
    And sort my search results with the newest Date Posted

    Examples: 
      | jobtitle    |
      | Consultant  |
      | Therapist   |
      | Audiologist |

  Scenario Outline: Validation of NHS job search with more search option
    When I put my preferences with "<jobtitle>" into the Search functionality
    And I add the preferences with "<location>", "<employer>" into the Search functionality
    Then I should get a list of jobs which matches my preferences of "<jobtitle>"
    And I should get jobs with given preferences of "<location>" and "<employer>"
    And sort my search results with the newest Date Posted

    Examples: 
      | jobtitle   | location | employer                                         |
      | Manager    | SE       | NHS                                              |
      | Specialist | OX3      | Oxford University Hospitals NHS Foundation Trust |
      | Clinical   | LU4      | NHS                                              |

  Scenario: Validation of NHS job search using incorrect title
    When I put my preferences with "Physicologist" into the Search functionality
    Then I should get a list of jobs which matches my preferences of "Physicologist"

  Scenario: Validation of NHS job search using reference code
    When I put my preferences with "Specialist" into the Search functionality
    And I add the preferences with "LU4", "NHS" into the Search functionality
    And I add the reference code as "914-JOBREF-a"
    Then I should get a list of jobs which matches my preferences of "Specialist"

  Scenario: Validation of NHS job search using filters
    When I put my preferences with "Consultant" into the Search functionality
    Then I should get a list of jobs which matches my filters
      | Permanent  | Part time | working-pattern-part-time | contract-type-permanent  | pay-range-30-40 |
      | Fixed-Term | Full time | working-pattern-full-time | contract-type-fixed-term | pay-range-20-30 |
    And sort my search results with the newest Date Posted
