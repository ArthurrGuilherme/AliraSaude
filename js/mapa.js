function scrollto(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#Planos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto(".Planos")

    console.log("go to up")
})
document.querySelector("#btnplano").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#planobtn")

    console.log("go to up")
})
document.querySelector("#Formulario").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#containerformulario")

    console.log("go to up")
})