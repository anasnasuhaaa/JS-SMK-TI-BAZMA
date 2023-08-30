const colors = ["Merah", "Kuning", "Hijau", "Biru"];
const colors2 = ["Abuabu", "Oren", "Jingga"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

// Length => mengembalikan panjang ukuran sebuah array
const colorsLength = colors.length;
console.log(colorsLength);

// Array to String => mengonversi array menjadi string
const colorsString = colors.toString();
console.log(colorsString);

// Join => Ini berperilaku seperti toString(), tetapi selain itu Anda dapat menentukan pemisahnya:
const colorsJoin = colors.join(" - ");
console.log(colorsJoin);

// Pop => hapus index array terakhir
colors.pop();
console.log(colors);

// Push => Menambahkan elemen baru ke array (di bagian akhir)
colors.push("Pink", "Hitam");
console.log(colors);

//Shift => menghapus elemen index pertama dan "menggeser" semua elemen lain ke indeks yang lebih rendah.
colors.shift();
console.log(colors);

// Unshift => menambahkan elemen baru ke array (di awal), dan "membatalkan pergeseran" elemen lama:
colors.unshift("Cokelat");
console.log(colors);

//Concat => membuat array baru dengan menggabungkan (menggabungkan) array yang sudah ada.
const colorsConcat = colors.concat(colors2);
console.log(colorsConcat);

// Spread Operator => Menyalin array tanpa merubah isi aslinya
const abjad = ["a", "b", "c", "d"];
const newAbjad = [1, 2, 3, ...abjad, "e"];

console.log({ abjad, newAbjad });

const buah = ["mangga", "apel", "anggur", "melon"];
const newBuah = [...buah, "sirsak", "pepaya"];
console.log(buah, newBuah);

// coba untuk menghapus menggunakan sifat pop?
newBuah.pop();
console.log(newBuah);

// sekarang coba untuk tambahkan arrat pertama dengan sifat apa
newBuah.unshift("salak");
console.log(newBuah);

// sekarang gabungkan dnegan fungsi concat
const buah2 = ["jambu", "duku"];
const arrBuah = newBuah.concat(buah2);
console.log(arrBuah);

// sekarang arrBuah jadikan sebua parametr join tanda /
const arrBuahJoin = arrBuah.join(" / ");
console.log(arrBuahJoin);

// array friends
const friends = ["attar", "anas", "adli", "radid"];

// gabungkan dengan arrNewFriends
const arrNewFriends = friends.concat("saeful", "raka");
console.log(arrNewFriends);

// sekrang salin dengan spreads
const arrCopyFriends = [...arrNewFriends];
console.log(arrNewFriends, arrCopyFriends);

// bagaimana penggunaa fungsi shift?
arrCopyFriends.shift();
console.log(arrCopyFriends);

// bagaiaman jika attar berada di posisi akhir array?
arrCopyFriends.push("attar");
console.log(arrCopyFriends);

// Array sort
const allFriends = ["hafith", "raqi", "andra", "mufiz"];
const allNewFriends = ["ibrahim", "hanif", "syahban"];
const friendsConcat = allFriends.concat(allNewFriends);
friendsConcat.sort();
console.log(friendsConcat);

// number
const num = [4, 9, 254, 376, 70, 1000];
num.sort(function (a, b) {
  return a - b;
});
console.log(num);

const num2 = [9, 3, 4, 1, 7];
num2.sort();
console.log(num2);

// reverse
const copyFriendsConcat = [...friendsConcat];
friendsConcat.reverse();
console.log(copyFriendsConcat, friendsConcat);

// blank array
const arrNull = [];
arrNull.push(1, 2, 3);
arrNull.push("a", "b", "c", "d");
arrNull.push({ name: "jamal" });
arrNull.push(["jamal", "udin", "badrul",{names: 'opet'}]);

console.log(arrNull);
console.log(arrNull[8][3]['names']);
