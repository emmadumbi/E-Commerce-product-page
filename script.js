const increaseBtn = document.querySelector('.increase-btn');
const quantityEl = document.querySelector('.quantity-el');
const decreaseBtn = document.querySelector('.decrease-btn');
const cartQuantityEl = document.querySelector('.cart-quantity-el');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const checkOutCartQuantity = document.querySelector('.checkout-cart-quantity');
const totalPrice = document.querySelector('.total-price');
const emptyCart = document.querySelector('.empty-cart-container');
const filledCart = document.querySelector('.filled-cart-container');
const cartIcon = document.querySelector('.cart-icon');
const deleteCart = document.querySelector('.delete-cart');
const closeMenuBtn = document.querySelector('.close-menu');
const overLay = document.querySelector('.overlay');
const openMenuBtn = document.querySelector('.open-menu');

// Initialize Swiper


function renderPage() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  
  
  
  let cartQuantity = Number(localStorage.getItem('cartQuantity')) || 0;
  
  let initialQuantity = 0;
  
  filledCart.style.display = 'none'
  emptyCart.style.display = 'none'
  if (cartQuantity === 0) {
    cartQuantityEl.style.display = 'none'
  }
  
  function updateQuantityEl() {
    quantityEl.textContent = initialQuantity;
  }
  updateQuantityEl();
  
  function updateCartQuantityEl() {
    cartQuantityEl.textContent = cartQuantity;
    checkOutCartQuantity.textContent = cartQuantity;
  };
  updateCartQuantityEl();
  
  function addToCart() {
    cartQuantity += initialQuantity;
    updateCartQuantityEl();
  };
  
  function calculateTotal() {
    let productPrice = 125;
    const total = productPrice * cartQuantity;
    totalPrice.textContent = `$${total}.00`
  };
  calculateTotal();
  
  function saveToStorage() {
    localStorage.setItem('cartQuantity', String(cartQuantity));
  }
  
  increaseBtn.addEventListener('click', () => {
    initialQuantity++;
    updateQuantityEl();
  });
  
  decreaseBtn.addEventListener('click', () => {
    if (!initialQuantity <= 0) {
      initialQuantity--;
      updateQuantityEl();
    }
  });
  
  cartIcon.addEventListener('click', () => {
    if (cartQuantity === 0) {
      emptyCart.style.display = 'block'
    } else if (cartQuantity > 0) {
      filledCart.style.display = 'block'
    }
  });
  
  addToCartBtn.addEventListener('click', () => {
    addToCart();
    calculateTotal();
    saveToStorage();
    cartQuantityEl.style.display = 'block'
  });
  
  deleteCart.addEventListener('click', () => {
    cartQuantity = 0;
    localStorage.removeItem('cartQuantity');
    renderPage();
  });
  
  closeMenuBtn.addEventListener('click', () => {
    overLay.classList.remove('show-mobileNav');
  });
  
  openMenuBtn.addEventListener('click', () => {
    overLay.classList.add('show-mobileNav');
  });
};
renderPage();