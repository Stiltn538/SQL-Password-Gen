// Generate SQL Password
function SQLPassword(password) {
  return ("*"+CryptoJS.SHA1(CryptoJS.SHA1(password))).toUpperCase();
}


// Select the hash in the text area on click
document.querySelector("#hash-display").addEventListener("click", function() {
  const textArea = document.querySelector("#hash-display");
  textArea.focus();
  textArea.select();
});

// Display generated hash in the output textbox when submitted
function onSubmit() {
  // Prevent the page from refreshing
  event.preventDefault();
  const passField = document.querySelector("#password-field");
  if(passField.value != "") {
    let pass = passField.value;
    pass = SQLPassword(pass);
    document.querySelector("#hash-display").value = pass;
  } else { // Clear hash if password field is empty
    document.querySelector("#hash-display").value = "";
  }
}

// Add event listener for form submission
const form = document.querySelector('#main-form');
form.addEventListener('submit', onSubmit);
