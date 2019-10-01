// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
    {name: 'Радар', price: 1300, quantity: 4},
    {name: 'Сканер', price: 2700, quantity: 3},
    {name: 'Дроид', price: 400, quantity: 7},
    {name: 'Захват', price: 1200, quantity: 2},
];

const getAllPropValues = function (arrs, prop) {
    const values = [];

    for (let arr of arrs) {

        if(prop in arr) {
            values.push(arr[prop]); //если ключь с таким значением есть в обекте arr, то мы его пушим в values, если в arr окажится undefinde, if не выполнится.Это сделано,чтобы последний консол логне писал андефанд
        }
        
    }
    return values
}

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []