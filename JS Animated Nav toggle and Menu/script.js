var menuToggle = document.querySelector("#menu-toggle");
var activeElements = 
document.querySelectorAll(".active-element");
var toggleMenu = 
menuToggle.addEventListener("click", function(){
    //forEAch is not supported in IE11
    //activeElements.foreach(function(e)){
        //e.classList.toggle("active");
        //});
        for (var activated = 0; activated < activeElements.length; activated++){
            activeElements[activated].classList.toggle("active");
        }
    })        