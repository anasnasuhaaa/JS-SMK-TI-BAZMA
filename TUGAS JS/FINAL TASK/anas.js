// No 1
var learning = "Saya belum belajar js";
console.log(learning);
// No 2
var changeLearning = learning.replace(
  "Saya belum belajar js",
  "Saya telah belajar js"
);
console.log(changeLearning);

// No 3
let replaceLearning = changeLearning.replace("js", "javascript");
console.log(replaceLearning);

// No 4
let replaceLearning2 = replaceLearning.replace("javascript", "Javascript");
let concatLearning = replaceLearning2.concat(" ES");
console.log(concatLearning);

// No 5
let resultLearning = "Hari ini telah selesai belajar javascript ES6";
console.log(resultLearning);

// No 6
function nomor6(num, num2) {
  let hasil = 0;
  hasil = ((num + num2 - 5) * 3) / 6;
  console.log(hasil);
}
nomor6(5, 6);

// No 7
const angka1 = 5;
const angka2 = 5;
console.log(angka1 == angka2);
console.log(angka1 > angka2);
console.log(angka1 < angka2);
console.log(angka1 != angka2);

// No 8
const mobil = {
  merk: "Honda",
  tahunProduksi: 2019,
  warna: "Hitam",
  harga: 150000000,
};
console.log(mobil);

// No 9
const produk = {
  nama: "Sambal Mantap",
  harga: "27000",
  stok: 13,
};
console.log(produk);

// No 10
const film = {
  judul: "John Wick 4",
  genre: "Action",
  tahunRilis: 2023,
  durasi: "2j 49m",
};
console.log(film);

// No 11
tokoBuah = ["anggur", "jambu", "semangka"];
console.log(tokoBuah);

// No 12
concatBuahArray = tokoBuah.concat(["durian", "apel", "manggis"]);
for (let b = 0; b < concatBuahArray.length; b++) {
  console.log(concatBuahArray[b]);
}

// No 13
lengthConcatBuah = concatBuahArray.length;
console.log(lengthConcatBuah);

// No 14
sortBuah = concatBuahArray.sort();
console.log(sortBuah);

// No 15
nilaiAni = 85;
if (nilaiAni >= 80) {
  console.log("Lulus dengan Sangat Baik");
} else if (nilaiAni >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// No 16
bilanganGanjil = [];
for (let bilGan = 1; bilGan <= 20; bilGan += 2) {
  bilanganGanjil = bilGan;
  console.log(bilanganGanjil);
}

// No 17
day = 1;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  default:
    console.log("Hari Libur");
    break;
}

// No 18
function calculateOperator(value1, value2, operator) {
  if (operator === "tambah") {
    console.log(value1 + value2);
  } else if (operator === "kurang") {
    console.log(value1 - value2);
  } else if (operator === "kali") {
    console.log(value1 * value2);
  } else if (operator === "bagi") {
    console.log(value1 / value2);
  }
}
calculateOperator(12, 4, "tambah"); 
calculateOperator(15, 4, "kurang");
calculateOperator(5, 5, "kali");
calculateOperator(10, 2, "bagi");

// No 19
function switchOperator(number1, number2, operat) {
  switch (operat) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "*":
      return number1 * number2;
      break;
    case "/":
      return number1 / number2;
      break;
    default:
      return "Operator tidak valid";
  }
}
console.log(switchOperator(8, 3, '+')); // Output: 11 
console.log(switchOperator(10, 2, '-')); // Output: 8 
console.log(switchOperator(4, 6, '*')); // Output: 24 
console.log(switchOperator(15, 3, '/')); // Output: 5 
console.log(switchOperator(7, 2, '%')); // Output: "Operator tidak valid"

// No 24
function jsonParse() {
  const person = `{
    "name":"Alice",
    "age":25
  }`;
  parsePerson = JSON.parse(person);
  console.log(parsePerson);

  const changeAgeJson = JSON.parse(
    person,
    function (key, value) {
      if (key === "age" && value === 25) {
        return 30;
      }
      return value;
    }
  );
  console.log(changeAgeJson);
}
console.log(jsonParse());

// No 25
function jsonStringify() {
  const person2 = {
    "name": "Bob",
    "skills": ["JavaScript", "HTML", "CSS"]
  };
  const jsonSpacer = JSON.stringify(person2, null, 2);
  console.log(jsonSpacer)
}
jsonStringify()
