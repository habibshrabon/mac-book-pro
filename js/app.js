// function updateProduct(isIncreasing) {
//   const memoryInput = document.getElementById("8gb-memory");
//   const memorySize = memoryInput.value;
//   memoryInput.value = parseInt(memorySize);
//   console.log(memorySize);
// }

//product memory events
document.getElementById("8gb-memory").addEventListener("click", function () {
  const memoryInput = document.getElementById("memory-total");
  memoryInput.innerText = parseInt(0);
});

document.getElementById("16gb-memory").addEventListener("click", function () {
  const memoryInput = document.getElementById("memory-total");
  memoryInput.innerText = parseInt(180);
});

//storage
document.getElementById("256gb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(0);
});

document.getElementById("512gb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(100);
});
document.getElementById("1tb-storage").addEventListener("click", function () {
  const memoryInput = document.getElementById("storage-total");
  memoryInput.innerText = parseInt(180);
});

//Delivery

document.getElementById("free-delivery").addEventListener("click", function () {
  const memoryInput = document.getElementById("delivery-cost");
  memoryInput.innerText = parseInt(0);
});

document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    const memoryInput = document.getElementById("delivery-cost");
    memoryInput.innerText = parseInt(20);
  });

//   document.getElementById('total-price').innerText=
