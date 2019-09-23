'use strict';
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.


const findLongestWord = function(string) {
    const strSplit = string.split(' ');
    let result = 0;
    let word;
    for(let i = 0; i < strSplit.length; i += 1){
        if(strSplit[i].length > result) {
            result = strSplit[i].length;
            word = strSplit[i]
        }
    }
    return word
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'