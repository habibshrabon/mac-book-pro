//memory function
function updatedMemoryCost(memory) {
  const memoryInput = document.getElementById("memory-total");
  if (memory == "8gb") {
    memoryInput.innerText = 0;
  } else if (memory == "16gb") {
    memoryInput.innerText = 180;
  }
}

//storage function
function updatedStorageCost(storage) {
  const storageInput = document.getElementById("storage-total");
  if (storage == "256gb") {
    storageInput.innerText = 0;
  } else if (storage == "512gb") {
    storageInput.innerText = 100;
  } else if (storage == "1tb") {
    storageInput.innerText = 180;
  }
}

//delivery function
function updatedDeliveryCost(delivery) {
  const deliveryInput = document.getElementById("delivery-cost");
  if (delivery == "free") {
    deliveryInput.innerText = 0;
  } else if (delivery == "charged") {
    deliveryInput.innerText = 20;
  }
}

//memory cost updated
document.getElementById("8gb-memory").addEventListener("click", function () {
  updatedMemoryCost("8gb");
  totalPrice();
});

document.getElementById("16gb-memory").addEventListener("click", function () {
  updatedMemoryCost("16gb");
  totalPrice();
});

//storage cost updated
document.getElementById("256gb-storage").addEventListener("click", function () {
  updatedStorageCost("256gb");
  totalPrice();
});

document.getElementById("512gb-storage").addEventListener("click", function () {
  updatedStorageCost("512gb");
  totalPrice();
});
document.getElementById("1tb-storage").addEventListener("click", function () {
  updatedStorageCost("1tb");
  totalPrice();
});

//Delivery cost updated
document.getElementById("free-delivery").addEventListener("click", function () {
  updatedDeliveryCost("free");
  totalPrice();
});

document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    updatedDeliveryCost("charged");
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
// promo code
document.getElementById("promo-submit").addEventListener("click", function () {
  const inputField = document.getElementById("promo-input");
  const promoCode = inputField.value;
  const totalPriceText = document.getElementById("footer-total");
  const totalPrice = parseInt(totalPriceText.innerText);
  console.log(totalPrice);
  if (promoCode == "stevekaku") {
    console.log("Love you stevkaku");

    const totalCost = totalPrice * 0.2;
    const updatedTotal = totalPrice - totalCost;
    console.log(updatedTotal);
    totalPriceText.innerText = updatedTotal;
  } else {
    alert("please input a valid promo code.");
  }
});
