automation_asnmnt_batch09
Automated Tests for SauceDemo Website
Comprehensive automated test suite for the SauceDemo website using WebdriverIO framework.

-- Features
1. Login verification with different user types
2. Product filtering verification
3. Cart and checkout validation

-- Test Scenarios
1. Locked User Login Test

Login attempt with locked_out_user
Error message validation

2. Standard User Purchase Flow

Complete purchase journey with standard_user
App state management via hamburger menu
Multiple item addition to cart

 Technologies

WebdriverIO - Next-gen browser and mobile automation test framework
Mocha - Feature-rich JavaScript test framework
ChromeDriver - WebDriver implementation for Chrome

Getting Started
-- Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)

-- Installation

Clone the repository
bashgit clone (https://github.com/abireshaan/automation_asnmnt_batch09)

-- Install dependencies
 npm install (insert the bash)

-- Running Tests
Run all tests: npm test (insert the bash)
Run specific test: npm run wdio

-- Acknowledgements

Sauce Labs for providing the demo website
WebdriverIO Documentation
Mocha Documentation
