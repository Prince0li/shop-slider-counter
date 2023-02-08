
let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".item-details");
let btnClose = document.querySelector(".btn-close");


moreDetailsBtns.forEach((item) =>
    item.addEventListener("click", function () {
        openModal();
    })
);

btnClose.addEventListener("click", function () {
    closeModal();
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}


let likeBtns = document.querySelectorAll(".btn-like");

likeBtns.forEach((item) =>
    item.addEventListener("click", function () {
        item.classList.toggle("btn-like-active");
    })
);


function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}

window.addEventListener("scroll", showModalByScroll);

// слайдер

$(".slider-content").slick({
    autoplay: true,
    dots: true,
    draggable: true,
});


let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let productsCount = document.querySelectorAll(".product-quantity input");



function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };

    this.toggleButtonState();

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    };

    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(
        "click",
        this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
        "click",
        this.decrement.bind(this)
    );
}

let counters = [];
productsCount.forEach(
    (item, i) =>
        (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item))
);





let productsCountEl = document.querySelector(".cart-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart");
if (+productsCountEl.textContent === 0) {
    productsCountEl.classList.add("hide");
}

addToCartBtns.forEach((item, i) =>
    item.addEventListener("click", function () {
        productsCountEl.textContent =
            +productsCountEl.textContent + +productsCount[i].value;
        if (+productsCountEl.textContent !== 0) {
            productsCountEl.classList.remove("hide");
        }
    })
);

AOS.init();
