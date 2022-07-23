
let sideNav = document.querySelector('.sidebar');
let headers = document.querySelector('.header');
let content = document.querySelector('.content');
let navOpen = document.querySelector('.bi-menu-button-wide');
let navcolse = document.querySelector('.bi-menu-button');

navcolse.style.display = 'none';


const opennav = () => {
    sideNav.style.display = 'block';
    navOpen.style.display = 'none';
    navcolse.style.display = 'block';
}

const closenav = () => {
    sideNav.style.display = 'none';
    navcolse.style.display = 'none';
    navOpen.style.display = 'block';
}


home = document.getElementById('home');
pOfficers = document.getElementById('pOfficers');
nominal = document.getElementById('nominal');
retiment = document.getElementById('retiment');
dueRetirement = document.getElementById('dueRetirement');
management = document.getElementById('management');

home.style.display = 'block';
pOfficers.style.display = 'none';
nominal.style.display = 'none';
retiment.style.display = 'none';
dueRetirement.style.display = 'none';
management.style.display = 'none';

function firstShow() {
    home.style.display = 'block';
    pOfficers.style.display = 'none';
    nominal.style.display = 'none';
    retiment.style.display = 'none';
    dueRetirement.style.display = 'none';
    management.style.display = 'none';
}


function secondShow() {
    home.style.display = 'none';
    pOfficers.style.display = 'block';
    nominal.style.display = 'none';
    retiment.style.display = 'none';
    dueRetirement.style.display = 'none';
    management.style.display = 'none';
}


function thirdShow() {
    home.style.display = 'none';
    pOfficers.style.display = 'none';
    nominal.style.display = 'block';
    retiment.style.display = 'none';
    dueRetirement.style.display = 'none';
    management.style.display = 'none';
}


function forthShow() {
    home.style.display = 'none';
    pOfficers.style.display = 'none';
    nominal.style.display = 'none';
    retiment.style.display = 'block';
    dueRetirement.style.display = 'none';
    management.style.display = 'none';
}

function fifthShow() {
    home.style.display = 'none';
    pOfficers.style.display = 'none';
    nominal.style.display = 'none';
    retiment.style.display = 'none';
    dueRetirement.style.display = 'block';
    management.style.display = 'none';
}

function sixShow() {
    home.style.display = 'none';
    pOfficers.style.display = 'none';
    nominal.style.display = 'none';
    retiment.style.display = 'none';
    dueRetirement.style.display = 'none';
    management.style.display = 'block';
}



// Add active class to the current button (highlight it)
var headnav = document.getElementById("navDIV");
var btns = headnav.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
