window.onscroll = function () { stickyNav() };
let navbar = document.querySelector("header");
let subcategories = Array.from(document.getElementsByClassName("subcategories"));

function stickyNav() {
    if (window.scrollY >= 0) {
        navbar.classList.add("sticky");
        //for (let i = 0; i < subcategories.length; i++) {
        //subcategories[i].style.margin = "10px 0px 0px 0px";
        //};
        //navbar.style.margin = "-12px 0px 0px 0px";

    }
    else {
        navbar.classList.remove("sticky");
        //for (let i = 0; i < subcategories.length; i++) {
        // subcategories[i].style.margin = "0px 0px 0px 0px";
        //}
        //navbar.style.margin = "-12px 0px 0px 0px";

    }
};

const track = document.querySelector(".carousel_contents");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
};

function moveCarousel() {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    let nextSlide;
    let nextDot;
    if (currentSlide.classList.contains("last-slide")) {
        nextSlide = slides[0];
        nextDot = dots[0];
    }
    else {
        nextSlide = currentSlide.nextElementSibling;
        nextDot = currentDot.nextElementSibling;
    }
    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
}

let timer = setInterval(moveCarousel, 4000);


prevButton.addEventListener("click", event => {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    let prevSlide;
    let prevDot
    if (currentSlide.classList.contains("first-slide")) {
        prevSlide = slides[2];
        prevDot = dots[2];
    }
    else {
        prevSlide = currentSlide.previousElementSibling;
        prevDot = currentDot.previousElementSibling;
    }

    clearInterval(timer);
    timer = setInterval(moveCarousel, 4000);
    moveSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

nextButton.addEventListener("click", event => {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    let nextSlide;
    let nextDot;
    if (currentSlide.classList.contains("last-slide")) {
        nextSlide = slides[0];
        nextDot = dots[0];
        //track.classList.add("carousel_faster");
    }
    else {
        nextSlide = currentSlide.nextElementSibling;
        nextDot = currentDot.nextElementSibling;
        //track.classList.remove("carousel_faster");
    }

    clearInterval(timer);
    timer = setInterval(moveCarousel, 4000);
    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

});

dotsNav.addEventListener("click", event => {
    const targetDot = event.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    const targetSlide = slides[targetIndex];

    clearInterval(timer);
    timer = setInterval(moveCarousel, 4000);

    moveSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);
});

const promoTrack = document.querySelector(".promo");
const promoSlides = Array.from(promoTrack.children);
const rightButton = document.querySelector(".promotions_button--right");
const leftButton = document.querySelector(".promotions_button--left");
const pageSize = promoSlides[0].getBoundingClientRect();
const pageWidth = pageSize.width;

const setPagePosition = (page, index) => {
    page.style.left = pageWidth * index + "px";
};

const moveToPage = (promoTrack, currentPage, targetPage) => {
    promoTrack.style.transform = "translateX(-" + targetPage.style.left + ")";
    currentPage.classList.remove("current-page");
    targetPage.classList.add("current-page");
};

promoSlides.forEach(setPagePosition);

leftButton.addEventListener("click", event => {
    let currentPage = promoTrack.querySelector(".current-page");
    let prevPage;
    if (currentPage.classList.contains("first-page")) {
        prevPage = promoSlides[2];
    }
    else {
        prevPage = currentPage.previousElementSibling;

    }
    moveToPage(promoTrack, currentPage, prevPage);
});

rightButton.addEventListener("click", event => {
    let currentPage = promoTrack.querySelector(".current-page");
    let nextPage;
    if (currentPage.classList.contains("last-page")) {
        nextPage = promoSlides[0];

    }
    else {
        nextPage = currentPage.nextElementSibling;
    }
    moveToPage(promoTrack, currentPage, nextPage);
});

let total = document.querySelector(".total");
let numberOfProducts = document.querySelector(".numberOnCart");
let cartList = document.querySelector(".listCart");
let showCart = document.querySelector(".cart");
let hideCart = document.querySelector(".closeCart");
let shoppingCard = document.querySelector(".cartCard");
let body = document.body;
let categories = Array.from(document.getElementsByClassName("category"));
let carousel1 = document.querySelector(".carousel");
let logo = document.querySelector(".logo");
let search = document.querySelector(".search");
let section3 = document.querySelector(".section3");
let carousel2 = document.querySelector(".promotions_carousel");
let footer = document.querySelector("footer");


function showingCart() {
    showCart.addEventListener("click", () => {
        shoppingCard.classList.add("showCart");
    })
}

function hidingCart() {
    hideCart.addEventListener("click", () => {
        shoppingCard.classList.remove("showCart");
    })
}

showingCart();

hidingCart();

if (shoppingCard.classList.contains("showCart")) {
    body.addEventListener("click", () => {
        shoppingCard.classList.remove("showCart");
    });
}

carousel1.addEventListener("click", () => {
    shoppingCard.classList.remove("showCart");
});

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
        shoppingCard.classList.remove("showCart");
    }
    )
};

