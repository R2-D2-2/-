// Пробная работа лучше не читать.
let num1 = 10;
let num2 = 25;
console.log (num1);
console.log (num2);
console.log (num1 + num2);
console.log (num1 - num2);
console.log (num1 * num2);
console.log (num1 / num2);

let age = 18;
let userName = "Max"
let text = `${userName} is ${age} years old.`

console.log (text);

let text2 = `num1 + num2: ${num1 + num2}`
console.log (text2);
let text3 = `num1 - num2: ${num1 - num2}`
console.log (text3);
let text4 = `num1 * num2: ${num1 * num2}`
console.log (text4);
let text5 = `num1 / num2: ${num1 / num2}`
console.log (text5);

let user = {
    name: "Иван",
    surname: "Распутин",
    age: 47
};

user.name = "Григорий";

//alert(user.name); // Всплывающее окно
//alert(user.surname);
//alert(user.age);

function fun() {
    alert ("Ангелина - бака!")
}

console.log ("Hello, students!");

console.log (10+4-2);
//alert (10+4-2);

let numr1 = 10; 
let numr2 = 20;
console.log((numr1 + numr2) / 3);

let num4 = 10; 
let num5 = 20;
num4 = 30;
num5 = num4 - 15;
console.log(2 * num4 + num5);

/*let result = prompt("How old are you?")

console.log(result)

let result2 = prompt("How old are you?", 20)

console.log(result)

let result3 = confirm("Принять правила соглашения?")

console.log(result3);

alert ("JavaScript is awesome!");*/

/* let result = prompt("Введите год вашего рождения:")

alert(result); */

// Условия.
/*  if (условие){
        действия, если условие выполнилось
}
    else{
        действия, если условие не выполнилось
}
*/

let result4 = prompt("Введите пароль:");
if (result4 === "1234") {
    alert("Вход выполнен.")
}
else if (result4 === "123") {
    alert("Тепло.")
}

else {
    alert("Неверный пароль.")
}

// Цикл
/*for (начало; условие; шаг) {
    тело цикла - команды, которые нужно повторить
}*/

for (let i=0; i<3; i++) {
    console.log (`i = ${i}`)
}

let n = 6
let s = 10;
for (let i=0; i<n; i++) {
    s = s + i;
}
console.log(s)

let n2 = 6
let p = 1
for (let i=0; i<n2; i++) {
    p = p*i;
}
console.log(p)

// Функции
/*function имя(параметры) {
    тело функции
}*/ 

function sayHello(){
    let userName = "John";
    alert(`Hello, ${userName}!`);
}

//Имя в функции

sayHello();

function sayHello(userName){
    alert(`Hello, ${userName}!`);
}

//Имя прописывается после функции

sayHello('John');
sayHello('Jack');
sayHello('Julia');