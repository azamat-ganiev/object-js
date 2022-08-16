// function sumCashAndDigit() {
//   console.log(this.cash + this.digit);
// }

// // hello()

// let user = {
//   name: "Azamat",
//   cash: 2000,
//   digit: 1000,
//   calcMyMoney: sumCashAndDigit,
// };

// let said = {
//   name: "Said",
//   cash: 3000,
//   digit: 500,
//   calcMyMoney: sumCashAndDigit,
// };

// let firuz = {
//   name: "Firuz",
//   cash: 5000,
//   digit: 750,
// };

// // user.calcMyMoney();
// // said.calcMyMoney();

// // sumCashAndDigit.bind(firuz)()
// sumCashAndDigit.call(firuz);

// 1. Создайте пустой объект user

let user = {
  name: "John",
  surname: "Smoth",
};
user.name = "Pete";

delete user.name;

console.log(user);

// 2. Напишите функцию isEmpty(obj), которая возыращает true, если у объекта нет свойств, иначе False

let obj = {};

// alert( isEmpty(schedule) ); // true

obj["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(obj));

// 3. У нас есть объект, в котором хранятся зарплаты нашей команды:Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// 4. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") menu[key] *= 2;
    console.log(menu[key]);
  }
}

multiplyNumeric(menu);
