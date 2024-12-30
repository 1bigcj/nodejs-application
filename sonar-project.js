const sonarqubeScanner = require('sonarqube-scanner');
const fs = require('fs');
const stream = require('stream');

// Create a writable stream for logging
const logStream = fs.createWriteStream('sonar_log.txt', { flags: 'a' });  // Logs to a file

// Create a custom Console object that writes to the log file
const logConsole = new console.Console({ stdout: logStream, stderr: logStream });

sonarqubeScanner({
  serverUrl: 'http://54.167.26.94:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsLandmarkTechnologies',
    'sonar.login': '02cfc1523de1f1d203fd0cd8eda4ca9ce04346a3',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.',
  }
}, () => {
  logConsole.log('SonarQube scan finished.');
});
