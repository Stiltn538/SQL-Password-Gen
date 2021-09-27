// Generate SQL Password
function SQLPassword(password) {
  return ("*"+CryptoJS.SHA1(CryptoJS.SHA1(password))).toUpperCase();
}

// Display generated hash in the output textbox
document.querySelector("#submit-button").addEventListener("click", function(){
  const passField = document.querySelector("#password-field");
  if(passField.value != "") {
    let pass = passField.value;
    pass = SQLPassword(pass);
    document.querySelector("#hash-display").value = pass;
  } else { // Clear hash if password field is empty
    document.querySelector("#hash-display").value = "";
  }
});

// Select the hash in the text area on click
document.querySelector("#hash-display").addEventListener("click", function() {
  const textArea = document.querySelector("#hash-display");
  textArea.focus();
  textArea.select();
});
