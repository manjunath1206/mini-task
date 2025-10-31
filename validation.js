function validate() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();


  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }
  let sample = "@gmail.com";
  let sample1 = email.slice(-10);

  if (sample !== sample1) {
    alert("Email not valid");
    return;
  }

  alert("Thank you for contacting Mandev Technologies!");
}