logo.addEventListener("click", () => {
    shoppingCard.classList.remove("showCart");
});

search.addEventListener("click", () => {
    shoppingCard.classList.remove("showCart");
});

section3.addEventListener("click", () => {
    shoppingCard.classList.remove("showCart");
});

footer.addEventListener("click", () => {
    shoppingCard.classList.remove("showCart");
});

let products = [
    {
        id: 1,
        name: "Beetroot & Spinach",
        image: "Salad1.png",
        price: 8.99
    },
    {
        id: 2,
        name: "Tomato & Mozzarella",
        image: "Salad2.png",
        price: 6.99
    },
    {
        id: 3,
        name: "Seafood Salad",
        image: "Salad3.png",
        price: 9.99
    },
    {
        id: 4,
        name: "Green Salad",
        image: "Salad4.png",
        price: 8.99
    },
    {
        id: 5,
        name: "Vegetable Mix",
        image: "Salad5.png",
        price: 9.99
    },
    {
        id: 6,
        name: "Chicken Dish",
        image: "Main1.png",
        price: 13.99
    },
    {
        id: 7,
        name: "Boneless Pork Ribs",
        image: "Main2.png",
        price: 13.99
    },
    {
        id: 8,
        name: "Pork Steak",
        image: "Main3.png",
        price: 11.99
    },
    {
        id: 9,
        name: "Rice & Vegetables",
        image: "Main4.png",
        price: 10.99
    },
    {
        id: 10,
        name: "Cream Soup",
        image: "Main5.png",
        price: 10.99
    },
    {
        id: 11,
        name: "Pancakes",
        image: "Dessert1.png",
        price: 7.99
    },
    {
        id: 12,
        name: "Rasberry Cheesecake",
        image: "Dessert2.png",
        price: 8.99
    },
    {
        id: 13,
        name: "White Cake",
        image: "Dessert3.png",
        price: 9.99
    },
    {
        id: 14,
        name: "Tiramisu",
        image: "Dessert4.png",
        price: 9.99
    },
    {
        id: 15,
        name: "Creamy Spongecake",
        image: "Dessert5.png",
        price: 7.99
    }];

let productsArray1 = Array.from(products);

function addProducts1() {
    for (i = 0; i < productsArray1.slice(10).length; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "wrapper-box";
       let boxItems1 = `<img class = "promo_image" src="./images/${products[i].image}"/>
        <div class="productTitle"><a class="titleOfProduct" href="#pick">${products[i].name}</a></div>
        <span class="currency-front">$</span>
        <span class="amountOfMoney">${products[i].price}</span>
        <span class="currency-back">lv</span>
        <img  class="shoppingCart" src="images/Cart.png" alt="Shopping cart">`;
        newDiv.innerHTML = boxItems1;
        document.querySelector(".first-page").appendChild(newDiv);
    }
};

function addProducts2() {
    for (i = 5; i < 10; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "wrapper-box";
        let boxItems2 = `<img class = "promo_image" src="./images/${products[i].image}"/>
        <div class="productTitle"><a class="titleOfProduct" href="#pick">${products[i].name}</a></div>
        <span class="currency-front">$</span>
        <span class="amountOfMoney">${products[i].price}</span>
        <span class="currency-back">lv</span>
        <img class="shoppingCart" src="images/Cart.png" alt="Shopping cart">`;
        newDiv.innerHTML = boxItems2;
        document.querySelector(".second-page").appendChild(newDiv);
    }
};

