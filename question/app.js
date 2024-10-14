//Q1
let nickname = 'ひろゆき';
let age = 24;
let Q1 = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(Q1);

//Q2
let Languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let Q2 = `私の好きな言語は${Languages[0]}です。次は${Languages[3]}を勉強してみたいです。`;
console.log(Q2);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);

//Q6
function sayHello() {
  console.log('Hello');
}

let sayWorld = function() {
  console.log('World');
};

sayHello();
sayWorld();

//Q7
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};
user.sayHello();

//Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

//Q9
function remainder(x, y) {
  return x % y;
}

let num1 = 5;
let num2 = 3;

let result = remainder(num1, num2);
console.log(`${num1}を${num2}で割った余りは${result}です。`);


//Q10
function foo() {
  let x = 1;
}
let x = 1   //下記の応用問題をやるために書きました
console.log(x);

//関数の中に定義した変数はその関数の中でしか参照できない（関数内だけスコープが有効）からエラーになってしまう。

//応用編

//Q1
var randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger);

//Q2
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

//Q3
let num = 5;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

//Q4
let numbers = []
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];

  if (typeof element === 'number') {
    if (element % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}
