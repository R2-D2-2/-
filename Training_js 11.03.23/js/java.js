// Function Expression

// Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):

function sayHi() {
    alert( "Привет" );
    }

// Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).

let sayHi2 = function() {
    alert( "Привет" );
    };

// Обратите внимание, что после ключевого слова function нет имени. Для Function Expression допускается его отсутствие.
// Функция – это значение

// function sayHi() {
//     alert( "Привет" );
//   }
  
//   alert( sayHi ); // выведет код функции

// Функции-«колбэки».

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }
  
    function showOk() {
    alert( "Вы согласны." );
    }
  
    function showCancel() {
    alert( "Вы отменили выполнение." );
    }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
    ask("Вы согласны?", showOk, showCancel);

// Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно (от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет необходимо. В нашем случае, showOk становится колбэком для ответа «yes», а showCancel – для ответа «no».

// Мы можем переписать этот пример значительно короче, используя Function Expression:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
// Если функция была создана как часть выражения, то это “Function Expression”.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.

// Стрелочные функции, основы.

// let func = (arg1, arg2, ...argN) => expression;

// Это создаёт функцию func, которая принимает аргументы arg1..argN, затем вычисляет expression в правой части с их использованием и возвращает результат.

// let sum = (a, b) => a + b;

// /* Эта стрелочная функция представляет собой более короткую форму:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
//   };
  
//   alert( sum(1, 2) ); // 3

// Небольшое задание:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// Проба функционала.

// var a = prompt('Введите a:', 100);
// var b = prompt('Введите b:', 100);
// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
//         };
// prompt
// alert( sum(a, b) );

// Неудача. Складывает только строки, не помню в чём суть. 

// var a = prompt('Введите a:', 100);
// var b = prompt('Введите b:', 100);
// a = Number(a);
// b = Number(b);
// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
//         };
// prompt
// alert( sum(a, b) );

// Работает. Скорее всего грязный код.

// Упрощённая версия.
// var a = prompt('Введите a:', 100);
// var b = prompt('Введите b:', 100);
// a = Number(a);
// b = Number(b);
// let sum = (a, b) => a + b;

// alert( sum(a, b) );

// Проба модернизации.
// var a = prompt('Введите a:', 100);
// var b = prompt('Введите b:', 100);
// var c = prompt('Введите c:', 0);
// a = Number(a);
// b = Number(b);
// let sum = (a, b, c) => a + c + b;

// alert( sum(a, b, c) );

// Отрицательный результат.