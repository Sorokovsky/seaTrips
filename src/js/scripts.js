const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const header = document.querySelector("header");
if (header){
    document.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = "#1a4ed0"
        }else{
            header.style.backgroundColor = "transparent"
        }
    });
}
if (burger) {
    burger.addEventListener("click", (e) => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}