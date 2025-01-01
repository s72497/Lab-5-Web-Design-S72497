// Function to display user profile information
function displayUserProfile() {
  // Access HTML elements
  const firstNameElement = document.getElementById("firstName");
  const lastNameElement = document.getElementById("lastName");
  const fullNameElement = document.getElementById("fullName");
  const ageElement = document.getElementById("age");
  const emailElement = document.getElementById("email");

  // Update the HTML with user profile information
  firstNameElement.textContent = userProfile.firstName;
  lastNameElement.textContent = userProfile.lastName;
  fullNameElement.textContent = `${userProfile.firstName} ${userProfile.lastName}`;
  ageElement.textContent = userProfile.age;
  emailElement.textContent = userProfile.email;
}

// Call the function to display the profile
displayUserProfile();
