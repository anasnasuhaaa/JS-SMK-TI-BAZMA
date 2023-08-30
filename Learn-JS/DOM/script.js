console.log(document.title);
document.title = "Belajar DOM";

// let body = document.body;
// body.append('Hello World');

// let h1 = document.createElement('h1');
// h1.innerHTML='H1 PAKE JS';

// body.append(h1)

function popup() {
  const userAgeInput = document.getElementById("age");
  const userNameInput = document.getElementById("name");
  const userNme = userNameInput.value;
  const userAge = userAgeInput.value;
  const Age = new Date().getFullYear() - userAge;
  alert("usia anda di tahun adalah " + Age + " TAHUN");
}

let text = "hello, I am learn js now";
let js = text.substring("js", "Javascript");
let h = text.charAt(0).toUpperCase();
let kecil = text.slice(1);
console.log(h + kecil);

let siswa = "saat ini, saya kelas 11";
let siswaNow = siswa.replace(siswa, "Sekarang, saya kelas 11 di SMK TI BAZMA");
console.log(siswaNow);

let anagka1 = 10;
let anagka2 = "10";
let hasil = anagka1 === anagka2;
console.log(hasil);

let replName = "Hello, my name";
replName = replName.replace("my","your");
console.log(replName);

var sliceName = "very exciting learning javascript";
sliceName = sliceName.slice(0,12) 
console.log(sliceName);
