const customizer = document.getElementById("customizer");
function customizeBox() {
  if ((customizer.style.display = "none")) {
    customizer.style.display = "block";
  } else {
    customizer.style.display = "none";
  }
}
const changeOutputBackground = document.getElementById(
  "changeOutputBackground"
);
const changeBackground = document.getElementById("changeInputBackground");
changeInputBackground.addEventListener("input", function () {
  changeOutputBackground.style.backgroundColor = changeInputBackground.value;
});
changeOutputBackground.style.backgroundColor = changeInputBackground.value;

const changeOutputTitle = document.getElementById("changeOutputTitle");
const changeInputTitle = document.getElementById("changeInputTitle");
changeInputTitle.addEventListener("input", function () {
  changeOutputTitle.style.color = changeInputTitle.value;
});
changeOutputTitle.style.color = changeInputTitle.value;

const changeOutputEmail = document.getElementById("changeOutputEmail");
const changeInputEmail = document.getElementById("changeInputEmail");
changeInputEmail.addEventListener("input", function () {
  changeOutputEmail.style.color = changeInputEmail.value;
});
changeOutputEmail.style.color = changeInputEmail.value;

const changeOutputPassword = document.getElementById("changeOutputPassword");
const changeInputPassword = document.getElementById("changeInputPassword");
changeInputPassword.addEventListener("input", function () {
  changeOutputPassword.style.color = changeInputPassword.value;
});
changeOutputPassword.style.color = changeInputPassword.value;

const changeOutputButton = document.getElementById("changeOutputButton");
const changeInputButton = document.getElementById("changeInputButton");
changeInputButton.addEventListener("input", function () {
  changeOutputButton.style.backgroundColor = changeInputButton.value;
});
changeOutputButton.style.backgroundColor = changeInputButton.value;

const changeOutputButtonText = document.getElementById(
  "changeOutputButtonText"
);
const changeInputButtonText = document.getElementById("changeInputButtonText");
changeInputButtonText.addEventListener("input", function () {
  changeOutputButtonText.style.color = changeInputButtonText.value;
});
changeOutputButtonText.style.color = changeInputButtonText.value;

function removeCustomizer() {
  customizer.style.display = "none";
}
