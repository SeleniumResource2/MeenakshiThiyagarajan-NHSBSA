$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumProjects/NATIONALHEALTHSERVICE/src/test/resources/features/JobSearch.feature");
formatter.feature({
  "name": "NHS Job search validation based on the user input",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validation of NHS job search using simple search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.step({
  "name": "I put my preferences with \"\u003cjobtitle\u003e\" into the Search functionality",
  "keyword": "When "
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"\u003cjobtitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "jobtitle"
      ]
    },
    {
      "cells": [
        "Consultant"
      ]
    },
    {
      "cells": [
        "Therapist"
      ]
    },
    {
      "cells": [
        "Audiologist"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of NHS job search using simple search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Consultant\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Consultant\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search using simple search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Therapist\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Therapist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search using simple search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Audiologist\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Audiologist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validation of NHS job search with more search option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.step({
  "name": "I put my preferences with \"\u003cjobtitle\u003e\" into the Search functionality",
  "keyword": "When "
});
formatter.step({
  "name": "I add the preferences with \"\u003clocation\u003e\", \"\u003cemployer\u003e\" into the Search functionality",
  "keyword": "And "
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"\u003cjobtitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I should get jobs with given preferences of \"\u003clocation\u003e\" and \"\u003cemployer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "jobtitle",
        "location",
        "employer"
      ]
    },
    {
      "cells": [
        "Manager",
        "SE",
        "NHS"
      ]
    },
    {
      "cells": [
        "Specialist",
        "OX3",
        "Oxford University Hospitals NHS Foundation Trust"
      ]
    },
    {
      "cells": [
        "Clinical",
        "LU4",
        "NHS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of NHS job search with more search option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Manager\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the preferences with \"SE\", \"NHS\" into the Search functionality",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreference(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get jobs with given preferences of \"SE\" and \"NHS\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreferenceValidation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search with more search option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Specialist\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the preferences with \"OX3\", \"Oxford University Hospitals NHS Foundation Trust\" into the Search functionality",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreference(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Specialist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get jobs with given preferences of \"OX3\" and \"Oxford University Hospitals NHS Foundation Trust\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreferenceValidation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search with more search option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Clinical\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the preferences with \"LU4\", \"NHS\" into the Search functionality",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreference(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Clinical\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get jobs with given preferences of \"LU4\" and \"NHS\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreferenceValidation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search using incorrect title",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Physicologist\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Physicologist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search using reference code",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Specialist\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the preferences with \"LU4\", \"NHS\" into the Search functionality",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.employerLocationPreference(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the reference code as \"914-JOBREF-a\"",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.referenceCodePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my preferences of \"Specialist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobTitlePreferenceValidation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of NHS job search using filters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a jobseeker on NHS Jobs website",
  "keyword": "Given "
});
formatter.match({
  "location": "commonSteps.jobSeeker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I put my preferences with \"Consultant\" into the Search functionality",
  "keyword": "When "
});
formatter.match({
  "location": "commonSteps.jobTitlePreference(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a list of jobs which matches my filters",
  "rows": [
    {
      "cells": [
        "Permanent",
        "Part time",
        "working-pattern-part-time",
        "contract-type-permanent",
        "pay-range-30-40"
      ]
    },
    {
      "cells": [
        "Fixed-Term",
        "Full time",
        "working-pattern-full-time",
        "contract-type-fixed-term",
        "pay-range-20-30"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonSteps.jobWithfilterPreference(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort my search results with the newest Date Posted",
  "keyword": "And "
});
formatter.match({
  "location": "commonSteps.newestJobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});