let card = document.querySelector(".card");
let popup = document.querySelector(".product__pop__up")
document.querySelector(".products")

function popUp() {
    popup.classList.add("open");
    document.querySelector(".products").style.display = "none";   
}

function back() {
    popup.classList.remove("open");
    document.querySelector(".products").style.display = "block";
}