
function filterCars() {
  const selectedSection = document.getElementById("car-section").value;
  const carSections = document.querySelectorAll(".car-section");

  carSections.forEach((section) => {
    if (selectedSection === "all" || section.classList.contains(selectedSection)) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("car-section").value = "all";
  filterCars();
});


const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");


loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Login Successful!");

  loginForm.reset();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Sign Up Successful!");

  
  signupForm.reset();
});
