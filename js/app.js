document.getElementById("8gb-memory").addEventListener("click", function () {
  const memoryInput = document.getElementById("memory-total");
  memoryInput.innerText = parseInt(0);
  totalPrice();
});

document.getElementById("16gb-memory").addEventListener("click", function () {
  const memoryInput = document.getElementById("memory-total");
  memoryInput.innerText = parseInt(180);
  totalPrice();
});

//storage memory events
document.getElementById("256gb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(0);
  totalPrice();
});

document.getElementById("512gb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(100);
  totalPrice();
});
document.getElementById("1tb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(180);
  totalPrice();
});

//Delivery cost events
document.getElementById("free-delivery").addEventListener("click", function () {
  const memoryInput = document.getElementById("delivery-cost");
  memoryInput.innerText = parseInt(0);
  totalPrice();
});

document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    const memoryInput = document.getElementById("delivery-cost");
    memoryInput.innerText = parseInt(20);
    totalPrice();
  });

//   total calculation events
function totalPrice() {
  const bestPriceText = document.getElementById("best-price").innerText;
  const bestPrice = parseInt(bestPriceText);
  const memoryCostText = document.getElementById("memory-total").innerText;
  const memoryCost = parseInt(memoryCostText);
  const storageCostText = document.getElementById("storage-total").innerText;
  const storageCost = parseInt(storageCostText);
  const deliveryCostText = document.getElementById("delivery-cost").innerText;
  const deliveryCost = parseInt(deliveryCostText);
  const total = bestPrice + memoryCost + storageCost + deliveryCost;
  const totalAmount = document.getElementById("total-price");
  totalAmount.innerText = total;
  const totalAmountFooter = document.getElementById("footer-total");
  totalAmountFooter.innerText = total;
}

//promo code
