#!usr/bin/node
const request = require('request');

// Check if a URL argument is provided
if (process.argv.length <= 2) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    try {
      const data = JSON.parse(body);

      // Filter movies where "Wedge Antilles" is present
      const moviesWithWedge = data.results.filter((movie) =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );

      // Print the number of movies
      console.log(moviesWithWedge.length);
    } catch (parseError) {
      console.error(`Error parsing API response: ${parseError.message}`);
    }
  }
});
