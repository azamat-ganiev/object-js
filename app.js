//// 1USD = 10.20

// Vasya 1000 // TJS
// Ivan 150 // TJS
// Anton 230c // TJS
// Jony 1234 // USD
// Max 333 // USD
// John 780 // USD
// Umed 280 // TJS

//  Part 1
// 1. Создайте данные обекты
// 2. Создайте массив persons и в нём добавтье эти обекты
// 3. Создайте новый массив  richMens и добавтье людей у которых сумма больше 500
// 4. Просуммируйте все суммы массива RichMens;

//  Part 2
// 1. Создайте данные обекты
// 2. Создайте массив persons и в нём добавтье эти обекты
// 4. Просуммируйте все суммы массива persons и найдите результат в сомони;

let vasya = {
  name: "Vasya",
  cash: 1000,
  сurrecy: "TJS",
};

let ivan = {
  name: "Ivan",
  cash: 150,
  сurrecy: "TJS",
};

let anton = {
  name: "Anton",
  cash: 230,
  сurrecy: "TJS",
};

let jony = {
  name: "Jony",
  cash: 1234,
  сurrecy: "USD",
};

let max = {
  name: "Max",
  cash: 333,
  сurrecy: "USD",
};

let john = {
  name: "John",
  cash: 780,
  сurrecy: "USD",
};

let umed = {
  name: "Umed",
  cash: 280,
  сurrecy: "TJS",
};

let person = [umed, max, john, jony, anton, ivan, vasya];

// part 1
// let richMans = [];
// let result = 0;

// // 1 Не правильно запущен цикл
// // 2 Не правильно поставлено условие (нужно было сравнивать свойство cash а не сам обьект)

// for (let i = 0; i < person.length; i++) {
//   if (person[i].cash >= 500) {
//     richMans.push(person[i]);
//     result += person[i].cash
//   }
// }

// part 2

let result = 0;

// for (let i = 0; i < person.length; i++) {
//   if (person[i].сurrecy == 'USD') {
//     result += person[i].cash * 10.20;
//   }
//   if (person[i].сurrecy == 'TJS') {
//     result += person[i].cash
//   }
// }

for (let i = 0; i < person.length; i++) {
  if (person[i].сurrecy === "USD") {
    result += person[i].cash * 10.2;
    continue;
  }
  result += person[i].cash;
}

console.log(result);

