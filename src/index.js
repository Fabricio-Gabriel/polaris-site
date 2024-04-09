let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');

if (window.location.href.includes("portfolio.html")) {
    a1.classList.add("addContent");
} else {
    a1.classList.remove("addContent");
}

if (window.location.href.includes("index.html")) {
    a2.classList.add("addContent");
} else {
    a2.classList.remove("addContent");
}