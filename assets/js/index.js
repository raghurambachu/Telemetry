const header_DOM = document.querySelector(".header")
const parallax_DOM = document.querySelector(".parallax");
const aliquam_DOM = document.querySelector(".aliquam");
const consequat_DOM = document.querySelector(".consequat");
const feugiat_DOM = document.querySelector(".feugiat");
const selectSection_DOM = document.querySelector(".select-section");
const aliquamBtn_DOM = document.querySelector(".btn-aliquam");
const consequatBtn_DOM = document.querySelector(".btn-consequat");
const feugiatBtn_DOM = document.querySelector(".btn-feugiat");
const hamburger_DOM = document.querySelector(".bars");

// Header Scroll on moving 100vh down.
window.addEventListener("scroll",function(event){
    if(window.scrollY > 550){
        header_DOM.classList.add("background-orange");
    } else {
        header_DOM.classList.remove("background-orange");
    }
    
})

// Select Section Button
selectSection_DOM.addEventListener("click",function(event){
    if(!event.target.closest(".btn-select"))return;
    let element = event.target;
    if(element.classList.contains("btn-aliquam")){
        aliquamBtn_DOM.style.background = "white";
        consequatBtn_DOM.style.background = "#f5f5f5";
        feugiatBtn_DOM.style.background = "#f5f5f5";
        // aliquamBtn_DOM.style.transform = "scale(1.06)";
        // consequatBtn_DOM.style.transform = "scale(1)";
        // feugiatBtn_DOM.style.transform = "scale(1)";
        aliquam_DOM.style.display = "block";
        consequat_DOM.style.display = "none";
        feugiat_DOM.style.display = "none";
    } else if (element.classList.contains("btn-consequat")){
        aliquamBtn_DOM.style.background = "#f5f5f5";
        consequatBtn_DOM.style.background = "white";
        feugiatBtn_DOM.style.background = "#f5f5f5";
        // aliquamBtn_DOM.style.transform = "scale(1)";
        // feugiatBtn_DOM.style.transform = "scale(1)";
        // consequatBtn_DOM.style.transform = "scale(1.06)";
        aliquam_DOM.style.display = "none";
        consequat_DOM.style.display = "block";
        feugiat_DOM.style.display = "none";
    } else {
        aliquamBtn_DOM.style.background = "#f5f5f5";
        consequatBtn_DOM.style.background = "#f5f5f5";
        feugiatBtn_DOM.style.background = "white";
        // aliquamBtn_DOM.style.transform = "scale(1)";
        // feugiatBtn_DOM.style.transform = "scale(1.06)";
        // consequatBtn_DOM.style.transform = "scale(1)";
        aliquam_DOM.style.display = "none";
        consequat_DOM.style.display = "none";
        feugiat_DOM.style.display = "block";
    }
})


// Parallax effect
window.addEventListener("scroll",function(event){
    let offset = window.pageYOffset;
    parallax_DOM.style.backgroundPositionY = `${offset * 0.95}px`;
})

// Turning hamburger to cross
hamburger_DOM.addEventListener("click",function(event){
    const label = event.target;
    if(label.classList.contains("fa-bars")){
        label.classList.remove("fa-bars");
        label.classList.add("fa-times");
    } else {
        label.classList.remove("fa-times");
        label.classList.add("fa-bars");
    }
})