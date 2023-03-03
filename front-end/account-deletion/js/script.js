const del = document.getElementById("deleteForm");

function disablebtn() {
  document.getElementById("confirm").disabled = true;
}

function enablebtn() {
  document.getElementById("confirm").disabled = false;
}

function onClickBtn() {
  alert("Account will be deleted");
  document.getElementById("consent").checked = false;
  disablebtn();
  del.close();
}

function denyBtn() {
  document.getElementById("consent").checked = false;
  disablebtn();
  del.close();
}

function accDelModal() {
  del.showModal();
}

//Borrowed structure from https://stackoverflow.com/questions/6358673/javascript-checkbox-onchange
document.getElementById("consent") //Gets the ID from the HTML, in this case the checkbox
  .addEventListener('change', () => { //Creates an event listerner that looks for 'change' in the checkbox. It then uses an anonymous function to tell it what to do when the change is detected.
    if (event.currentTarget.checked) { //If the change detected is true (checked), then it enables the continue button
      enablebtn();
    } else { //If false then it disables the continue button, so that when the checkbox is clicked more than once it restricts the button again
      disablebtn();
    }
  });
document.getElementById("delAcc").addEventListener("click", accDelModal);
document.getElementById("confirm").addEventListener("click", onClickBtn);
document.getElementById("deny").addEventListener("click", denyBtn);
