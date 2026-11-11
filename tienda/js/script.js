// Interacciones sencillas de la tienda de demostración.
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const productCards = [...document.querySelectorAll('.product-card')];
  const searchInput = document.getElementById('product-search');
  const noResults = document.getElementById('no-results');
  const cartCount = document.getElementById('cart-count');
  const cartMessage = document.getElementById('cart-message');

  let activeCategory = 'todos';
  let itemsInCart = 0;

  function updateProducts() {
    const search = searchInput.value.trim().toLocaleLowerCase('es');
    let visibleCount = 0;

    productCards.forEach((card) => {
      const categoryMatches = activeCategory === 'todos' || card.dataset.category === activeCategory;
      const nameMatches = card.dataset.name.toLocaleLowerCase('es').includes(search);
      const visible = categoryMatches && nameMatches;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    noResults.hidden = visibleCount !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      activeCategory = button.dataset.filter;
      updateProducts();
    });
  });

  searchInput.addEventListener('input', updateProducts);

  document.querySelectorAll('.add-button').forEach((button) => {
    button.addEventListener('click', () => {
      itemsInCart += 1;
      cartCount.textContent = itemsInCart;
      cartMessage.textContent = `Has añadido "${button.dataset.product}" al carrito de demostración.`;
    });
  });

  document.querySelector('.cart-button').addEventListener('click', () => {
    cartMessage.textContent = itemsInCart === 0
      ? 'Tu carrito está vacío.'
      : `Tienes ${itemsInCart} artículo(s) en el carrito de demostración.`;
  });

  updateProducts();
});
