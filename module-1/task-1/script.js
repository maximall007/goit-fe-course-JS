'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const pass = prompt ('Введите пароль доступа');
console.log(pass);
if (!pass) {
    let message = ('Отменено пользователем!');
    console.log (message);
}else if (pass === ADMIN_PASSWORD) {
    let message = ('Добро пожаловать!');
    console.log (message);
}else {
    let message = ('Доступ запрещен, неверный пароль!');
    console.log (message);
}
alert(message);


