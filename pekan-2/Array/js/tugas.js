console.log("hello");

// No 1
const buah = ["apel", "jeruk", "mangga", "pisang"];
buah.sort();
console.log(buah);

// no 2
const abjad = ["c", "a", "b", "f", "e", "d"];
abjad.sort();
console.log(abjad);

// no 3
const num = [342, 198, 520, 725, 609];
num.sort(function (a, b) {
  return a - b;
});
console.log(num);

// no 4
const num2 = [789, 256, 100, 456, 623];
num2.sort(function (a, b) {
  return b - a;
});
console.log(num2);

// no 5
const buah2 = ["apel", "jeruk", "mangga", "pisang"];
buah2.reverse();
console.log(buah2);

// no 6
const num3 = [89, 45, 102, 76, 57];
num3.sort((a, b) => b - a);
console.log(num3);

// no 7
const numNull = [];
numNull.push(5, 4, 3, 2, 1);
numNull.pop();
console.log(numNull);

// no 8[[
const colorsNull = [];
colorsNull.push("merah", "kuning", "hijau");
colorsNull.reverse();
console.log(colorsNull);
