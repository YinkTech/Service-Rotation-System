home = document.getElementById('home');
about = document.getElementById('about');

let sideNav = document.querySelector('.sidebar');
let headers = document.querySelector('.header');


const opennav = () => {
    sideNav.style.display = 'block';
}

function forthSectionShow() {
    home.style.display = 'none';
    about.style.display = 'block';
}

home.style.display = 'block';
about.style.display = 'none';

// Add active class to the current button (highlight it)
var head = document.getElementById("myDIV");
var btns = head.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  btns.style.display = 'none';