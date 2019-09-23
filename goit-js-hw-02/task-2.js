'use strict';
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки.

// Вызовы функции для проверки работоспособности твоей реализации.

const calculateEngravingPrice = function (message, pricePerWord) {

    const words = message.split(" ");
    const price = words.length * pricePerWord;
    return price

    // ----Решение с помощью цикла----

    // const words = message.split(" ");
    // for(let i = 0; i < words.length; i += 1) {
    //     const price = words.length * pricePerWord;
    //     return price
    // }

}


console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100