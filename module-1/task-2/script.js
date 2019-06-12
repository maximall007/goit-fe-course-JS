// ----- TASK 2-----

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice = 0;

let result = 0;


const quantity = prompt('Укажите количество дроидов, которых хотите приобрести?');


if (quantity !== null && Number(quantity)) {
    totalPrice = quantity * pricePerDroid;
    result = credits - totalPrice;
    if (result >= 0) {
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${result} кредитов`)
    } else {
        console.log('Недостаточно средств на счету!');
    }
}else {
    const cancel = ('Отменено пользователем!');
    console.log(cancel);
}





/* На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'*/