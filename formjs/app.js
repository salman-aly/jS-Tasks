function getValue() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("no").value;
  var text = document.getElementById("text").value;

  document.writeln(
    "Your name :" +
      name +
      "<br/ >" +
      "your number :" +
      number +
      "<br/>" +
      "Text messsage :" +
      text
  );
}
