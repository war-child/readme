// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
if (license === "") {
  return "";
} else {
  return `![${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){}
switch (license) {
  case "MIT License":
    return "https://img.shields.io/badge/license-MIT-green";
  case "Apache Licence 2.0":
    return "https://img.shields.io/badge/license-Apache-green"
  case "GNU GPLv3":
    return "https://img.shields.io/badge/license-GPL-green"
  default:
    return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description 

  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ## Collaborators
  
 ${data.credits}
  
  ## License
  
  This project is licensed under ${data.license}
  
  ## Badges
  
  ${renderLicenseSection(data.license)}

  
  ## Tests
  
  ${data.tests}

`;
}

module.exports = generateMarkdown;
