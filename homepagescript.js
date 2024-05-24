document.getElementById('menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Get the elements
const quantityElement = document.getElementById('quantity');
const priceElement = document.getElementById('price');
const totalElement = document.getElementById('total');

// Set the initial price (replace 'X' with the actual price)
let price = X;

// Update the price and total when the quantity changes
quantityElement.addEventListener('input', () => {
  const quantity = parseInt(quantityElement.innerText);
  const newPrice = price * quantity;

  // Update the price and total elements
  priceElement.innerText = `P${newPrice.toFixed(2)}`;
  totalElement.innerText = `P${newPrice.toFixed(2)}`;
});