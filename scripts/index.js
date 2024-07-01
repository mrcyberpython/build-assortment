// Каталог в шапке START
const MegaMenuList = document.querySelector("#Company-MegaMenu");
const MMListItem = MegaMenuList.querySelectorAll("li");
const MmTabsContent = document.querySelectorAll(".megamenu-tabcontent");

MMListItem.forEach((listItem, i) => {
  listItem?.addEventListener("mouseover", function () {
    var divID = listItem.getAttribute('data-href').toString();
    for (let el of MmTabsContent) el.style.display = 'none';
    for (let el of MMListItem) el.classList.remove("megamenu-active");
    document.getElementById(divID).style.display = "block";
    listItem.classList.add("megamenu-active");
  })
});


const h1 = document.querySelector(".header-down__button");
const h12 = document.querySelector(".container-fluid");
const catalogOff = document.querySelector(".header-catalog-off");
const catalogOn = document.querySelector(".header-catalog-on");

function handler1() {
  h12.classList.toggle("container-fluid-active");
  catalogOff.classList.toggle("header-catalog");
  catalogOn.classList.toggle("header-catalog-close");
};

h1?.addEventListener("click", handler1);
// Каталог в шапке END

// Поиск в шапке START
const h1Test = document.querySelector(".header__group-input");
const h12Test = document.querySelector(".container-fluid-search");

function handlerHeaderSearch() {
  h12Test.classList.toggle("container-fluid-active");
  h1Test.classList.toggle("header__group-input-active");
};

h1Test?.addEventListener("click", handlerHeaderSearch);
// Поиск в шапке END



// Количество товара START
function countFunc(count) {
  let btnPlus = count.querySelector('.add');
  let btnMinus = count.querySelector('.subtract');
  let field = count.querySelector('.js-number');
  let fieldValue = parseFloat(field.value, 10);

  btnMinus?.addEventListener('click', function () {
    if (fieldValue > 1) {
      fieldValue--;
      field.value = fieldValue;
    } else {
      return 1;
    }
  });
  btnPlus?.addEventListener('click', function () {
    fieldValue++;
    field.value = fieldValue;
  });

}
let counts = document.querySelectorAll('.button-card-wrapper');
counts.forEach(countFunc);
// Количество товара END




// Меню фильтра START
// Buttons
const filterMenuButton = document.querySelector(".catalog-filter-result__mobile")
const headerSearchMenuButton = document.querySelector(".header-mobile-search")
const mobileMenuCatalog = document.querySelector(".mobile-catalog")
const headerMenuButton = document.querySelector(".header-mobile-catalog")
const catalogMobileOff = document.querySelector(".header-catalog-mobile-off");
const catalogMobileOn = document.querySelector(".header-catalog-mobile-on");
const openContactButton = document.querySelectorAll(".header-top__city")

// Popup и Меню
const popupContact = document.querySelector(".popupcontact")
const popups = document.querySelectorAll(".popup")
const body = document.querySelector(".body")
const menuHeader = document.querySelector(".menu-header")
const menuSearch = document.querySelector(".menu-search")
const menuFilter = document.querySelector(".menu-filter")
const menuCatalog = document.querySelector(".menu-catalog")
const menus = document.querySelectorAll(".menu")

// Р¤СѓРЅРєС†РёРё
function handleOpenPopup(popup) {
  popup.classList.add("menu_active");
  document.addEventListener('keydown', handleKeyEscape);

  if (body.style.overflow === "hidden") {
    body.style.overflow = "unset";
  } else {
    body.style.overflow = "hidden";
  }
}

function handleClosePopup(popup) {
  popup.classList.remove("menu_active");
  document.removeEventListener('keydown', handleKeyEscape);

  if (body.style.overflow === "hidden") {
    body.style.overflow = "unset";
  } else {
    body.style.overflow = "hidden";
  }
}

function handleKeyEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.menu_active');
    handleClosePopup(openedPopup);
  }
}