function addProducts3() {
    for (i = 10; i < 15; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "wrapper-box";
        let boxItems3 = `<img class = "promo_image" src="./images/${products[i].image}"/>
        <div class="productTitle"><a class="titleOfProduct" href="#pick">${products[i].name}</a></div>
        <span class="currency-front">$</span>
        <span class="amountOfMoney">${products[i].price}</span>
        <span class="currency-back">lv</span>
        <img class="shoppingCart" src="images/Cart.png" alt="Shopping cart">`;
        newDiv.innerHTML = boxItems3;
        document.querySelector(".last-page").appendChild(newDiv);
    }
};

addProducts1();
addProducts2();
addProducts3();

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click",removeAllItems);

let removeCartButtons = document.getElementsByClassName("remove-button");
for (let i=0;i<removeCartButtons.length;i++){
    let removeButton = removeCartButtons[i];
    removeButton.addEventListener("click", removeCartItem)};

let quantityInputs = document.getElementsByClassName("card-quantity");
for (let i=0;i<quantityInputs.length;i++){
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged)
}

function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updateCart();
}

function removeCartItem(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.remove();

    updateCart()
};

function removeAllItems(event){
let buttonClicked = event.target;
cartList[0];

if(buttonClicked){
    if(cartList.children.length != 0){
    alert("Thank you for your purchase!"); 
    while(cartList.children[0]){
        cartList.removeChild(cartList.children[0]);
}
}}

    updateCart()
}


let addingToCart = document.getElementsByClassName("shoppingCart");
for (let i=0;i<addingToCart.length;i++){
    let button = addingToCart[i];
    button.addEventListener("click", addToCartClicked)}

    function addToCartClicked(event){
        let button = event.target
        let shopItem = button.parentElement;
        let title = shopItem.querySelector(".titleOfProduct").innerText
        let price = shopItem.querySelector(".amountOfMoney").innerText
        let image = shopItem.querySelector(".promo_image").src
        addItemToCart(title,price,image);
        updateCart();
    }

    function addItemToCart(title,price,image){
        
        let cartItem = document.createElement("li");
        cartItem.className = `cart-wrapper`;
        let cartItems = document.querySelector(".listCart");
        let cartItemNames = cartItems.getElementsByClassName("cartItem-title");
       
        for(let i=0; i<cartItemNames.length;i++){
            if(cartItemNames[i].innerText === title){
                alert("Item is already in cart");
                return
            }
        }

        let cartItemContent = `<div><img class="cartImage" src="${image}"></div>
        <div class="Ptitle"><span class="cartItem-title">${title}</span></div>
          <div class="cartPrice">$${price}</div>
           <input class="card-quantity" type="number" value="${1}">
           <button class="remove-button">X</button>`
           cartItem.innerHTML = cartItemContent;
        
        cartItems.append(cartItem);
        cartItem.getElementsByClassName("remove-button")[0].addEventListener("click",removeCartItem);
        cartItem.getElementsByClassName("card-quantity")[0].addEventListener("change", quantityChanged);
        
    }

function updateCart(){
    
    cartList[0];
    let cartItems = cartList.getElementsByClassName("cart-wrapper");
    let totalPrice = 0;
    let totalQuantity = 0;
    for(let i=0;i<cartItems.length;i++){
        let cartItem = cartItems[i];
        let itemPrice = cartItem.querySelector(".cartPrice");
        let itemQuantity = cartItem.querySelector(".card-quantity");
        let price = parseFloat(itemPrice.innerText.replace("$",""));
        let quantity = itemQuantity.value;
        let q = Number(quantity);
        totalPrice = totalPrice + (price*quantity);
        totalQuantity = totalQuantity + q;
}

totalPrice = Math.round(totalPrice*100)/100;
let total = document.querySelector(".total");
let numberOfProducts = document.querySelector(".numberOnCart");
total.innerText = "$" + totalPrice;

if (totalQuantity >= 10 && totalQuantity < 100){
    numberOfProducts.classList.remove("cartNumberOver100");
    numberOfProducts.classList.add("cartNumberOver10");
    numberOfProducts.innerText = totalQuantity;
}
else if(totalQuantity > 99){
    numberOfProducts.classList.remove("cartNumberOver10");
    numberOfProducts.classList.add("cartNumberOver100");
    numberOfProducts.innerText = `${99 + "+"}`;
}

else{
    numberOfProducts.classList.remove("cartNumberOver10");
    numberOfProducts.classList.remove("cartNumberOver100");
    numberOfProducts.innerText = totalQuantity;
}

}

