// Define const variables.
const apiUrl = `https://randomuser.me/api/`;
const fetchUserBtn = document.getElementById("fetch-user");
const clearUsers = document.getElementById("clear-users");

/*
Vurderer å implementere hvis tid

// Saves newest user to localStorage
const saveToLocal = (user) => {
  localStorage.setItem(user);
};
// Load users from lacalStorage
const loadFromLocal = () => {
  const loadedUsers = localStorage.getItem();
  return loadedUsers;
};
*/

// Denne må være inne i fetchRandomUser() for å ikke gi error.
// const usersContainer = document.getElementById("#users-container");

async function fetchRandomUser(number = 1) {
  try {
    // Always wait
    // Default fetch 1 user, ellers fetch ${number users}
    // Må definere response utenfor if statement
    let response;
    if (number === 1) {
      response = await fetch("https://randomuser.me/api/");
    } else {
      response = await fetch(`https://randomuser.me/api/?results=${number}`);
    }
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Wait for parsing to be done
    const data = await response.json();
    data.results.forEach((user) => {
      // Sends firstname, lastname, and email to output function
      outputRandomUser(user.name.first, user.name.last, user.email);
    });
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
    // Implementer hvis det er tid, queryselectorall, trenger loop.
    // const userNameClickable = document.querySelector(".user-name");
    // if (userNameClickable) {
    //   userNameClickable.addEventListener("click", () => {
    //     console.log("Name click works!");
    //   });
    // }
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

fetchUserBtn.addEventListener("click", () => {
  fetchRandomUser();
});

clearUsers.addEventListener("click", () => {
  window.location.reload();
});
