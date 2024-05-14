Feature: NHS cost checker validation based on the user input

  Scenario Outline: Validation of NHS cost living in England, Scotland and Wales
    Given Launch the nhs cost checker
    And I am a citizen of the UK live in "<country>"
    When I register my gp in "<place>"
    And I register my dental practice in "<dcountry>"
    And I enter my date of birth
    And I am "<live>" living with partner and "<claim>" claim benefits
    And I get "<paid>" paid by universal credit payments
    And I "<option>" opted for Joint universal credit
    And Take home pay "<limit>" is options
    Then I should get a result of whether i would get help or not

    Examples: 
      | country  | place | dcountry                            | live | claim | paid                            | option | limit |
      | ENGLAND  | Yes   | ENGLAND                             | Yes  | Yes   | YES_I_RECEIVED_UNIVERSAL_CREDIT | Yes    | Yes   |
      | ENGLAND  | No    | ENGLAND                             | Yes  | Yes   | YES_I_RECEIVED_UNIVERSAL_CREDIT | Yes    | Yes   |
      | SCOTLAND | Yes   | SCOTLAND                            | Yes  | Yes   | YES_I_RECEIVED_UNIVERSAL_CREDIT | Yes    | Yes   |
      | WALES    | Yes   | WALES                               | Yes  | Yes   | YES_I_RECEIVED_UNIVERSAL_CREDIT | Yes    | Yes   |
      | ENGLAND  | Yes   | NOT_REGISTERED_WITH_DENTAL_PRACTICE | Yes  | Yes   | YES_I_RECEIVED_UNIVERSAL_CREDIT | Yes    | Yes   |
  
  
  Scenario: Validation of NHS cost living in Northern Ireland
    Given Launch the nhs cost checker
    When I am a citizen of the UK live in "NORTHERN_IRELAND"
    Then I should get a result of whether i would get help or not

  Scenario Outline: Validation of NHS cost living in UK with other options of Universal credit
    Given Launch the nhs cost checker
    When I am a citizen of the UK live in "<country>"
    When I register my gp in "<place>"
    And I register my dental practice in "<dcountry>"
    And I enter my date of birth
    And I am "<live>" living with partner and "<claim>" claim benefits
    And I get "<paid>" paid by universal credit payments
    And I wait for decision
    And I am getting benifts "<benifits>"
    When I get these "<types>" of tax credits
    And I have an household income - "<income>" within the limit
    Then I should get a result of whether i would get help or not

    Examples: 
      | country | place | dcountry | live | claim | paid                       | benifits   | types                                    | income |
      | ENGLAND | Yes   | ENGLAND  | Yes  | Yes   | NOT_YET                    | TAX_CREDIT | WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT | Yes    |
      | ENGLAND | Yes   | ENGLAND  | Yes  | Yes   | NO_I_GET_DIFFERENT_BENEFIT | TAX_CREDIT | WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT | Yes    |

   Scenario: Error message validation when option is not selected   
    Given Launch the nhs cost checker
    When I proceed the cost checker without selection
    And I am a citizen of the UK live in "NORTHERN_IRELAND"
    Then I should get a result of whether i would get help or not
      