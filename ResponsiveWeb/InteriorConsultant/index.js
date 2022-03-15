
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

menuIcon.addEventListener('click', () => {
    menu.style.display = "flex";
})
close.addEventListener('click', () => {
    menu.style.display = "none";
})