
// nav burger menu

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});


// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// background decoration about section

const elements = Array.from(document.querySelectorAll('.fill'));

function fill(item, index) {

  const bgColor = getComputedStyle(item).backgroundColor,
    fillLayer = document.createElement('div');
  fillLayer.classList.add('fill-layer');
  item.style.backgroundColor = 'transparent';
  item.style.position = 'relative';
  item.style.overflow = 'hidden';
  setTimeout(function () {
    fillLayer.style.backgroundColor = bgColor;
    item.appendChild(fillLayer);
  }, index * 1000);

}

elements.forEach(fill);

// CODE FOR CAROUSEL - PROJET FRONT END
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// CODE FOR CAROUSEL - PROJET BACK END PHP
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 4000); // Change image every 4 seconds
}

// CODE FOR CAROUSEL - PROJET BACK END SYMFONY
var slideIndex3 = 0;
showSlides3();

function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
  slides3[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 4000); // Change image every 4 seconds
}



// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});