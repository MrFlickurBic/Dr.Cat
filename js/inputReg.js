"use strict";

let fileInput = document.getElementById("input-file");
let dropContainer = document.getElementById("input-container");
let img = document.getElementById("avatar-img");

fileInput.addEventListener("change", function (e) {
  dropContainer.innerHTML = fileInput.files[0].name;

  img.file = fileInput.files[0];

  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
  reader.readAsDataURL(fileInput.files[0]);
});

let name1 = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sendButton = document.getElementById("send");

name1.addEventListener("input", function(e) {
  if(name1.value != "" && email.value != "" && password.value != "") {
    sendButton.style.backgroundColor = "#004dc1";
    sendButton.style.color = "#ffffff";
    $(sendButton).attr("disabled", false);
  } else {
    sendButton.style.backgroundColor = "#ffffff";
    sendButton.style.color = "#aaaaaa";
    $(sendButton).attr("disabled", true);
  }
});

email.addEventListener("input", function(e) {
  if(name1.value != "" && email.value != "" && password.value != "") {
    sendButton.style.backgroundColor = "#004dc1";
    sendButton.style.color = "#ffffff";
    $(sendButton).attr("disabled", false);
  } else {
    sendButton.style.backgroundColor = "#ffffff";
    sendButton.style.color = "#aaaaaa";
    $(sendButton).attr("disabled", true);
  }
});

password.addEventListener("input", function(e) {
  if(name1.value != "" && email.value != "" && password.value != "") {
    sendButton.style.backgroundColor = "#004dc1";
    sendButton.style.color = "#ffffff";
    $(sendButton).attr("disabled", false);
  } else {
    sendButton.style.backgroundColor = "#ffffff";
    sendButton.style.color = "#aaaaaa";
    $(sendButton).attr("disabled", true);
  }
});