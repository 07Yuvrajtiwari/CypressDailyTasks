const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'reports/cucumber-html-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};




const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const jsonPath = 'cucumber-report.json';

if (fs.existsSync(jsonPath)) {
  console.log(`Found JSON file at ${jsonPath}`);
  reporter.generate(options);
  console.log('HTML report generated successfully.');

  // Check if there are failures in the JSON file
  const jsonData = require(jsonPath);
  const hasFailures = jsonData[0].elements.some((element) =>
    element.steps.some((step) => step.result.status === 'failed')
  );

  if (hasFailures) {
    console.error('There are failed steps. Exiting with a non-zero status code.');
    process.exit(1); // Exit with a non-zero status code indicating failure
  }
} else {
  console.error(`Error: JSON file not found at ${jsonPath}`);
  process.exit(1); // Exit with a non-zero status code indicating failure
}

reporter.generate(options);