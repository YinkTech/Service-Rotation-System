
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

const success = document.getElementById("success");
const failed = document.getElementById("failed");
const waiting = document.getElementById("waiting");
const thead = document.getElementById("table-head");

const allshow = () => {
    success.style.display = 'table-row-group';
    failed.style.display = 'table-row-group';
    thead.style.display = 'table-row-group';
    waiting.style.display = 'table-row-group';
}

const successshow = () => {
    thead.style.display = 'table-row-group';
    success.style.display = 'table-row-group';
    failed.style.display = 'none';
    waiting.style.display = 'none';
}
const failedshow = () => {
    success.style.display = 'none';
    thead.style.display = 'table-row-group';
    failed.style.display = 'table-row-group';
    waiting.style.display = 'none';
}

const waitingshow = () => {
    success.style.display = 'none';
    failed.style.display = 'none';
    thead.style.display = 'table-row-group';
    waiting.style.display = 'table-row-group';
}


// Add active class to the current button (highlight it)
var headnav = document.getElementById("navDIV");
var btns = headnav.getElementsByClassName("nav-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Add activ class to the current button (highlight it)
var staBtn = document.getElementById("post-btn-group");
var gBtns = staBtn.getElementsByClassName("post-btn");
for (var i = 0; i < gBtns.length; i++) {
  gBtns[i].addEventListener("click", function() {
  var curent = document.getElementsByClassName("activ");
  curent[0].className = curent[0].className.replace(" activ", "");
  this.className += " activ";
  });
}
