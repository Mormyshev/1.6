/*-------------------------MAIN-HEADER-------------------------*/

function myFunction() {
    var moreText = document.getElementById("text-item-mob");
    var btnMore = document.getElementById("button__text--more");
    var btnLess = document.getElementById("button__text--less");
    var btnImg = document.getElementById("button__img");
    if (btnLess.style.display === "none") {
         moreText.style.display = "inline";
        btnMore.style.display = "none";
        btnLess.style.display = "block";
        btnImg.style.transform = "rotate("+ 180 +"deg)";
    } 
    else {
        moreText.style.display = "none";
        btnMore.style.display = "block";
        btnLess.style.display = "none"
        btnImg.style.transform = "rotate("+ 0 +"deg)";
    }
}



/*-------------------------SLIDER-------------------------*/


    new Swiper(".swiper-brands", {
        pagination: {
            el: ".swiper-pagination",
            clicable: true,
            dunamicBullets: true,
        },
        spaceBetween: -64,
    });
    new Swiper(".swiper-price", {
        pagination: {
            el: ".swiper-pagination",
            clicable: true,
            dunamicBullets: true,
        },
        spaceBetween: -44 ,
    });
    new Swiper(".swiper-category", {
        pagination: {
            el: ".swiper-pagination",
            clicable: true,
            dunamicBullets: true,
        },
        spaceBetween: -64 ,
    });

/*----------------------MAIN-CARD-BRANDS-------------------------*/
if(window.innerWidth > 767 && window.innerWidth < 900) {
    var count = 6;
    var countCategory = 3;
}
    
if(window.innerWidth > 899) {
    var count = 8;
    var countCategory = 4;
}
    
var brandsCards = document.querySelectorAll('.brands-slide');
var buttonOff = document.querySelector('.buttonOff');
var buttonOn = document.querySelector('.buttonOn');
buttonOff.style.display = "none";
buttonOn.style.display = "flex";
for (var i = count; i < brandsCards.length; i++) {
    brandsCards[i].style.display = "none"; 
}
/*----------------------MAIN-CARD-FUNCTION-------------------------*/
function openCardsBrands() {
    var icon = document.querySelector('.button-on__img');
    if(brandsCards[count].style.display === 'none'){
        for (var i = count; i < brandsCards.length; i++) {
            brandsCards[i].style.display = "flex"; 
        }
        buttonOff.style.display = "flex";
        buttonOn.style.display = "none";
    } else {
        for (var i = count; i < brandsCards.length; i++) {
            brandsCards[i].style.display = "none"; 
        } 
        buttonOff.style.display = "none";
        buttonOn.style.display = "flex";
    }
}
/*----------------------MAIN-CARD-CATEGORY-------------------------*/
var brandsCategoryCards = document.querySelectorAll('.category-slide');
var buttonCategoryOff = document.querySelector('.category-buttonOff');
var buttonCategoryOn = document.querySelector('.category-buttonOn');
buttonCategoryOff.style.display = "none";
buttonCategoryOn.style.display = "flex";
for (var i = countCategory; i < brandsCategoryCards.length; i++) {
    brandsCategoryCards[i].style.display = "none"; 
}
function openCardsCategory() {
    var icon = document.querySelector('.button-on__category-img');
    if(brandsCategoryCards[countCategory].style.display === 'none'){
        for (var i = countCategory; i < brandsCategoryCards.length; i++) {
            brandsCategoryCards[i].style.display = "flex"; 
        }
        buttonCategoryOff.style.display = "flex";
        buttonCategoryOn.style.display = "none";
    } else {
        for (var i = countCategory; i < brandsCategoryCards.length; i++) {
            brandsCategoryCards[i].style.display = "none"; 
        } 
        buttonCategoryOff.style.display = "none";
        buttonCategoryOn.style.display = "flex";
    }
}






var btnImgBurger = document.querySelector('.menu-main');
var btnImgBurgerX = document.querySelector('.menu-left');
var leftMenu = document.querySelector('.page__menu');
var mainSite = document.querySelector('.page-main');
var page = document.querySelector('.page');
var body = document.querySelector('body');
var menu = document.querySelector('meenu');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
var footerMenu = document.querySelector('.footer-menu');
var btnImgCheck = document.querySelector('.menu__item-btn--checkstatus');


var menu = document.querySelector('.meenu');
function openMenu() {
    
    page.style.border = "0px";
    page.style.background = "#fff";
    menu.style.boxShadow = '16px 0px 52px 0px #0e185033';
    mainSite.style.display = "none";
    btnImgBurger.style.display = "none";
    footer.style.display = "none";
    menu.style.display = "flex";
}
function closeMenu() {
    menu.style.display = "none";
    location.reload();
}




var titleForm = document.querySelector('.checkstatus__title');
var titleFormCall = document.querySelector('.checkstatus__title--call');
var form = document.querySelector('.page__form');
var input = document.querySelectorAll('.form__text');
var inputCall = document.querySelector('.form__text-call');

function openFormCheck() {
    form.style.display = "flex"
    mainSite.style.display = "none";
    btnImgBurger.style.display = "none";
    footer.style.display = "none";
    titleFormCall.style.display = "none";
    titleForm.style.display = "flex";
    menu.style.display = "none";
}
function openFormCall() {
    form.style.display = "flex"
    mainSite.style.display = "none";
    btnImgBurger.style.display = "none";
    footer.style.display = "none";
    titleFormCall.style.display = "flex";
    titleForm.style.display = "none";
    menu.style.display = "none";
    for (var i = 0; i < input.length; i++) {
        input[i].style.display = "none"; 
    }
    inputCall.style.display = "block";
}
function closeForm() {
    location.reload();
}

