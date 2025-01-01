// Array to store user profiles
const userProfiles = [];

// Function to display all profiles in the table
function displayProfiles() {
  const tableBody = document.getElementById("profileTableBody");
  tableBody.innerHTML = ""; // Clear previous table rows

  userProfiles.forEach((profile, index) => {
    const row = document.createElement("tr");

    // Create and append the index cell
    const indexCell = document.createElement("td");
    indexCell.textContent = index + 1;
    row.appendChild(indexCell);

    // Create and append the first name cell
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = profile.firstName;
    row.appendChild(firstNameCell);

    // Create and append the last name cell
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = profile.lastName;
    row.appendChild(lastNameCell);

    // Create and append the age cell
    const ageCell = document.createElement("td");
    ageCell.textContent = profile.age;
    row.appendChild(ageCell);

    // Create and append the email cell
    const emailCell = document.createElement("td");
    emailCell.textContent = profile.email;
    row.appendChild(emailCell);

    tableBody.appendChild(row);
  });
}

// Function to handle form submission
function saveProfile(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get user input values
  const firstName = document.getElementById("firstNameInput").value.trim();
  const lastName = document.getElementById("lastNameInput").value.trim();
  const age = parseInt(document.getElementById("ageInput").value.trim());
  const email = document.getElementById("emailInput").value.trim();

  // Create a new profile object and save it to the array
  const newProfile = { firstName, lastName, age, email };
  userProfiles.push(newProfile);

  // Update the table with the new profile
  displayProfiles();

  // Reset the form for the next entry
  document.getElementById("userForm").reset();
}

// Attach the form's submit event listener
document.getElementById("userForm").addEventListener("submit", saveProfile);

// Initial table display (empty)
displayProfiles();
  
