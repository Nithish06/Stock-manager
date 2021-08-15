var initialPrice = document.querySelector("#initial-price");
var quanity = document.querySelector("#numberof-stocks");
var currentPrice = document.querySelector("#current-price");
var outputBtn = document.querySelector("#output");
var outputDiv = document.querySelector("#output-div");

function calculateProfitandLoss(initial, quantity, current) {
  if (quanity.value > 0 && currentPrice.value > 0 && initialPrice.value > 0) {
    if (initial > current) {
      var loss = (initial - current) * quantity;

      var lossPercent = (loss / initial) * 100;
      outputDiv.style.color = "red";
      showMsg(`The Loss is ${loss} and Loss % is ${lossPercent}%`);
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercent = (profit / initial) * 100;
      showMsg(`Profit is ${profit} and % is ${profitPercent}%`);
      outputDiv.style.color = "Green";
    } else {
      showMsg("No pain No gain");
    }
  } else {
    showMsg("Fill All the fields to continue");
  }
}

outputBtn.addEventListener("click", showOutput);

function showOutput() {
  var ip = initialPrice.value;
  var qty = quanity.value;
  var curr = currentPrice.value;
  calculateProfitandLoss(ip, qty, curr);
}

function showMsg(msg) {
  outputDiv.innerHTML = msg;
}
