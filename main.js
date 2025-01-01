// Element Seçelim
const amounInput = document.querySelector("#amount"),
  firstOption = document.querySelector("#firstCurrencyOption"),
  secondOption = document.querySelector("#secondCurrencyOption"),
  resultInput = document.querySelector("#result");

// currency.js dosyasındaki verilere ulaşmak için nesne türetmek gerekiyor
const currency = new Currency();
runEventListeners();

function runEventListeners() {
  amounInput.addEventListener("input", exchange);
}

function exchange() {
  const amount = Number(amounInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;

  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;


  currency.exchange(amount, firstOptionValue, secondOptionValue)
  .then((result)=>{
          resultInput.value =result.toFixed(3)
  })
}
