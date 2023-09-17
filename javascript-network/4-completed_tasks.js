const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Send a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code ${response.statusCode}`);
  } else {
    try {
      const todos = JSON.parse(body);

      // Filter and count completed tasks by user id
      const completedTasksByUser = {};

      todos.forEach((todo) => {
        if (todo.completed) {
          const userId = todo.userId;
          completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
        }
      });

      // Print users with completed task count
      for (const userId in completedTasksByUser) {
        console.log(`User ID ${userId}: ${completedTasksByUser[userId]} completed tasks`);
      }
    } catch (parseError) {
      console.error(`Error parsing API response: ${parseError.message}`);
    }
  }
});
