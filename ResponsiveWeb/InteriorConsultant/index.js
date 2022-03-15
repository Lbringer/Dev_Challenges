
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const html = document.querySelector("html");
const body = document.querySelector("body");

menuIcon.addEventListener('click', () => {
    menu.style.display = "flex";
    html.style.margin = "0";
    html.style.height = "100%";
    html.style.overflow = "hidden";
    body.style.margin = "0";
    body.style.height = "100%";
    body.style.overflow = "hidden";

})
close.addEventListener('click', () => {
    menu.style.display = "none";
    html.style.height = "fit-content";
    html.style.overflow = "visible";
    body.style.margin = "none";
    body.style.height = "fit-content";
    body.style.overflow = "visible";
})
// html, body { margin: 0; height: 100 %; overflow: hidden }