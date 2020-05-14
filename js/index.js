const header_DOM = document.querySelector(".header")

window.addEventListener("scroll",function(event){
    if(window.scrollY > 550){
        header_DOM.classList.add("background-orange");
        console.log("Entered")
        console.log(header_DOM)
    } else {
        header_DOM.classList.remove("background-orange");
    }
    
})