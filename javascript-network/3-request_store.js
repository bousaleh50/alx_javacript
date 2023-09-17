#!usr/bin/node
const request = require('request');
const fs = require('fs');

// Check if both URL and file path arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node fetch_and_store.js <URL> <file_path>');
  process.exit(1);
}

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
  } else {
    // Write the response body to the file with UTF-8 encoding
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (writeError) => {
      if (writeError) {
        console.error(`Error writing to file: ${writeError.message}`);
      } else {
        console.log(`Contents of ${url} have been saved to ${filePath}`);
      }
    });
  }
});
