const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
if (burger) {
    burger.addEventListener("click", (e) => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}