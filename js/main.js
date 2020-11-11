let toggleNavStatus = false;

function toggleNav() {
    let gitNavUl= document.querySelector(".navbar-list");
    
    if(toggleNavStatus==false) {
        gitNavUl.style.display = "block";
        toggleNavStatus= true;
    }
    else if(toggleNavStatus==true) {
        gitNavUl.style.display = "none";
        toggleNavStatus= false;
    }
}


let getNav =  document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        getNav.classList.add("With-background");
    }
       
   else {
        getNav.classList.remove("With-background");
   }
}
window.onscroll = function() {scrollFunction()};