// Р·Р°РєСЂС‹РІР°РµС‚ Р»СЋР±РѕР№ РїРѕРїР°Рї
menus.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    // РќРµ РїРѕР·РІРѕР»РёС‚ Р·Р°РєСЂС‹С‚СЊ РїСЂРё РЅР°Р¶Р°С‚РёРё РїРѕ РѕРєРЅСѓ СЃР°РјРѕРјСѓ
    if (evt.target.classList.contains("menu_active")) {
      handleClosePopup(popup);
    };
    // Р—Р°РєСЂРѕРµС‚ РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєСЂРµСЃС‚РёРє
    if (evt.target.classList.contains("menu__button-close")) {
      handleClosePopup(popup);
    };
    // Р—Р°РєСЂРѕРµС‚ РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° СЃСЃС‹Р»РєСѓ
    if (evt.target.classList.contains("header__link")) {
      handleClosePopup(popup);
    };
    // РџСЂРё СЂР°Р·СЂРµС€РµРЅРёРё РІС‹С€Рµ 600px РїРѕР·РІРѕР»СЏРµС‚ Р·Р°РєСЂС‹С‚СЊ РїСЂРё РЅР°Р¶Р°С‚РёРё РїРѕ РѕРєРЅСѓ
    if (window.outerWidth > 740) {
      handleClosePopup(popup);
    };
  });
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    // РќРµ РїРѕР·РІРѕР»РёС‚ Р·Р°РєСЂС‹С‚СЊ РїСЂРё РЅР°Р¶Р°С‚РёРё РїРѕ РѕРєРЅСѓ СЃР°РјРѕРјСѓ
    if (evt.target.classList.contains("menu_active")) {
      handleClosePopup(popup);
    };
    // Р—Р°РєСЂРѕРµС‚ РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° СЃСЃС‹Р»РєСѓ
    if (evt.target.classList.contains("popup__close")) {
      handleClosePopup(popup);
    };
  });
});

filterMenuButton?.addEventListener('click', function () {
  console.log("Clicked"),
    handleOpenPopup(menuFilter)
});

headerSearchMenuButton?.addEventListener('click', function () {
  console.log("Clicked"),
    handleOpenPopup(menuSearch)
});

mobileMenuCatalog?.addEventListener('click', function () {
  console.log("Clicked"),
    handleOpenPopup(menuCatalog)
});

openContactButton?.forEach(element =>
  element.addEventListener('click', function () {
    handleOpenPopup(popupContact)
  }));

function handler2() {
  menuHeader.classList.toggle("menu_active");
  catalogMobileOff.classList.toggle("header-catalog");
  catalogMobileOn.classList.toggle("header-catalog-close");

  if (body.style.overflow === "hidden") {
    body.style.overflow = "unset";
  } else {
    body.style.overflow = "hidden";
  }
};

headerMenuButton?.addEventListener("click", handler2);


// Показывать/скрывать характеристики для страницы product START
defailtMore = document.querySelectorAll(".product-container-info-color");
buttonDetailMore = document.querySelectorAll(".product-container-detail-more-info-close");
buttonDetailMinus = document.querySelector(".detail-minus");
buttonDetailPlus = document.querySelector(".detail-more");


function moreInfo() {
  buttonDetailPlus.style.display = getComputedStyle(buttonDetailPlus).display == 'block' ? 'none' : 'block';
  buttonDetailMinus.style.display = getComputedStyle(buttonDetailMinus).display == 'block' ? 'none' : 'block';

  defailtMore.forEach((listItem, i) => {
    listItem.classList.toggle("product-container-detail-more-info-disabled");
  });
};

buttonDetailMore?.forEach(function (likeIcon) {
  likeIcon.addEventListener("click", moreInfo);
});
// Показывать/скрывать характеристики для страницы product END

// Показывать описание для страницы product START
textMore = document.querySelectorAll(".text");
buttonTextlMore = document.querySelectorAll(".text-button");
buttonTextMinus = document.querySelector(".text-minus");
buttonTextPlus = document.querySelector(".text-more");


function moreInfoText() {
  buttonTextPlus.style.display = getComputedStyle(buttonTextPlus).display == 'block' ? 'none' : 'block';
  buttonTextMinus.style.display = getComputedStyle(buttonTextMinus).display == 'block' ? 'none' : 'block';

  textMore.forEach((listItem, i) => {
    listItem.classList.toggle("text-active");
  });
};

buttonTextlMore?.forEach(function (likeIcon) {
  likeIcon.addEventListener("click", moreInfoText);
});
// Показывать/скрывать описание для страницы product END



// document.addEventListener("DOMContentLoaded", function (event) { // <-- add this wrapper
//   let element = document.querySelectorAll('.offers__choose span');

//   if (element) {

//     element.forEach(function (el, key) {

//       el.addEventListener('click', function () {
//         console.log(key);

//         el.classList.toggle("offers__choose-active");

//         element.forEach(function (ell, els) {
//           if (key !== els) {
//             ell.classList.remove('offers__choose-active');
//           }
//           console.log(els);
//         });
//       });
//     });
//   }
// });

function countFunc(count) {
  let btnPlus = count.querySelector('.status-item-one');
  let btnMinus = count.querySelector('.status-item-two');

  btnMinus?.addEventListener('click', function () {
    btnMinus.classList.toggle("offers__choose-active");
    btnPlus.classList.toggle("offers__choose-active");
  });

  btnPlus?.addEventListener('click', function () {
    btnMinus.classList.toggle("offers__choose-active");
    btnPlus.classList.toggle("offers__choose-active");
  });

}
let ss = document.querySelectorAll('.offers__choose');
ss.forEach(countFunc);