
/* arrow functions */

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."), 
  () => console.log("Вы отменили выполнение.") 
);

//this

let dog = {
    name: 'Chester',
    breed: 'beagle',
    intro: function(){
      console.log(this);
    }
  };
  
dog.intro();

//constructor

function User(name) {
  this.name = name;
  
  this.sayHi = function() {
    console.log( "Меня зовут: " + this.name );
  };
}

let vasya = new User("Вася");

vasya.sayHi();

//Calc

function Calc() {

  this.read = function() {
    this.a = +prompt('Введите число а');
    this.b = +prompt('Введите число b');
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calc = new Calc();
calc.read();

alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() );

/* Напишите функцию-конструктор .Accumulator(startingValue)

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве . Начальное значение устанавливается в аргументе конструктора .valuestartingValue
Метод использует для получения числа и прибавляет его к свойству .read()promptvalue*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Введите число');
  };
}

let accumulator = new Accumulator(2);
accumulator.read();
alert(accumulator.value);

//Вычислите факториал числа.Напишите программу на JavaScript для вычисления факториала числа.

const factorial = n => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(7));

//Фибонччи

const fib = n => {
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(2));

//замыкание ????
function makePassword(password) {
  return function f (truPassword) {
         return (truPassword === password);
  };
}

let truF = makePassword("123");
alert( "Введенный пароль: " + truF("124"));

function counter() {
  let n = 1;
  return function() {

     return n++   
  };
}

let count = counter();

console.log(count());
console.log(count());
console.log(count());


