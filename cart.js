const cart = [];
const cartTrigger = document.querySelector('.cart-trigger');
const cartDrawer = document.querySelector('#cart-drawer');
const cartItemsEl = document.querySelector('#cart-items');
const cartEmptyEl = document.querySelector('#cart-empty');
const cartSummaryEl = document.querySelector('#cart-summary');
const cartTotalEl = document.querySelector('#cart-total');
const cartCountEls = document.querySelectorAll('.cart-count');
const checkoutForm = document.querySelector('#checkout-form');
const checkoutError = document.querySelector('#checkout-error');

const cartFormat = value => `UGX ${value.toLocaleString('en-US')}`;
const priceNumber = value => Number(String(value).replace(/[^0-9]/g, ''));

function setCartOpen(open) {
  cartDrawer.classList.toggle('is-open', open);
  cartDrawer.setAttribute('aria-hidden', String(!open));
  cartTrigger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('cart-open', open);
}

function updateCart() {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCountEls.forEach(el => { el.textContent = quantity; el.hidden = quantity === 0; });
  cartEmptyEl.hidden = cart.length > 0;
  cartSummaryEl.hidden = cart.length === 0;
  cartTotalEl.textContent = cartFormat(total);
  cartItemsEl.innerHTML = cart.map((item, index) => `<div class="cart-line"><div><strong>${item.name}${item.size ? ` <small>${item.size}</small>` : ''}</strong><span>${cartFormat(item.price)} each</span></div><div class="cart-line-controls"><button type="button" data-cart-action="decrease" data-cart-index="${index}" aria-label="Decrease quantity">−</button><b>${item.quantity}</b><button type="button" data-cart-action="increase" data-cart-index="${index}" aria-label="Increase quantity">+</button></div></div>`).join('');
}

function addToCart(button) {
  const card = button.closest('.menu-card');
  const name = card.querySelector('h3').textContent;
  const size = button.dataset.size ? button.dataset.size[0].toUpperCase() + button.dataset.size.slice(1) : '';
  const priceSource = button.dataset.size ? button.querySelector('strong').textContent : card.querySelector('.menu-card-price').textContent;
  const price = priceNumber(priceSource);
  const key = `${name}-${size}`;
  const existing = cart.find(item => item.key === key);
  if (existing) existing.quantity += 1;
  else cart.push({ key, name, size, price, quantity: 1 });
  updateCart();
}

document.querySelector('#menu-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-add-item]');
  if (button) addToCart(button);
});

cartItemsEl.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;
  const item = cart[Number(button.dataset.cartIndex)];
  if (button.dataset.cartAction === 'increase') item.quantity += 1;
  else item.quantity -= 1;
  if (item.quantity < 1) cart.splice(Number(button.dataset.cartIndex), 1);
  updateCart();
});

cartTrigger.addEventListener('click', () => setCartOpen(true));
document.querySelectorAll('[data-cart-close], .cart-close').forEach(button => button.addEventListener('click', () => setCartOpen(false)));

checkoutForm.addEventListener('submit', event => {
  event.preventDefault();
  checkoutError.textContent = '';
  if (!cart.length) { checkoutError.textContent = 'Add at least one item to your order.'; return; }
  const form = new FormData(checkoutForm);
  const name = form.get('name').trim();
  const phone = form.get('phone').trim();
  const note = form.get('note').trim();
  if (name.length < 2 || phone.replace(/[^0-9+]/g, '').length < 7) { checkoutError.textContent = 'Please enter your name and a valid phone number.'; return; }
  const lines = cart.map(item => `${item.quantity} × ${item.name}${item.size ? ` (${item.size})` : ''} — ${cartFormat(item.price * item.quantity)}`).join(String.fromCharCode(10));
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = `Hello Drift & Dine Spot,\n\nI'm ${name}. I'd like to place this order:\n${lines}\n\nTotal: ${cartFormat(total)}\nPhone: ${phone}${note ? `\nNote: ${note}` : ''}`;
  window.open(`https://wa.me/256774258619?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

updateCart();
