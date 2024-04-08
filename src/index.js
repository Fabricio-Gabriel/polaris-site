let a1 = document.querySelector('.a1');

if (window.location.href.includes("portfolio.html")) {
    a1.classList.add("addContent");
} else {
    a1.classList.remove("addContent");
}