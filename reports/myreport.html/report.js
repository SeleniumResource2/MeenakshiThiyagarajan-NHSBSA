$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumProjects/NHSBSA/src/test/resources/features/Test1.feature");
formatter.feature({
  "name": "NHS cost checker validation based on the user input",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.step({
  "name": "I am a citizen of the UK live in \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I register my gp in \"\u003cplace\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I register my dental practice in \"\u003cdcountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.step({
  "name": "I am \"\u003clive\u003e\" living with partner and \"\u003cclaim\u003e\" claim benefits",
  "keyword": "And "
});
formatter.step({
  "name": "I get \"\u003cpaid\u003e\" paid by universal credit payments",
  "keyword": "And "
});
formatter.step({
  "name": "I \"\u003coption\u003e\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.step({
  "name": "Take home pay \"\u003climit\u003e\" is options",
  "keyword": "And "
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "country",
        "place",
        "dcountry",
        "live",
        "claim",
        "paid",
        "option",
        "limit"
      ]
    },
    {
      "cells": [
        "ENGLAND",
        "Yes",
        "ENGLAND",
        "Yes",
        "Yes",
        "YES_I_RECEIVED_UNIVERSAL_CREDIT",
        "Yes",
        "Yes"
      ]
    },
    {
      "cells": [
        "ENGLAND",
        "No",
        "ENGLAND",
        "Yes",
        "Yes",
        "YES_I_RECEIVED_UNIVERSAL_CREDIT",
        "Yes",
        "Yes"
      ]
    },
    {
      "cells": [
        "SCOTLAND",
        "Yes",
        "SCOTLAND",
        "Yes",
        "Yes",
        "YES_I_RECEIVED_UNIVERSAL_CREDIT",
        "Yes",
        "Yes"
      ]
    },
    {
      "cells": [
        "WALES",
        "Yes",
        "WALES",
        "Yes",
        "Yes",
        "YES_I_RECEIVED_UNIVERSAL_CREDIT",
        "Yes",
        "Yes"
      ]
    },
    {
      "cells": [
        "ENGLAND",
        "Yes",
        "NOT_REGISTERED_WITH_DENTAL_PRACTICE",
        "Yes",
        "Yes",
        "YES_I_RECEIVED_UNIVERSAL_CREDIT",
        "Yes",
        "Yes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"YES_I_RECEIVED_UNIVERSAL_CREDIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"Yes\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_opted_for_Joint_universal_credit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take home pay \"Yes\" is options",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.take_home_pay_is_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"No\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"YES_I_RECEIVED_UNIVERSAL_CREDIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"Yes\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_opted_for_Joint_universal_credit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take home pay \"Yes\" is options",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.take_home_pay_is_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"SCOTLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"SCOTLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"YES_I_RECEIVED_UNIVERSAL_CREDIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"Yes\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_opted_for_Joint_universal_credit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take home pay \"Yes\" is options",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.take_home_pay_is_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"WALES\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"WALES\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"YES_I_RECEIVED_UNIVERSAL_CREDIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"Yes\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_opted_for_Joint_universal_credit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take home pay \"Yes\" is options",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.take_home_pay_is_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in England, Scotland and Wales",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"NOT_REGISTERED_WITH_DENTAL_PRACTICE\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"YES_I_RECEIVED_UNIVERSAL_CREDIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"Yes\" opted for Joint universal credit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_opted_for_Joint_universal_credit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take home pay \"Yes\" is options",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.take_home_pay_is_options(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in Northern Ireland",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"NORTHERN_IRELAND\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validation of NHS cost living in UK with other options of Universal credit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.step({
  "name": "I am a citizen of the UK live in \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I register my gp in \"\u003cplace\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I register my dental practice in \"\u003cdcountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.step({
  "name": "I am \"\u003clive\u003e\" living with partner and \"\u003cclaim\u003e\" claim benefits",
  "keyword": "And "
});
formatter.step({
  "name": "I get \"\u003cpaid\u003e\" paid by universal credit payments",
  "keyword": "And "
});
formatter.step({
  "name": "I wait for decision",
  "keyword": "And "
});
formatter.step({
  "name": "I am getting benifts \"\u003cbenifits\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I get these \"\u003ctypes\u003e\" of tax credits",
  "keyword": "When "
});
formatter.step({
  "name": "I have an household income - \"\u003cincome\u003e\" within the limit",
  "keyword": "And "
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "country",
        "place",
        "dcountry",
        "live",
        "claim",
        "paid",
        "benifits",
        "types",
        "income"
      ]
    },
    {
      "cells": [
        "ENGLAND",
        "Yes",
        "ENGLAND",
        "Yes",
        "Yes",
        "NOT_YET",
        "TAX_CREDIT",
        "WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT",
        "Yes"
      ]
    },
    {
      "cells": [
        "ENGLAND",
        "Yes",
        "ENGLAND",
        "Yes",
        "Yes",
        "NO_I_GET_DIFFERENT_BENEFIT",
        "TAX_CREDIT",
        "WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT",
        "Yes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of NHS cost living in UK with other options of Universal credit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"ENGLAND\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"NOT_YET\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for decision",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_wait_for_decision()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am getting benifts \"TAX_CREDIT\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_getting_benifts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get these \"WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT\" of tax credits",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_get_these_of_tax_credits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have an household income - \"Yes\" within the limit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_have_an_household_income_within_the_limit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS cost living in UK with other options of Universal credit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"ENGLAND\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my gp in \"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_register_my_gp_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I register my dental practice in \"ENGLAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_register_my_dental_practice_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_enter_my_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am \"Yes\" living with partner and \"Yes\" claim benefits",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_living_with_partner_and_claim_benefits(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"NO_I_GET_DIFFERENT_BENEFIT\" paid by universal credit payments",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_get_paid_by_universal_credit_payments(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for decision",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_wait_for_decision()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am getting benifts \"TAX_CREDIT\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_getting_benifts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get these \"WORKING_TAX_CREDIT_WITH_CHILD_TAX_CREDIT\" of tax credits",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_get_these_of_tax_credits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have an household income - \"Yes\" within the limit",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_have_an_household_income_within_the_limit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message validation when option is not selected",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the nhs cost checker",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.launch_the_nhs_cost_checker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I proceed the cost checker without selection",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.i_proceed_the_cost_checker_without_selection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a citizen of the UK live in \"NORTHERN_IRELAND\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.i_am_a_citizen_of_the_UK_live_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a result of whether i would get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.i_should_get_a_result_of_whether_i_would_get_help_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});