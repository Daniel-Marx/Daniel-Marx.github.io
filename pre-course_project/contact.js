// footer

let footerText = "This page was made using: ";

let languages = ["CSS", "HTML", "JavaScript"];

footerText += languages.join(", ");
console.log(footerText);
document.getElementById("languages").innerText = footerText;

// contact

const contactPage = document.getElementById("contact-page");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const music = document.getElementById("music");
const comments = document.getElementById("comments");

const submit = document.getElementById("submit");

console.log(submit.disabled);
function onInput() {
  if (
    firstName.value !== "" &&
    email.value !== "" &&
    music.value !== "" &&
    comments.value !== ""
  ) {
    submit.disabled = false;
  }
}

email.addEventListener("input", onInput);
comments.addEventListener("input", onInput);
firstName.addEventListener("input", onInput);
music.addEventListener("input", onInput);

const submitForm = () => {
  console.log(
    "First Name : ",
    firstName.value,
    "Last Name : ",
    lastName.value,
    "Email : ",
    email.value,
    "Comment : ",
    comments.value,
    "Favourite Genre : ",
    music.value
  );
};

submit.addEventListener("click", submitForm);
