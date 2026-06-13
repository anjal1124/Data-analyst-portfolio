console.log("Portfolio Loaded Successfully");

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("shadow");
}
else{
navbar.classList.remove("shadow");
}

});