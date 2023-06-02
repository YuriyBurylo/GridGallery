let sex = 'male';


let messageEnd = sex !=='male' ? ' Jesse!' : 'Thomas';
console.log('Hello,' + messageEnd);

// if (0) {
//     console.log('HI THERE !');
// } else {
//     console.log('Hello World !!!!!');
// };

0 ? console.log('I want to sleep') : console.log('I am so horny !!!');

let num = 12;

// if (num < 0) {
//     console.log('less than zero');
// } else if ( num === 0) {
//     console.log('zero value');
// } else if (num < 10) {
//     console.log('less than ten');
// } else if (num < 20) {
//     console.log('less than 20')
// } else {
//     console.log('it is 20 or more');
// }

num < 0 ? console.log('less than zero') : 
num === 0 ? console.log('zero value') : 
num < 10 ? console.log('less than ten') : 
num < 20 ? console.log('less than 20') : 
console.log('it is 20 or even more !!!');

if (num > 0) console.log('It is much better than nothing at all');

let resultOne = +'90';
console.log(resultOne);
console.log(typeof resultOne);

let resultTwo = 10 - '30';
console.log(resultTwo);
console.log(typeof resultTwo);

let user1 = '10';
let user2 = '20';
const users = +user1 + +user2;
console.log(users);
console.log(typeof users);
console.log(Number(user1) + Number(user2));
let admins = 10;
admins += 5;
console.log(admins);
console.log('60' > 20);
console.log('008' == 8);
console.log(true == 1);
console.log(false == 0);

let item1 = 0;
let item2 = "0";
console.log(Boolean(item1));
console.log(Boolean(item2));
console.log(item1 == item2);
console.log('==================================');
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);
console.log('++++++++++++++++++++++++++++++++++++');
// console.log(12 || undefined);
// console.log(null || 'freelancer');
// console.log(0 || '' || null || 'Jesse Jane' || 'Starrr');
// console.log(undefined || null || '' || 0 || false);
// let userNum = 5;
// let adminNum = 10;

// adminNum > userNum || userNum++;
// // console.log(userNum);
// console.log(56 && 200 && 'freestyle');
// console.log( 45 && 'Hello' && null);
// console.log(0 && 56 && 'John');

// console.log(3 && undefined || 5 && 10);

// let userNew = 5;
// (userNew > 0) && console.log(`New users: ${userNew}`);

// function sumUp(a, b) {
//     return a + b
// }

// console.log(`Сумма: ${sumUp(20, 50)}`);

// const text = 
// `Freedom,
// Democracy,        
// Human Rights !`
// console.log(text);

// const textTwo = "Freedom, \n\tDemocracy, \n\t\tHuman Rights !";
// console.log(textTwo);

// const textThree = "Freedom \"cannot be\" stopped !";
// console.log(textThree);
const someString = 'Hello!'
// console.log(someString);
// const firstLetter = someString[0];
// console.log(firstLetter);
// const lastLetter = someString[someString.length - 1];
// console.log(lastLetter);

// for (const char of someString) {
//     console.log(char);
// };
// someString[0] = 'J';
// console.log(someString);
// console.log(someString.indexOf('l', 4));
// console.log(someString.includes('H', 2));
// const subString = 'LL';
// console.log(someString.toLowerCase().includes(subString.toLowerCase()));
// console.log(someString.slice(1));
// console.log(someString.slice(2, 4));
// console.log(someString.startsWith('G'));
// console.log(someString.endsWith('o'));
// const arr = new Array('John', 'Kelly', 'Jastin');
// console.log(arr);
// const newArr = [
//     'Jessica',
//     {
//         name: 'Kwasi',
//         lastName: 'Tonga',
//         age: 32,
//     },
//     true,
//     42,
//     function () {
//         console.log('Привет, мой свет !!!!!');
//     }
// ];
// console.log(newArr[1].name);
// console.log(newArr[1].lastName);
// console.log(newArr[1].age);
// newArr[4]();
// console.log(newArr[0]);
// console.log(newArr.length);
// const newArr2 = [
//     [2, 4, 8],
//     [5, 7, 9],
//     [3, 0, 32],
// ];
// console.log(newArr2[2][2]);

// const arrSuperNew = arr;
// console.log(arrSuperNew);
// arrSuperNew[3] = 'Bobby';
// arrSuperNew[4] = 'Anna';
// console.log(arrSuperNew);
// console.log(arrSuperNew.length);
// console.log(arr);
// console.log(arr.length);
// arrSuperNew.length = 3;
// console.log(arrSuperNew);
// console.log(arr);
// delete arr[1];
// console.log(arr);
// const names = new Array('Jesse', 'Robin', 'Jack', 'Susan', 'Tom');
// console.log(names);
// names.splice(1, 1);
// console.log(names);
// names.splice(2, 0, 'Monica');
// console.log(names);
// names.splice(1, 1, 'Billy', 'Katherine');
// console.log(names);
// let removed = names.splice(2, 1);
// console.log(removed);
// console.log(names);
// const newNames = names.slice();
// console.log(newNames);
// const namesList = newNames.slice(0, 3);
// console.log(namesList);
// const namesList2 = namesList.concat(names);
// console.log(namesList2);
// console.log(namesList2.indexOf('Jesse'));
// console.log(namesList.includes('Sam'));
// console.log(someString);
// console.log(someString.indexOf('l'));
// console.log(someString.lastIndexOf('l'));

const usersList = [
    {name: 'Kwasi', age: 45, married: true,},
    {name: 'Gala', age: 25, married: false,},
    {name: 'Jerry', age: 16, married: false,},
];

let pool = usersList.find(item => item.age === 16);
console.log(pool);
let poolIndex = usersList.findIndex(item => item.name === 'John');
console.log(poolIndex);

let filtered = usersList.filter(item => item.age > 20);
console.log(filtered);

const aragon = [34, 'Kobalt', true, {name: 'Anna', age: 50, married: true}, 56, 'Victory', 12];
let filterResult = aragon.filter(item => item > 20);
console.log(filterResult);
console.log(aragon.sort());
console.log(aragon.reverse());
console.log(aragon);
const namesArray = ['John', 'Larry', 'Helga', 'Bobby'];
let res = namesArray.map(function(item, index, array) {
    return item[0];
});
console.log(res);
console.log(namesArray);
let str = 'Иван, Вася, Оля, Петя';
let resArr = str.split(', ');
console.log(resArr);
console.log(str);
let str2 = namesArray.join(', ');
console.log(str2);
console.log(namesArray);
console.log(String(namesArray));
const obj = {
    name: 'Goga',
    age: 34,
};
console.log(typeof obj);
console.log(typeof namesArray);

// if (Array.isArray(obj)) {
//     console.log('This is an array !');
// } else {
//     console.log('This is not an array !!!');
// };

// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i]);
// };

// for (let item of namesArray) {
//     console.log(item);
// };
// for (let index in namesArray) {
//     console.log(namesArray[index]);
// };
namesArray.forEach(showItem);

function showItem(item, index) {
    console.log(`${item} is on ${index} position in this array`);
}
const numbers = [1, 2, 3, 4];
let calcRes = numbers.reduce(function(accum, item) {
    return item + accum;
});

console.log(calcRes);

const squareNums = arr => {
    arr.map(num => num * num);
};
let res10 = squareNums(numbers);

console.log(res10);