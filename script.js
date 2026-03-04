// Define const variables.
const apiUrl = `https://randomuser.me/api/`;

async function fetchRandomUser() {
  try {
    // 1. Await the network request
    const response = await fetch("https://randomuser.me/api/");

    // Optional: Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 2. Await the parsing of the response body as JSON
    const data = await response.json();

    // 3. Process the data (e.g., log it or display it in the UI)
    const user = data.results[0];
    console.log(`Name: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error("Error fetching user:", error);
  }
}

// Call the async function to start the process
fetchRandomUser();
