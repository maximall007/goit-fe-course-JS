'use strict';
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered.

const total = 100;
let ordered = 50;

// ordered = 150;

if(ordered <= total) {
   console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
    console.log("На складе недостаточно твоаров!")
};