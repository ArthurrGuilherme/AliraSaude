function scrollto(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#Planos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto(".Planos")

    console.log("go to up")
})