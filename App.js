const name_input = document.querySelector("#name");
const mail_input = document.querySelector("#mail");
const company_input = document.querySelector("#company");
const message_input = document.querySelector("#message");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const warning = document.querySelector("#warning");

let name_val = "";
let mail_val = "";
let company_val = "";
let message_val = "";
warning.innerHTML = "";

name_input.addEventListener("change", function () {
  name_val = name_input.value;
});
mail_input.addEventListener("change", function () {
  mail_val = mail_input.value.toLowerCase();
});
company_input.addEventListener("change", function () {
  company_val = company_input.value;
});
message_input.addEventListener("change", function () {
  message_val = message_input.value;
});

function resetForm() {
  name_input.value = "";
  mail_input.value = "";
  company_input.value = "";
  message_input.value = "";
  document.querySelector("#check").checked = false;
  name_val = "";
  mail_val = "";
  company_val = "";
  message_val = "";
}

function addStorage(formData) {
  let oldData = [];
  if (JSON.parse(localStorage.getItem("m"))) {
    oldData = JSON.parse(localStorage.getItem("m"));
  } else {
    oldData = [];
  }
  let allMessage = [...oldData];
  allMessage.push(formData);
  localStorage.setItem("m", JSON.stringify(allMessage));

  console.log(JSON.parse(localStorage.getItem("m")));
}

function formConditions(formData) {
  if (
    mail_val.includes("@") &&
    mail_val.includes(".") &&
    message_val.length >= 20
  ) {
    warning.innerHTML = "";
    resetForm();
    addStorage(formData);
  } else {
    if (message_val.length < 20) {
      warning.innerHTML =
        "-- Please enter message with minimum of 20 characters --";
    } else {
      warning.innerHTML = "-- Please enter valid Email --";
    }
  }
}

function submitClick() {
  let formData = {
    name: name_val,
    mail: mail_val,
    company: company_val,
    message: message_val,
  };

  if (
    name_val === "" ||
    mail_val === "" ||
    company_val === "" ||
    message_val === ""
  ) {
    warning.innerHTML = "-- Please enter all fields --";
  } else {
    formConditions(formData);
  }
}

submit.addEventListener("click", function () {
  submitClick();
});

reset.addEventListener("click", function () {
  resetForm();
});

// localStorage.clear()  
