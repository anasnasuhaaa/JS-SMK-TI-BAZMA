console.log("Hello World");
console.log("My Name is Jamal");
console.log(5 ** 2);

let value1 = 1;
let value2 = 2;

console.log(value1 + value2);

// Single Line Comment
/* MultiLine 
Comment */

var string = undefined;
console.log(string);
var number = 30;
console.log(number);

var first = "Namaku";
var second = "Adalah";
var third = "Anas Nasuha";

// Merge the words

var concatenate = first + " " + second + " " + third;
console.log(concatenate);

console.log(first + " " + second + " " + third);

// how to use backtick ? `

var useBacktick = `${first} ${second} ${third}`;
console.log(useBacktick);

let getPromt = prompt("tahun lahir? ");
let age = 2023 - getPromt;
alert(`Usiamu adalah ${age} tahun`);

// Array
let namaGuru = ["Bayu", "Ulfa", "Dito", "Harni", "Fajar"];
console.log(namaGuru);

// forLoop
for (let i = 1; i <= namaGuru.length; i++) {
  console.log(namaGuru[i]);
}

console.log(!true || false);
