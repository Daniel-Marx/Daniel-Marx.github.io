const GITHUB_URL = "https://api.github.com/users/Daniel-Marx";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("my-name");
    myName.innerText = data.name; 
  });

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// footer

let footerText = "This page was made using: "

let languages = [
  "CSS",
  "HTML",
  "JavaScript"
];


footerText += languages.join(", ");
console.log(footerText);
document.getElementById("languages").innerText = footerText;



// // About page

let currentlySelected = 0;
const maplist = [

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.70319751375!2d27.98759757612142!3d-26.05940965539002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton%2C%20South%20Africa!5e0!3m2!1sen!2sil!4v1621204529787!5m2!1sen!2sil", 

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27025.278645345872!2d34.874036385751!3d32.14598513121154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d382788e4b667%3A0x1f05cddaa82b24a5!2sHod%20Hasharon!5e0!3m2!1sen!2sil!4v1621204597833!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d307155.8374278186!2d35.35767239809161!3d33.03089602618959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ea337c12e00b3%3A0x3df26de5eafa01de!2sUpper%20Galilee%20Regional%20Council!5e0!3m2!1sen!2sil!4v1621209706891!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093166024!2d34.727205693949585!3d32.08805767491785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1621205855971!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443087.5486240012!2d-95.68148328988487!3d29.81747821737385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sil!4v1621205924736!5m2!1sen!2sil"
];

const maps = document.querySelector(".maps");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.hidden = false;
  currentlySelected--;
  document.getElementById("maps").src = maplist[currentlySelected];

  if (currentlySelected === 0) {
    prevBtn.hidden = true;
  }
}

function next() {
  prevBtn.hidden = false;
  currentlySelected++;
  document.getElementById("maps").src = maplist[currentlySelected];


  if (currentlySelected + 1 === maplist.length) {
    nextBtn.hidden = true;
  }
}

function init() {

    prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function() {
    next();
  })
}

init();

