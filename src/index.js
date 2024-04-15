let portfolio = document.querySelector('.port');
let index = document.querySelector('.index');
let sobre = document.querySelector('.sobre');

const viewPage = (pagina, el) => {
    if (window.location.href.includes(pagina)) {
        el.classList.add("addContent");
    } else {
        el.classList.remove("addContent");
    }
};

viewPage("portfolio.html", portfolio);
viewPage("index.html", index);
viewPage("sobre-nos.html", sobre);


// if (window.location.href.includes("portfolio.html")) {
//     portfolio.classList.add("addContent");
// } else {
//     portfolio.classList.remove("addContent");
// }

// if (window.location.href.includes("index.html")) {
//     index.classList.add("addContent");
// } else {
//     index.classList.remove("addContent");
// }

// if (window.location.href.includes('sobre-nos.html')) {
//     sobre.classList.add('addContent');
// } else {
//     sobre.classList.add
// }