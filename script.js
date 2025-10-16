const increaseBtn = document.querySelector('.increase-btn');
const quantityEl = document.querySelector('.quantity-el');
const decreaseBtn = document.querySelector('.decrease-btn');


let initialQuantity = 0;

function updateQuantityEl() {
  quantityEl.textContent = initialQuantity;
}
updateQuantityEl();

increaseBtn.addEventListener('click', () => {
  initialQuantity++;
  updateQuantityEl();
});

decreaseBtn.addEventListener('click', ()=>{
  if(!initialQuantity <= 0){
    initialQuantity--;
    updateQuantityEl();
  }
})