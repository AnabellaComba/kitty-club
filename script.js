'use strict';
const products = [
  {
    "id": "bag",
    "name": "Mini bolso Hello Kitty",
    "category": "Bolsos",
    "price": 18900
  },
  {
    "id": "keychain",
    "name": "Llavero con moñito",
    "category": "Accesorios",
    "price": 4500
  },
  {
    "id": "pouch",
    "name": "Neceser rosa",
    "category": "Bolsos",
    "price": 9900
  },
  {
    "id": "bottle",
    "name": "Botella kawaii",
    "category": "Lifestyle",
    "price": 12500
  },
  {
    "id": "clips",
    "name": "Set de hebillas Kitty",
    "category": "Accesorios",
    "price": 5900
  },
  {
    "id": "notebook",
    "name": "Cuaderno de sueños",
    "category": "Lifestyle",
    "price": 7900
  }
];

const money = value => new Intl.NumberFormat('es-AR',
{
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0
}).format(value);
let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem('kitty-club-cart') || '{}');
  products.forEach(p => {
    if (Number.isInteger(saved?.[p.id]) && saved[p.id] > 0 && saved[p.id] <= 99) cart[p.id] = saved[p.id];
  });
} catch {
}
const dialog = document.querySelector('#cart-dialog');
function renderCart() {
  const list = document.querySelector('#cart-items');
  list.replaceChildren();
  let total = 0,
  count = 0;
  products.filter(p => cart[p.id]).forEach(p => {
    const qty = cart[p.id];
    total += p.price * qty;
    count += qty;
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = document
      .querySelector(`[data-id="${p.id}"]`)
      .closest('.product')
      .querySelector('img')
      .getAttribute('src');
    img.alt = '';
    const info = document.createElement('div');
    info.textContent = p.name;
    const detail = document.createElement('small');
    detail.textContent = qty + ' × ' + money(p.price);
    info.append(detail);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Quitar';
    remove.setAttribute('aria-label',
    'Quitar ' + p.name);
    remove.addEventListener('click',
    () => {
      delete cart[p.id];
      renderCart();
    });
    li.append(img,
    info,
    remove);
    list.append(li);
  });
  if (!count) {
    const li = document.createElement('li');
    li.textContent = 'Tu bolsa está esperando un favorito ♡';
    list.append(li);
  }
  document.querySelector('#cart-count').textContent = count;
  document.querySelector('#cart-total').textContent = money(total);
  document.querySelector('#clear-cart').disabled = !count;
  try {
    localStorage.setItem('kitty-club-cart',
    JSON.stringify(cart));
  } catch {
  }
}
let toastTimer;
document.querySelectorAll('.add').forEach(button => button.addEventListener('click',
() => {
  const id = button.dataset.id;
  cart[id] = Math.min((cart[id] || 0) + 1,
  99);
  renderCart();
  const toast = document.querySelector('#toast');
  toast.textContent = products.find(p => p.id === id).name + ' agregado a tu bolsa ♡';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.textContent = '';
  },
  3000);
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',
() => {
  document.querySelectorAll('[data-filter]').forEach(b => {
    const active = b === button;
    b.classList.toggle('active',
    active);
    b.setAttribute('aria-pressed',
    active);
  });
  document.querySelectorAll('.product').forEach(card => {
    card.hidden = button.dataset.filter !== 'Todos' && card.dataset.category !== button.dataset.filter;
  });
}));
document.querySelector('#open-cart').addEventListener('click',
() => dialog.showModal());
document.querySelector('#close-cart').addEventListener('click',
() => dialog.close());
dialog.addEventListener('click',
event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
document.querySelector('#clear-cart').addEventListener('click',
() => {
  cart = {
  };
  renderCart();
});
renderCart();
// Recordatorio para reemplazar "TU_FORM_ID" en el action del HTML por el ID proporcionado por Formspree
const form = document.querySelector('#contact-form');
form.addEventListener('submit',
async event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (form.action.includes('TU_FORM_ID')) {
    status.textContent = 'El formulario todavía no está conectado. Configurá el identificador de Formspree siguiendo el README.';
    return;
  }
  const submit = form.querySelector('[type="submit"]');
  submit.disabled = true;
  status.textContent = 'Enviando tu mensaje…';
  try {
    const response = await fetch(form.action,
 {
      method: 'POST',
      body: new FormData(form),
      headers:  {
        Accept: 'application/json'
      }
    });
    if (!response.ok) throw new Error('No se pudo enviar');
    form.reset();
    status.textContent = '¡Gracias! Tu mensaje se envió correctamente ♡';
  } catch {
    status.textContent = 'No pudimos enviar el mensaje. Revisá tu conexión e intentá nuevamente.';
  }   finally {
    submit.disabled = false;
  }
});
