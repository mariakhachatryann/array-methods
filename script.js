"use strict";

// 1. պրակտիկա եք անում նշված թեմաներով

//  forEach(ստեղծում եք 2 հատ)
// 1
const rand = [15, 22, 27, 78, 654, 46, 33, 7, 61, 44];
const even = [];
const odd = [];

rand.forEach((num) => {
  if (num % 2 !== 0){
    odd.push(num);
  } else{
    even.push(num);
  }
});

console.log(even);
console.log(odd);

// 2
const names = ["   lUCy", "   aLEx   ", "   joe", "MIA   "];
names.forEach((name) => {
  const low = name.trim().toLowerCase();
  console.log(low[0].toUpperCase() + low.slice(1));
});


//  filter(ստեղծում եք 5 հատ)
// 1
const participants = [
  {name: "Joe", member: false},
  {name: "Tony", member: true},
  {name: "Jesica", member: false},
  {name: "Michael", member: true},
  {name: "Lea", member: true}
];

const members = participants.filter((item, index) => {
  return item.member === true;
});

console.log(members);

// 2
const fruits = Array.of("apple", "banana", "grapes", "mango", "orange");
const result = fruits.filter((fruit) => fruit.toLowerCase().includes("grape".toLowerCase()));
console.log(result);

// 3
const cities = [
  {name: "Yerevan", population: 1092000},
  {name: 'Los Angeles', population: 3792621},
  {name: "Victoria", population: 80000},
  {name: 'New York', population: 8175133},
  {name: "Moscow", population: 12641000},
  {name: "Santa Fe", population: 88000}
];

const bigCities = cities.filter((city => city.population > 100000));
console.log(bigCities);

// 4
const students = [
  {name: "Mia", lastName: "Smith", graduationYear: 2022},
  {name: "Charles", lastName: "Anderson", graduationYear: 2023},
  {name: "Leo", lastName: "Brown", graduationYear: 2022},
  {name: "Ell", lastName: "Jobs", graduationYear: 2024}
];

let graduatingStudents = students.filter((stud) => {
  if (stud.graduationYear === new Date().getFullYear()) {
    return stud;
  }
});

console.log(graduatingStudents);

// 5
const myArray = Array.of(-15, -7, 2, 7, 5, 104743, 44, 78, 97, -66, 45, 47);
const primeNumbers = myArray.filter((element) => {
  for (let i = 2; element > i; i++) {
    if (element % i === 0) {
      return false;
    }
  }
  return element > 1;
});

console.log(primeNumbers); // [2, 3, 13, 17, 97]


//  map(ստեղծում եք 5 հատ)
// 1
const person = [
  {name: "Liza", age: 14},
  {name: "Tony", age: 19},
  {name: "Siona", age: 15},
  {name: "Mark", age: 22},
  {name: "Aaron", age: 26}
];

person.map(obj => obj).filter(obj => obj.age >= 18).forEach((val) => {
  val.allow = true;
  console.log(val);
});

// 2
const input = "Armenian State University Economics";
console.log(input.split(" ").map((word) => word[0]).join(""));

// 3
const short = [
  {fn: "Joe", ln: "Brown", gn: "male", ph: 81812332},
  {fn: "Mike", ln: "Johnson", gn: "male", ph: 8185632},
  {fn: "Molly", ln: "Adams", gn: "female", ph: 8187563},
];

const transformShort = short.map((obj) => {
  return {
    firstName: obj.fn,
    lastName: obj.ln,
    gender: obj.gn,
    phone: obj.ph
  };
});

console.log(transformShort);

// 4
const numbers = [2, 5, 6, 8, 11];
const squares = numbers.map(n => Math.pow(n, 2));
console.log(squares);

// 5
const sqr = [4, 25, 36, 64, 121];
const n = sqr.map(n => Math.sqrt(n));
console.log(n);


//  reduce(ստեղծում եք 8 հատ)
// 1
const nums = [15, 45, 7, 57, 66];
const average = nums.reduce((a, b) => (a + b)) / nums.length;
console.log(average);

// 2
const a = [{ name: "David"},{ age: 18 },{ phone: 8181484 },{ friends: ["Maria", "Joe"]} ];
const b = a.reduce((res, val) => {
  if(val.name !== undefined){
    res.name = val.name;
  }
  if(val.age !== undefined){
    res.age = val.age;
  }
  if(val.friends !== undefined){
    res.friends = val.friends.join(", ");
  }
  return res;
}, {});
console.log(b);

