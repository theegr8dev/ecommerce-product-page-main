// Btn
const btn_addItem = document.querySelector('.cta__add');
const btn_removeItem = document.querySelector('.cta__remove');
const btn_addCart = document.querySelector('.cta__btn');
const btn_cart = document.querySelector('.nav__basket--cart');
const btn_mainProduct = document.querySelector('.main__left--product');
const btn_navItem = document.querySelector('.nav__items');
const btn_toggleMenu = document.querySelector('.nav__toggle-bar');
const btn_closeMobileMenuToggle = document.querySelector(
	'.mobile-menu__btn--close'
);
const btn_closeModel = document.querySelector('.btn--close-modal');

const btn_modalThumbnail = document.querySelectorAll('.modal__thumbnail');
const btn_mainThumbnail = document.querySelectorAll(
	'.main__lighthouse--thumbnail'
);

// Labels
const label_productQuantity = document.querySelector('.cta__number');
const label_productQuantityCart = document.querySelector('.product-quantity');

//
const mainProduct = document.querySelector('.main__left--product');
const modalProductImg = document.querySelector('.modal--product-1');

const cartDropDown = document.querySelector('.cartDropDown');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverLay = document.querySelector('.mobile-menu__overlay');
const mainProductImg = document.querySelector('.product-main-1');
let counter = 0;
let navSelected;
let thumbnailSelected = btn_mainThumbnail[0];
let spy = 0;

// Function that close any kind of modal
const close = function (event, ...element) {
	element.forEach(ele => {
		ele.classList.add('hidden');
	});
};
// Function that open any kind of modal
const open = function (event, ...element) {
	element.forEach(ele => {
		ele.classList.remove('hidden');
	});
};

const switchImg = function (ele) {
	if (thumbnailSelected && thumbnailSelected != ele) {
		thumbnailSelected.classList.remove('thumbnail-selected');
	}
	thumbnailSelected = ele;
};

const addImage = function (ele, i) {
	const src = i + 1;
	spy = i;
	// changing src attribute of main product
	ele.setAttribute('src', `images/image-product-${src}.jpg`);
};

btn_mainThumbnail.forEach((ele, i) => {
	ele.addEventListener('click', function (event) {
		addImage(mainProductImg, i);
		ele.classList.add('thumbnail-selected');
		switchImg(ele);
	});
});

btn_navItem.addEventListener('click', function (event) {
	const clicked = event.target;
	// nav Item Selection
	if (clicked.classList.contains('nav__link')) {
		if (navSelected) navSelected.classList.remove('mouseOnNav');
		navSelected = clicked;
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
	// insert cart if the product qunatity is more than 1
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

//  to close the modal
btn_closeModel.addEventListener('click', function (event) {
	close(event, model, overlay);
});
//  to close the modal when the overlay is clicked
overlay.addEventListener('click', function (event) {
	close(event, model, overlay);
});
//  open the product when main product is clicked
btn_mainProduct.addEventListener('click', function (event) {
	open(event, model, overlay);
	modalProductImg.setAttribute('src', mainProductImg.getAttribute('src'));

	const ele = btn_modalThumbnail[spy];
	ele.classList.add('thumbnail-selected');
	switchImg(ele);
});

// click event on the toggle icon to open the mobile menu
btn_toggleMenu.addEventListener('click', function (event) {
	open(event, mobileMenu, mobileOverLay);
});
// if the mobile Cancel is click it calls the close function
btn_closeMobileMenuToggle.addEventListener('click', function (event) {
	close(event, mobileMenu, mobileOverLay);
});
// if the overlay is click it calls the close function
mobileOverLay.addEventListener('click', function (event) {
	close(event, mobileMenu, mobileOverLay);
});

// if you press down the ESC calls the close function
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape' && !model.classList.contains('hidden')) {
		close(event, model, overlay);
	}
	if (event.key === 'Escape' && !btn_toggleMenu.classList.contains('hidden')) {
		close(event, mobileMenu, mobileOverLay);
	}
});

btn_modalThumbnail.forEach((ele, i) => {
	ele.addEventListener('click', function (event) {
		addImage(modalProductImg, i);
		switchImg(ele);
		ele.classList.add('thumbnail-selected');
	});
});
