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

// Волшебный +
// Преобразует не числа в числа
// alert( +true ); // 1
// alert( +"" );   // 0
// На самом деле это то же самое, что и Number(...), только короче.

// Сокращённая арифметика с присваиванием.
// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14

// Странная разница.
// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2

// let counter = 1;
// let a = counter++; // (*) меняем ++counter на counter++

// alert(a); // 1

//Поддерживаются следующие побитовые операторы:

// AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

// Оператор запятая. Запятая имеет очень низкий приоритет, ниже чем =.
// let a = (1 + 2, 3 + 4);

// alert( a ); // 7 (результат вычисления 3 + 4)

// Сложение с участием пользователя.
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 3



// Операторы сравнения.
// Операторы сравнения такие же как и в математике, есть особенности.
// Результат сравнения имеет логический тип.
// Например:
// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно)

// let result = 5 > 4; // результат сравнения присваивается переменной result
// alert( result ); // true

// Сравнение строк.
// alert( 'Я' > 'А' ); // true
// alert( 'Коты' > 'Кода' ); // true
// alert( 'Сонный' > 'Сон' ); // true

// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
// alert( '2' > 1 ); // true, строка '2' становится числом 2
// alert( '01' == 1 ); // true, строка '01' становится числом 1
// alert( 0 === false ); // false, так как сравниваются разные типы

// 5 > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false
// Разъяснения:

// Очевидно, true.
// Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
// Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// Строгое сравнение разных типов, поэтому false.
// Аналогично (4), null равен только undefined.
// Строгое сравнение разных типов.