// 3) map function with reduce
function map (arr, func) {
  return arr.reduce((total, val, i) => {
    total[i] = func(val);
    return total;
  }, []);
}

console.log(map([3, 8, 1, 0], function (val) {
  return val * 2;
}));

// 4
const myArr = ["c", "a", "b", "h", "a", "y", "l", "b", "c", "e", "e", "c", "d", "d"];
const noDupli = myArr.reduce((previous, val) => {
  if (!previous.includes(val)) {
    return [...previous, val];
  }
  return previous;
}, []);

console.log(noDupli.sort());

// 5
const queue = ["Maria", "Joe", "Alice", "Adam", "Lea", "Frank", "Rina", "Aaron"];
const total = queue.reduce((result, current, index) => {
  return { ...result, [index]: current };
}, {});

console.log(total);

// 6) factorial with map and reduce 
const inp = 5;

const array = new Array(inp).fill(null);
console.log(array.map(function (item, index) {
    return index + 1;
}).reduce(function (total, val) {
    return total * val;
  }, 1)
);

// 7
const arr = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

console.log(arr.flat().reduce((total, val) => {
  if (total[val]) {
    total[val] += 1;
  } else {
      total[val] = 1;
    }
  return total;
}, {}));

// 8
const multidim = [[0, 1], [2, 3], [4, 5], [6, 7]];

const unmultidim = multidim.reduce((total, val) => {
  return [].concat(total, val);
}, []);

console.log(unmultidim);


//  some + every(ստեղծում եք 2 հատ)
console.log(["apple", "banana", "grapes", "mango", "orange"].some((val) => "banana" === val));
console.log([3, 8, 1, 0].every((val) => typeof(val) === "number"));


//  fill(ստեղծում եք 1 հատ)
// Our group consists of 3 doctors, 2 drivers, 2 politicians, 3 sportsmen 
const groupDoctors = Array(10).fill("doctor", 0, 3); 
const groupDrivers = groupDoctors.fill("driver", 3, 5);
const groupPoliticians = groupDoctors.fill("politician", 5, 7);
const groupSport = groupDoctors.fill("sportsman", 7);
console.log(groupSport);


//  find(ստեղծում եք 1 հատ)
const specialist = [
  {name: "Ann", quality: 4},
  {name: "Paul", quality: 6},
  {name: "Jake", quality: 10},
  {name: "Adam", quality: 9},
  {name: "Mark", quality: 10},
  {name: "Joe", quality: 8},
];

const foundGood = specialist.find(pers => pers.quality > 6); // { name: 'Jake', quality: 10 }
const foundIndex = specialist.findIndex(pers => pers.quality > 6); // 2
console.log(foundGood);


// 2. ձեռքով ստեղծում եք հետևյալ մեթոդները forEach, map, filter, reduce
function myForEach (arr, func) {

  if (!Array.isArray(arr) || typeof func !== "function") {
    console.error("Something went wrong");
  }

  for(let i = 0; i < arr.length; i++){
    arr[i] = func(arr[i]);
  }
  return arr;
}

console.log(myForEach([15 , 25, 35], (item, index) => item * 2));


function myMap (arr, func) {
  if (!Array.isArray(arr) || typeof func !== "function") {
    console.error("Something went wrong");
  }

  for(let i = 0; i < arr.length; i++){
    arr[i] = func(arr[i], i);
  }

  return arr;
}

console.log(myMap(["Maria", "Anna", "John"], function(item, index){
  return item.toUpperCase();
}));


function myFilter (arr, fn) {
  let temp = [];

  if (!Array.isArray(arr) || typeof fn !== "function") {
    console.error("Something went wrong");
    return temp;
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

console.log(myFilter([1, 2, 3, 4, 5], function(item, index){
  return item > 3;
}));


function myReduce(arr, func, res) {
  if (!Array.isArray(arr) || typeof func !== "function") {
    console.error("Something went wrong");
  }

  myForEach(arr, (item => {
    res = res !== undefined ? func(res, item) : item;
  }));

  return res;
}

console.log(myReduce([2, 5, 5], (a, b) => a * b, 1)); // 50