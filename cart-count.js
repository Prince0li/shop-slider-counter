let counter = 0;
let cart = document.querySelector(".cart-content");
let buttonAddToCart = document.querySelectorAll(".add-to-cart");

for (let button of buttonAddToCart) {
    button.addEventListener("click", function () {
        counter += 1;
        cart.setAttribute("counter", counter);
        document.styleSheets[2].insertRule(
          ".cart-content::before {display: inline-block}",
          document.styleSheets[2].cssRules.length
        );
    });
}
