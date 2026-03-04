// Define const variables.
const apiUrl = `https://randomuser.me/api/`;

// Denne må være inne i fetchRandomUser() for å ikke gi error.
// const usersContainer = document.getElementById("#users-container");

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
    outputRandomUser(user.name.first, user.name.last, user.email);
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error("Error fetching user:", error);
  }
}

// Output the result from fetchRandomUser
function outputRandomUser(first, last, email) {
  const usersContainer = document.getElementById("users-container"); // Make sure to replace "usersContainer" with the actual ID of your container element

  if (usersContainer) {
    const userDiv = document.createElement(`div`);
    userDiv.classList.add("user-div");
    const userName = document.createElement("p");
    userName.classList.add("user-name");
    userName.textContent = `Name: ${first} ${last}.`;
    const userEmail = document.createElement("p");
    userEmail.classList.add("user-email");
    userEmail.textContent = `Email: ${email}.`;

    usersContainer.appendChild(userDiv);
    userDiv.appendChild(userName);
    userDiv.appendChild(userEmail);
  } else {
    console.error("Error: Users container not found.");
  }
}

// Call the async function to start the process
fetchRandomUser();
