let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



function myFunction() {
  let match = false;
  input = document.querySelector('#myInput');

  filter = input.value.toUpperCase()

  list_items = document.querySelectorAll("li")
  list_items.forEach(item => {

    a = item.getElementsByTagName("a")[0];

    txt = a.textContent || a.innerText;

    if (txt.toUpperCase().indexOf(filter) > -1) {
      match = true
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  })
  
  if (match === false) {
    document.querySelector(".p1").style.display = 'block';
  } else {
    document.querySelector(".p1").style.display = 'none';
  }
}

document.querySelector("#myInput").addEventListener('input', () => search())
