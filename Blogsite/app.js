var username = document.forms["myForm"]["name"].value;
function requiredForm() {
  var username = document.forms["myForm"]["name"].value;
  var password = document.forms["myForm"]["password"].value;
  if (username == "" || password == "") {
    alert("Name must be filled out");
    return false;
  }

  
}
function showPost() {
  var text = document.getElementById("textarea").value;
  var display = document.getElementById("screen");

  var userNameReplace = userNameReplace + username;

  display.innerHTML += "\n" + text;

  var newUser = document.getElementById("newUser");

  newUser.innerHTML = "welcome " + username;

  document.getElementById("textarea").value = "";
}
