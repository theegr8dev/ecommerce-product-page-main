// Btn
const btn_addItem = document.querySelector('.cta__add');
const btn_removeItem = document.querySelector('.cta__remove');
const btn_addCart = document.querySelector('.cta__btn');
const btn_cart = document.querySelector('.nav__basket--cart');
const btn_thumbnail = document.querySelectorAll('.main__lighthouse--thumbnail');
const btn_navItem = document.querySelector('.nav__items');
const btn_toggleMenu = document.querySelector('.nav__toggle-bar');
const btn_closeMobileMenuToggle = document.querySelector(
	'.mobile-menu__btn--close'
);
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverLay = document.querySelector('.mobile-menu__overlay');
// Labels
const label_productQuantity = document.querySelector('.cta__number');
const label_productQuantityCart = document.querySelector('.product-quantity');

//
const container = document.querySelector('.container');
const mainProduct = document.querySelector('.main__left--product');
const cartDropDown = document.querySelector('.cartDropDown');
const model = document.querySelector('.modal');
const btn_closeModel = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');
let counter = 0;
let selected;

btn_navItem.addEventListener('click', function (event) {
	const clicked = event.target;

	if (clicked.classList.contains('nav__link')) {
		if (selected) selected.classList.remove('mouseOnNav');
		selected = clicked;
		clicked.classList.add('mouseOnNav');
	}
});

btn_addItem.addEventListener('click', function (event) {
	counter++;
	label_productQuantity.textContent = Number(counter);
});

btn_removeItem.addEventListener('click', function (event) {
	if (Number(label_productQuantity.textContent) > 0) counter--;
	label_productQuantity.textContent = Number(counter);
});

btn_addCart.addEventListener('click', function (event) {
	if (counter > 0) {
		label_productQuantityCart.textContent = counter;
		label_productQuantityCart.classList.remove('hidden');
	} else {
		label_productQuantityCart.classList.add('hidden');
	}
});

btn_cart.addEventListener('click', function (event) {
	if (Number(label_productQuantityCart.textContent) < 1)
		cartDropDown.classList.toggle('hidden');
	else {
		cartDropDown.innerHTML = `
        <h2>Cart</h2>
     <div class="product">
    
        <img
            src="images/image-product-1-thumbnail.jpg"
            alt=""
            class="product__img"
        />
        <p>
            Fall Limited Edition Sneaker $125.00 x ${counter}
            <span class="total-price">${(125 * counter).toFixed(2)}</span>
        </p>
        <img src="images/icon-delete.svg" alt="" />
    </div>
        <button class="cta__btn cart__btn">Checkout</button>
        `;
		cartDropDown.classList.toggle('hidden');
	}
});
const closeModel = function (event) {
	model.classList.add('hidden');
	overlay.classList.add('hidden');
};
const openModel = function (event) {
	model.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
btn_closeModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
btn_thumbnail.forEach(ele => {
	ele.addEventListener('click', openModel);
});

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !model.classList.contains('hidden')) {
		closeModel();
	}
});

const closeMobileMenu = function () {
	mobileMenu.classList.add('hidden');
	mobileOverLay.classList.add('hidden');
};

const openMobileMenu = function () {
	mobileMenu.classList.remove('hidden');
	mobileOverLay.classList.remove('hidden');
};
btn_toggleMenu.addEventListener('click', openMobileMenu);
btn_closeMobileMenuToggle.addEventListener('click', closeMobileMenu);
mobileOverLay.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !btn_toggleMenu.classList.contains('hidden')) {
		closeMobileMenu();
	}
});
