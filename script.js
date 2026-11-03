// ===== 1. MENU DATA =====
// Prices are in Indian rupees (₹).
const menu = {
  dosa: {
    title: 'Dosa',
    emoji: '🥞',
    img: 'images/dosa category.jpg',

    items: [
      {
        name: 'Plain Dosa',
        price: 50,
        desc: 'Thin, crispy golden dosa served with chutney and sambar.',
        img: 'images/plain dosa.jpg'
      },
      {
        name: 'Podi Dosa',
        price: 70,
        desc: 'Crispy dosa spread with spicy gunpowder (podi).',
        img: 'images/podi dosa.jpg'
      },
      {
        name: 'Ghee Dosa',
        price: 80,
        desc: 'Roasted in pure ghee for a rich aroma and crunch.',
        img: 'images/ghee dosa.jpg'
      },
      {
        name: 'Masala Dosa',
        price: 90,
        desc: 'Stuffed with spiced potato masala.',
        img: 'images/masala dosa.jpg'
      },
      {
        name: 'Onion Dosa',
        price: 85,
        desc: 'Topped with crunchy chopped onions and green chillies.',
        img: 'images/onion dosa.jpg'
      },
      {
        name: 'Paper Dosa',
        price: 100,
        desc: 'Extra-large, paper-thin and super crispy.',
        img: 'images/paper dosa.jpg'
      },
      {
        name: 'Rava Dosa',
        price: 95,
        desc: 'Lacy semolina dosa with pepper and cumin.',
        img: 'images/rava dosa.jpg'
      },
      {
        name: 'Mysore Masala Dosa',
        price: 110,
        desc: 'Red chutney spread inside with potato masala filling.',
        img: 'images/mysore dosa.jpg'
      },
      {
        name: 'Ghee Roast',
        price: 100,
        desc: 'Deep golden, extra crispy dosa roasted in ghee.',
        img: 'images/ghee roast.jpg'
      },
      {
        name: 'Set Dosa',
        price: 80,
        desc: 'Three soft, spongy mini dosas with vegetable kurma.',
        img: 'images/set dosa.jpg'
      }
    ]

  },
  idli: {
    title: 'Idli',
    emoji: '🍚',
    img: 'images/idli category.jpg',
    items: [
      {
        name: 'Plain Idli',
        price: 40,
        desc: 'Soft steamed rice cakes with chutney and sambar.',
        img: 'images/plain idli.jpg'
      },
      {
        name: 'Podi Idli',
        price: 60,
        desc: 'Idli tossed in gunpowder and sesame oil.',
        img: 'images/podi idli.jpg'
      },
      {
        name: 'Mini Idli',
        price: 65,
        desc: 'Bite-sized idlis dunked in hot sambar.',
        img: 'images/mini idli.jpg'
      },
      {
        name: 'Ghee Idli',
        price: 65,
        desc: 'Fluffy idlis drizzled with fragrant ghee.',
        img: 'images/ghee idli.jpg'
      },
      {
        name: 'Sambar Idli',
        price: 70,
        desc: 'Idlis soaked in piping hot vegetable sambar.',
        img: 'images/sambar idli.jpg'
      },
      {
        name: 'Thatte Idli',
        price: 70,
        desc: 'Large, plate-shaped soft idli served with chutney.',
        img: 'images/thatte idli.jpg'
      },
      {
        name: 'Kanchipuram Idli',
        price: 80,
        desc: 'Spiced idli with cashews, ginger and pepper.',
        img: 'images/kanchipuram idli.jpg'
      }
    ]
  },
  puri: {
    title: 'Puri',
    emoji: '🫓',
    img: 'images/puri category.jpg',
    items: [
      {
        name: 'Plain Puri',
        price: 60,
        desc: 'Puffed, deep-fried wheat bread served with kurma.',
        img: 'images/plain puri.jpg'
      },
      {
        name: 'Poori Masala',
        price: 75,
        desc: 'Hot pooris with soft, spiced potato masala.',
        img: 'images/poori masala.jpg'
      },
      {
        name: 'Chole Puri',
        price: 90,
        desc: 'Puffy puris with tangy chickpea curry.',
        img: 'images/chole puri.jpg'
      },
      {
        name: 'Puri Sagu',
        price: 85,
        desc: 'Puris with a mild coconut-based mixed vegetable sagu.',
        img: 'images/puri sagu.jpg'
      },
      {
        name: 'Methi Puri',
        price: 80,
        desc: 'Crispy, flavourful whole wheat puris made with fresh fenugreek leaves.',
        img: 'images/methi puri.jpg'
      }
    ]
  },
  pongal: {
    title: 'Pongal',
    emoji: '🍲',
    img: 'images/pongal category.jpg',
    items: [
      {
        name: 'Ven Pongal',
        price: 60,
        desc: 'Creamy rice and moong dal with pepper and cumin.',
        img: 'images/ven pongal.jpg'
      },
      {
        name: 'Ghee Pongal',
        price: 75,
        desc: 'Ven pongal finished with generous pure ghee and cashews.',
        img: 'images/ghee pongal.jpg'
      },
      {
        name: 'Pepper Pongal',
        price: 70,
        desc: 'Extra peppery pongal with a warm, spicy kick.',
        img: 'images/pepper pongal.jpg'
      },
      {
        name: 'Sakkarai Pongal',
        price: 80,
        desc: 'Sweet pongal made with jaggery, ghee, cashews and cardamom.',
        img: 'images/sakkarai pongal.jpg'
      },
      {
        name: 'Millet Pongal',
        price: 75,
        desc: 'Healthy pongal made with millet, moong dal and black pepper.',
        img: 'images/millet pongal.jpg'
      },
      {
        name: 'Rava Pongal',
        price: 70,
        desc: 'Healthy pongal made with millet, moong dal and black pepper.',
        img: 'images/rava pongal.jpg'
      }
    ]
  },
  rice: {
    title: 'Rice Varieties',
    emoji: '🍚',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',

    items: [
      {
        name: 'Lemon Rice',
        price: 70,
        desc: 'Traditional rice flavoured with lemon, turmeric and spices.',
        img: 'images/lemon rice.jpg'
      },
      {
        name: 'Tomato Rice',
        price: 75,
        desc: 'Delicious rice cooked with fresh tomatoes and aromatic spices.',
        img: 'images/tomato rice.jpg'
      },
      {
        name: 'Curd Rice',
        price: 60,
        desc: 'Cooling curd rice topped with mustard seeds and curry leaves.',
        img: 'images/curd rice.jpg'
      },
      {
        name: 'Coconut Rice',
        price: 70,
        desc: 'Fresh coconut rice with cashews and aromatic seasoning.',
        img: 'images/coconut rice.jpg'
      },
      {
        name: 'Sambar Rice',
        price: 80,
        desc: 'Traditional South Indian rice mixed with vegetable sambar.',
        img: 'images/sambar rice.jpg'
      },
      {
        name: 'Veg Biryani',
        price: 120,
        desc: 'Fragrant basmati rice cooked with fresh vegetables and spices.',
        img: 'images/veg biryani.jpg'
      },
      {
        name: 'Mushroom Biryani',
        price: 140,
        desc: 'Aromatic biryani prepared with mushrooms and Indian spices.',
        img: 'images/mushroom biryani.jpg'
      },
      {
        name: 'Ghee Rice',
        price: 100,
        desc: 'Flavourful rice cooked with pure ghee and cashews.',
        img: 'images/ghee rice.jpg'
      }
    ]
  },
  parotta: {
    title: 'Parotta',
    emoji: '🫓',
    img: 'images/parotta category.jpg',
    items: [
      {
        name: 'Plain Parotta',
        price: 50,
        desc: 'Flaky layered South Indian parotta.',
        img: 'images/plain parotta.jpg'
      },
      {
        name: 'Coin Parotta',
        price: 70,
        desc: 'Mini crispy layered parottas.',
        img: 'images/coin parotta.jpg'
      },
      {
        name: 'Kothu Parotta',
        price: 100,
        desc: 'Chopped parotta tossed with vegetables and spices.',
        img: 'images/kothu parotta.jpg'
      },
      {
        name: 'Chilli Parotta',
        price: 110,
        desc: 'Spicy parotta tossed with onion and capsicum.',
        img: 'images/chilli parotta.jpg'
      }
    ]
  },

  gravies: {
    title: 'Gravies & Curries',
    emoji: '🍛',
    img: 'images/gravies category.jpg',
    items: [
      {
        name: 'Veg Kurma',
        price: 80,
        desc: 'Mixed vegetables in creamy coconut gravy.',
        img: 'images/veg kurma.jpg'
      },
      {
        name: 'Paneer Butter Masala',
        price: 150,
        desc: 'Paneer cooked in rich tomato and butter gravy.',
        img: 'images/paneer butter masala.jpg'
      },
      {
        name: 'Dal Fry',
        price: 100,
        desc: 'Yellow lentils cooked with aromatic spices.',
        img: 'images/dal fry.jpg'
      },
      {
        name: 'Chana Masala',
        price: 110,
        desc: 'Chickpeas cooked in traditional masala gravy.',
        img: 'images/chana masala.jpg'
      },
      {
        name: 'Mushroom Masala',
        price: 140,
        desc: 'Fresh mushrooms cooked in spicy gravy.',
        img: 'images/mushroom masala.jpg'
      }
    ]
  },

  snacks: {
    title: 'Evening Snacks',
    emoji: '🍟',
    img: 'images/snacks-category.jpg',
    items: [
      {
        name: 'Samosa',
        price: 25,
        desc: 'Crispy pastry filled with spiced potatoes.',
        img: 'images/samosa.jpg'
      },
      {
        name: 'Onion Bajji',
        price: 35,
        desc: 'Onion slices dipped in gram flour batter and fried.',
        img: 'images/onion bajji.jpg'
      },
      {
        name: 'Potato Bonda',
        price: 35,
        desc: 'Spiced potato filling with a crispy outer layer.',
        img: 'images/potato bonda.jpg'
      },
      {
        name: 'Onion Pakoda',
        price: 50,
        desc: 'Crunchy onion fritters with traditional spices.',
        img: 'images/onion pakoda.jpg'
      },
      {
        name: 'French Fries',
        price: 80,
        desc: 'Golden crispy potato fries.',
        img: 'images/french fries.jpg'
      }
    ]
  },

  desserts: {
    title: 'Desserts',
    emoji: '🍨',
    img: 'images/desserts-category.jpg',
    items: [
      {
        name: 'Gulab Jamun',
        price: 50,
        desc: 'Soft sweet dumplings soaked in sugar syrup.',
        img: 'images/gulab jamun.jpg'
      },
      {
        name: 'Kesari',
        price: 45,
        desc: 'Traditional South Indian sweet made with rava.',
        img: 'images/kesari.jpg'
      },
      {
        name: 'Payasam',
        price: 60,
        desc: 'Traditional sweet milk dessert.',
        img: 'images/payasam.jpg'
      },
      {
        name: 'Vanilla Ice Cream',
        price: 60,
        desc: 'Classic creamy vanilla ice cream.',
        img: 'images/vanilla ice cream.jpg'
      },
      {
        name: 'Chocolate Ice Cream',
        price: 70,
        desc: 'Rich and creamy chocolate ice cream.',
        img: 'images/chocolate ice cream.jpg'
      }
    ]
  },

};

