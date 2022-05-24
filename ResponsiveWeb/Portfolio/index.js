const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const s1 = document.querySelector("#s1");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
let bool = false;
btn2.addEventListener("click", () => {
    btn1.style.fontWeight = "500";
    btn1.style.color = "black";
    btn1.style.backgroundColor = "white";
    btn1.style.border = "1px solid black"
    btn3.style.fontWeight = "500";
    btn3.style.color = "black";
    btn3.style.backgroundColor = "white";
    btn3.style.border = "1px solid black"
    btn2.style.color = "white";
    btn2.style.backgroundColor = "#4700D8";
    btn2.style.fontWeight = "600";
    btn2.style.border = "0";

    s1.style.display = "flex";
    s1.style.position = "static";
    s1.style.zIndex = "0";
    p4.style.display = "flex";
    p4.style.position = "static";
    p4.style.zIndex = "0";
    p5.style.display = "flex";
    p5.style.position = "static";
    p5.style.zIndex = "0";

    p6.style.display = "none";
    p6.style.position = "absolute";
    p6.style.zIndex = "1";

    link2.style.display = "flex";
    link2.style.position = "static";
    link2.style.zIndex = "0";
    if (bool) {
        a2.style.color = "white";
        a2.style.fontWeight = "600";
        link2.style.backgroundColor = "#4700d8";
        link2.style.border = "0"
        a1.style.color = "black";
        a1.style.fontWeight = "500";
        link1.style.backgroundColor = "white";
        link1.style.border = "1px solid black"
    }
    bool = false;
});
btn1.addEventListener("click", () => {
    btn2.style.fontWeight = "500";
    btn2.style.color = "black";
    btn2.style.backgroundColor = "white";
    btn2.style.border = "1px solid black"
    btn3.style.fontWeight = "500";
    btn3.style.color = "black";
    btn3.style.backgroundColor = "white";
    btn3.style.border = "1px solid black"
    btn1.style.color = "white";
    btn1.style.backgroundColor = "#4700D8";
    btn1.style.fontWeight = "600";
    btn1.style.border = "0";


    p6.style.display = "flex";
    p6.style.position = "static";
    p6.style.zIndex = "0";
    s1.style.display = "flex";
    s1.style.position = "static";
    s1.style.zIndex = "0";
    p4.style.display = "flex";
    p4.style.position = "static";
    p4.style.zIndex = "0";
    p5.style.display = "flex";
    p5.style.position = "static";
    p5.style.zIndex = "0";

    link2.style.display = "flex";
    link2.style.position = "static";
    link2.style.zIndex = "0";
    if (bool) {
        a2.style.color = "white";
        a2.style.fontWeight = "600";
        link2.style.backgroundColor = "#4700d8";
        link2.style.border = "0"
        a1.style.color = "black";
        a1.style.fontWeight = "500";
        link1.style.backgroundColor = "white";
        link1.style.border = "1px solid black"
    }
    bool = false;
});
btn3.addEventListener("click", () => {
    btn1.style.fontWeight = "500";
    btn1.style.color = "black";
    btn1.style.backgroundColor = "white";
    btn1.style.border = "1px solid black"
    btn2.style.fontWeight = "500";
    btn2.style.color = "black";
    btn2.style.backgroundColor = "white";
    btn2.style.border = "1px solid black"
    btn3.style.color = "white";
    btn3.style.backgroundColor = "#4700D8";
    btn3.style.fontWeight = "600";
    btn3.style.border = "0";


    p6.style.display = "flex";
    p6.style.position = "static";
    p6.style.zIndex = "0";

    s1.style.display = "none";
    s1.style.position = "absolute";
    s1.style.zIndex = "1";
    p4.style.display = "none";
    p4.style.position = "absolute";
    p4.style.zIndex = "1";
    p5.style.display = "none";
    p5.style.position = "absolute";
    p5.style.zIndex = "1";

    link2.style.display = "none";
    link2.style.position = "absolute";
    link2.style.zIndex = "1";
    a1.style.color = "white";
    a1.style.fontWeight = "600";
    link1.style.backgroundColor = "#4700d8";
    link1.style.border = "0"
    bool = true;

});
a2.addEventListener("click", () => {
    a2.style.color = "white";
    a2.style.fontWeight = "600";
    link2.style.backgroundColor = "#4700d8";
    link2.style.border = "0"
    a1.style.color = "black";
    a1.style.fontWeight = "500";
    link1.style.backgroundColor = "white";
    link1.style.border = "1px solid black"
})
a1.addEventListener("click", () => {
    a1.style.color = "white";
    a1.style.fontWeight = "600";
    link1.style.backgroundColor = "#4700d8";
    link1.style.border = "0"
    a2.style.color = "black";
    a2.style.fontWeight = "500";
    link2.style.backgroundColor = "white";
    link2.style.border = "1px solid black"
})