
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


// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* btn show more / show less */


function showMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  
};

/* carousel cards */

const btnBefore = document.getElementById("#btnBefore");
const btnAfter = document.getElementById("#btnAfter");

btnAfter.addEventListener("click", showAfter) ;
function showAfter() {
  const projet1 = document.querySelector("#projet1");
const projet2 = document.querySelector("#projet2");
const projet3 = document.querySelector("#projet3");
if (projet1.classList.contains("d-block")){
  projet1.classList.add("d-none");
  projet1.classList.remove("d-block");
  projet2.classList.remove("d-none");
  projet2.classList.add("d-block");
} 

else if (projet2.classList.contains("d-block")){
  projet2.classList.add("d-none");
  projet2.classList.remove("d-block");
  projet3.classList.remove("d-none");
  projet3.classList.add("d-block");
} 

else if (projet3.classList.contains("d-block")){
  projet3.classList.add("d-none");
  projet3.classList.remove("d-block");
  projet1.classList.remove("d-none");
  projet1.classList.add("d-block");

} 
};

btnBefore.addEventListener("click", showBefore) ;
function showBefore() {
  const projet1 = document.querySelector("#projet1");
const projet2 = document.querySelector("#projet2");
const projet3 = document.querySelector("#projet3");
if (projet1.classList.contains("d-block")){
  projet1.classList.add("d-none");
  projet1.classList.remove("d-block");
  projet3.classList.remove("d-none");
  projet3.classList.add("d-block");
} 

else if (projet2.classList.contains("d-block")){
  projet2.classList.add("d-none");
  projet2.classList.remove("d-block");
  projet1.classList.remove("d-none");
  projet1.classList.add("d-block");
} 

else if (projet3.classList.contains("d-block")){
  projet3.classList.add("d-none");
  projet3.classList.remove("d-block");
  projet2.classList.remove("d-none");
  projet2.classList.add("d-block");

} 
};