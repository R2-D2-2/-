'use strict'; 
//Небольшое задание
//alert ("«Я JavaScript!»");
//ctrl + / закоментировать кусочек кода

//Переменные let с именем user... var почти тоже, что и let, но устаревший вариант.
let user = 'John',
    age = 25,
    message = 'Hello';

let hello = 'Hello world!';

let message2;

// копируем значение 'Hello world' из переменной hello в переменную message
message2 = hello;

//const неизменяемая переменная. Часто используют для заранее известных цветов. const COLOR_RED = "#F00"; Для упрощения записи.
const num = '25';

//Небольшое задание
// let name = "Джон",
//     admin = name;
//     alert (admin);



// 25.02.23
// Число.
let age3 = 25;
// Строка.
let age4 = "25";
// Булевое значение.
let age5 = true;
let age6 = false;
// Значение null.
let age7 = null;
// Значение undefined. Значение не было присвоено.
let age8;
// Оператор typeof. Похоже показывает каким типом объекта является предмет.
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)



// Взаимодействие alert, prompt, confirm
// prompt Даёт в обработку данные введёные пользователем.

// let age9 = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age9} лет!`); // Тебе 100 лет!

// confirm Окно с выбором Ок или Отмена ответ: true else false.
// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss );

// Небольшое задание
// let nameUzer = prompt('Как вас зовут?');
// alert(`Добрый день, ${nameUzer}!`);



// string Строковое преобразование. 
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string

// Number Численное преобразование.
// let str = "123";
// alert(typeof str); // string

// let num3 = Number(str); // становится числом 123

// alert(typeof num3); // number
// Примеры:
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// Boolean Логическое преобразование.
// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
// Все остальные значения становятся true.
// Например:
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("Привет!") ); // true
// alert( Boolean("") ); // false

// Сложение строк при помощи бинарного +
// let s = "моя" + "строка";
// alert(s); // моястрока
// alert(2 + 2 + '1' ); // будет "41", а не "221"