var forward = 0;

function abc(event) {
  var character = document.getElementById("animate");
  console.log(event.keyCode);
  if (event.keyCode === 68) {
    forward = forward + 20;
    character.style.left = forward + "px";
    character.src = "images/zan-runn.gif";
  }
  if (event.keyCode === 65) {
    forward = forward - 20;
    character.style.left = forward + "px";
    character.src = "images/zankuro-badassstrike.gif";
    character.style.width = "400px";
    character.style.height = "400px";
  }
  if (event.keyCode === 87) {
    character.src = "images/zan-die.gif";
    character.style.width = "400px";
    character.style.height = "400px";
  }
  if (event.keyCode === 90) {
    character.src = "images/zankuro-red.gif";
    character.style.width = "300px";
    character.style.height = "300px";
  }
}

window.onkeyup = abc;
