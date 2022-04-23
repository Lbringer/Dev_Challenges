let count1 = 1;
let count2 = 1;
let minus1 = document.querySelector("#minus1");
let d1 = document.querySelector("#d1");
let add1 = document.querySelector("#add1");
let minus2 = document.querySelector("#minus2");
let d2 = document.querySelector("#d2");
let add2 = document.querySelector("#add2");
let res = document.querySelector("#res");
let form = document.querySelector("form");

minus1.addEventListener("click", () => {
    if (count1 > 1)
        count1--;
    d1.innerHTML = `${count1}`;
    res.innerHTML = `$${54.99 * count1 + 74.99 * count2 + 19}`
});
add1.addEventListener("click", () => {
    if (count1 >= 1)
        count1++;
    d1.innerHTML = `${count1}`;
    res.innerHTML = `$${54.99 * count1 + 74.99 * count2 + 19}`
});
minus2.addEventListener("click", () => {
    if (count2 > 1)
        count2--;
    d2.innerHTML = `${count2}`;
    res.innerHTML = `$${54.99 * count1 + 74.99 * count2 + 19}`
});
add2.addEventListener("click", () => {
    if (count2 >= 1)
        count2++;
    d2.innerHTML = `${count2}`;
    res.innerHTML = `$${54.99 * count1 + 74.99 * count2 + 19}`
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Successfull Validation");
})


