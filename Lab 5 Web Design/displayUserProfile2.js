// Function to display the user profile
function displayProfile() {
  document.getElementById("firstName").textContent = userProfile.firstName;
  document.getElementById("lastName").textContent = userProfile.lastName;
  document.getElementById("age").textContent = userProfile.age;
  document.getElementById("email").textContent = userProfile.email;
}

// Function to update the user profile
function updateProfile() {
  userProfile.firstName = document.getElementById("firstNameInput").value || userProfile.firstName;
  userProfile.lastName = document.getElementById("lastNameInput").value || userProfile.lastName;
  userProfile.age = parseInt(document.getElementById("ageInput").value) || userProfile.age;
  userProfile.email = document.getElementById("emailInput").value || userProfile.email;

  displayProfile();
}

// Initialize the display on page load
displayProfile();