// ===== 2. PAGE ELEMENTS =====
const categoryView = document.getElementById('categoryView');
const itemsView = document.getElementById('itemsView');
const itemsGrid = document.getElementById('itemsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const backBtn = document.getElementById('backBtn');

const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const clearBtn = document.getElementById('clearBtn');
const continueShopping = document.getElementById('continueShopping');

const categoryTabs = document.getElementById('categoryTabs');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const orderModal = document.getElementById('orderModal');
const orderMsg = document.getElementById('orderMsg');
const orderSummary = document.getElementById('orderSummary');
const orderOk = document.getElementById('orderOk');

// The cart is a list of { id, name, price, qty }
let cart = [];

// ===== 3. HELPERS =====
function fallbackImage(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
    <rect width="100%" height="100%" fill="#dcebd5"/>
    <text x="50%" y="55%" font-size="120" text-anchor="middle">${emoji}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function imageTag(src, alt, emoji) {
  return `<img src="${src}" alt="${alt}" loading="lazy"
           onerror="this.onerror=null; this.src='${fallbackImage(emoji).replace(/'/g, '%27')}'">`;
}

// ===== 4. SHOW THE FOUR MAIN CATEGORY CARDS =====
function renderCategories() {
  categoryView.innerHTML = Object.keys(menu).map(function (key) {
    const cat = menu[key];
    return `
      <button class="category-card" data-category="${key}">
        ${imageTag(cat.img, cat.title, cat.emoji)}
        <div class="label">
          <h3>${cat.title}</h3>
          <span>${cat.items.length} items · Tap to view</span>
        </div>
      </button>`;
  }).join('');
}

// ===== 5. OPEN A CATEGORY / GO BACK =====
function openCategory(key) {
  const cat = menu[key];
  if (!cat) return;

  categoryTitle.textContent = cat.title;

  categoryTabs.innerHTML = Object.keys(menu).map(function (k) {
    const active = (k === key) ? ' active' : '';
    return `<button class="tab${active}" data-category="${k}">${menu[k].title}</button>`;
  }).join('');
  itemsGrid.innerHTML = cat.items.map(function (item, index) {
    const id = key + '-' + index;
    return `
      <article class="food-card">
        ${imageTag(item.img || cat.img, item.name, cat.emoji)}
        <div class="food-info">
          <div class="food-row">
            <h4>${item.name}</h4>
            <span class="price">₹${item.price}</span>
          </div>
          <p>${item.desc}</p>
          <button class="add-btn" data-id="${id}">Add to Cart</button>
        </div>
      </article>`;
  }).join('');

  categoryView.classList.add('hidden');
  itemsView.classList.remove('hidden');
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function backToMenu() {
  itemsView.classList.add('hidden');
  itemsGrid.innerHTML = '';
  categoryView.classList.remove('hidden');
}

// ===== 6. CART =====
function findItemById(id) {
  const parts = id.split('-');
  const item = menu[parts[0]].items[Number(parts[1])];
  return { id: id, name: item.name, price: item.price };
}

function addToCart(id) {
  const existing = cart.find(function (c) { return c.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    const item = findItemById(id);
    item.qty = 1;
    cart.push(item);
  }
  renderCart();
}

function changeQty(id, change) {
  const item = cart.find(function (c) { return c.id === id; });
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) removeItem(id);
  else renderCart();
}

function removeItem(id) {
  cart = cart.filter(function (c) { return c.id !== id; });
  renderCart();
}

function renderCart() {
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty 🌿</p>';
  } else {
    cartItemsEl.innerHTML = cart.map(function (c) {
      total += c.price * c.qty;
      count += c.qty;
      return `
        <div class="cart-item">
          <div>
            <h5>${c.name}</h5>
            <small>₹${c.price} each</small>
            <div class="qty">
              <button data-action="minus" data-id="${c.id}">−</button>
              <span>${c.qty}</span>
              <button data-action="plus" data-id="${c.id}">+</button>
            </div>
          </div>
          <div style="text-align:right">
            <strong>₹${c.price * c.qty}</strong><br>
            <button class="remove-btn" data-action="remove" data-id="${c.id}">Remove</button>
          </div>
        </div>`;
    }).join('');
  }

  // Display "0 Items", "1 Item", "2 Items" matching reference image
  cartCountEl.textContent = count + (count === 1 ? ' Item' : ' Items');
  cartTotalEl.textContent = '₹' + total;
  placeOrderBtn.disabled = (cart.length === 0);
}

function openCart() { cartDrawer.classList.add('open'); overlay.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden', 'false'); }
function closeCart() { cartDrawer.classList.remove('open'); overlay.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden', 'true'); }

function getTotal() {
  return cart.reduce(function (sum, c) { return sum + c.price * c.qty; }, 0);
}

// ===== PLACE ORDER =====
function placeOrder() {
  if (cart.length === 0) return;

  const orderId = 'FH' + Math.floor(1000 + Math.random() * 9000);
  orderMsg.textContent = 'Thank you! Your order ' + orderId + ' has been placed successfully.';
  orderSummary.innerHTML = cart.map(function (c) {
    return `<div><span>${c.name} × ${c.qty}</span><span>₹${c.price * c.qty}</span></div>`;
  }).join('') + `<div class="order-total"><span>Total</span><span>₹${getTotal()}</span></div>`;

  cart = [];
  renderCart();
  closeCart();
  orderModal.classList.remove('hidden');
}

// ===== 7. EVENT LISTENERS =====
categoryView.addEventListener('click', function (e) {
  const card = e.target.closest('.category-card');
  if (card) openCategory(card.dataset.category);
});

itemsGrid.addEventListener('click', function (e) {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  addToCart(btn.dataset.id);
  btn.textContent = 'Added ✓';
  setTimeout(function () { btn.textContent = 'Add to Cart'; }, 800);
});

cartItemsEl.addEventListener('click', function (e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  if (btn.dataset.action === 'plus') changeQty(id, 1);
  if (btn.dataset.action === 'minus') changeQty(id, -1);
  if (btn.dataset.action === 'remove') removeItem(id);
});

categoryTabs.addEventListener('click', function (e) {
  const tab = e.target.closest('.tab');
  if (tab) openCategory(tab.dataset.category);
});

menuToggle.addEventListener('click', function () { navMenu.classList.toggle('open'); });
navMenu.addEventListener('click', function (e) {
  const link = e.target.closest('a');
  if (!link) return;
  if (link.dataset.nav === 'menu') backToMenu();
  navMenu.classList.remove('open');
});

placeOrderBtn.addEventListener('click', placeOrder);
orderOk.addEventListener('click', function () { orderModal.classList.add('hidden'); });
orderModal.addEventListener('click', function (e) {
  if (e.target === orderModal) orderModal.classList.add('hidden');
});

backBtn.addEventListener('click', backToMenu);
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
clearBtn.addEventListener('click', function () { cart = []; renderCart(); });
continueShopping.addEventListener('click', function () {
  closeCart();
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const status = document.getElementById("contactStatus");
    status.textContent = `Thank you ${name}! Your message has been received.`;
    contactForm.reset();
  });
}

// ===== 8. START =====

renderCategories();
renderCart();
