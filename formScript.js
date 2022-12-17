$(document).ready(function () {
  $(".submitError").hide();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  $(".submitErrorDiv1").hover(function (e) {
    $(".submitErrorDiv2").show();
    $(".submitErrorDiv1").hide();
    ValidationCheckOnHover();
  });

  $(".submitErrorDiv2").hover(function (e) {
    $(".submitErrorDiv2").hide();
    $(".submitErrorDiv1").show();
    ValidationCheckOnHover();
  });
});

function checkOnInputChange() {
  if (username.value && password.value) {
    username.style.border = "1px solid #ced4da";
    password.style.border = "1px solid #ced4da";
    $(".submitDiv").show();
    $(".submitError").hide();
  }
}

function Validation() {
  if (!username.value) {
    username.style.border = "4px solid red";
  } else {
    username.style.border = "1px solid #ced4da";
  }

  if (!password.value) {
    password.style.border = "4px solid red";
  } else {
    password.style.border = "1px solid #ced4da";
  }

  if (!(username.value && password.value)) {
    $(".submitDiv").hide();
    $(".submitError").show();
    $(".submitErrorDiv1").show();
    $(".submitErrorDiv2").hide();
  } else {
    displayMsg();
  }
}

function ValidationCheckOnHover() {
  if (!username.value) {
    username.style.border = "4px solid red";
  } else {
    username.style.border = "1px solid #ced4da";
  }

  if (!password.value) {
    password.style.border = "4px solid red";
  } else {
    password.style.border = "1px solid #ced4da";
  }

  if (username.value && password.value) {
    $(".submitDiv").show();
    $(".submitError").hide();
  }
}

function displayMsg() {
  alert("You have Successfully Submited");
}
