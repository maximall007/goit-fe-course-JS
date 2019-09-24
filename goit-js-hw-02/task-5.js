'use strict';
// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// Вызовы функции для проверки работоспособности твоей реализации.

// const checkForSpam = function(str) {
//     // let lowerStr = str.toLowerCase();
//     // let isFoundWord;
//     // if(lowerStr.includes('spam') || lowerStr.includes('sale')) {
//     //     isFoundWord = true;
//     // } else {
//     //     isFoundWord = false;
//     // }
//     // return isFoundWord

//     //  ------Другой способ------

//     // str.toLowerCase();
//     // return str.includes('spam') || str.includes('sale');

// }


const checkForSpam = str => {
    let foundStr = str.toLowerCase();
    return foundStr.includes('spam') || foundStr.includes('sale');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true