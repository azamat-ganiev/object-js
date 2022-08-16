function sumCashAndDigit() {
  console.log(this.cash + this.digit);
}

// hello()

let user = {
  name: "Azamat",
  cash: 2000,
  digit: 1000,
  calcMyMoney: sumCashAndDigit,
};

let said = {
  name: "Said",
  cash: 3000,
  digit: 500,
  calcMyMoney: sumCashAndDigit,
};

let firuz = {
  name: "Firuz",
  cash: 5000,
  digit: 750,
};

// user.calcMyMoney();
// said.calcMyMoney();

// sumCashAndDigit.bind(firuz)()
sumCashAndDigit.call(firuz);
