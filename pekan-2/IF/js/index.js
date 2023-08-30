let number = 10;
if (number >= 10) {
  console.log(`${number} lebih dari atau sama dengan 10`);
}

let books = 10;
let price = 10000;

if (books) {
  price *= books;
  console.log(price);
}
let hargaPerKg = 10000;
let diskon = 2000;
let berat = 2;

let totals = hargaPerKg * berat;
if (berat >= 2) {
  totals -= diskon;
}

console.log(totals);
