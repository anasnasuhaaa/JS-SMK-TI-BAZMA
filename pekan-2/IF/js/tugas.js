// Nomer 1
let nilaiAni = 85;
if (nilaiAni >= 80) {
  console.log("Lulus dengan Sangat baik");
} else if (nilaiAni >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// Nomer 2
let tiketBudi = 5;
const hargaTiket = 500000;
let totalHarga = tiketBudi * hargaTiket;
if (tiketBudi > 3) {
  totalHarga -= (totalHarga * 10) / 100;
}
console.log(`Harga: ${totalHarga}`);

// Nomer 3
let gajiSiti = 5000000;
let jamKerjaSiti = 50;

if (jamKerjaSiti > 40) {
  gajiSiti += (jamKerjaSiti - 40) * 50000;
}
console.log(`Gaji Siti: ${gajiSiti}`);

// Nomer 4
let tahun = 2020;
if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
  console.log(`${tahun} adalah tahun kabisat`);
} else {
  console.log(`${tahun} bukan tahun kabisat`);
}

// Nomer 5
let hargaPakaian = 300000;
const codeKupon = "DISCOUNT20";
if (codeKupon === "DISCOUNT20") {
  hargaPakaian -= (hargaPakaian * 20) / 100;
}
console.log(`Harga: ${hargaPakaian}`);
