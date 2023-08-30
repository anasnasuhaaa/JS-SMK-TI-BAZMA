let person = {
    'firstName': 'Anas',
    'lastName': 'Nasuha',
    'isTeacher': false,
    'address': 'Ciampea'
}

console.log(person);
console.log(person.firstName);
console.log(`${person.firstName} ${person.lastName}`)

// Using Const
const market = {
    'nameMarket': 'Tokopaedi',
    'sell': 'Ayam Goyeng',
    'amount': 12000,
    'casier': {
        'nameCasier': {
            'firstNameCasier': 'Jamal',
            'lastNameCasier': 'Udin'
        },
        'address': 'Cikampak',
        'age': 22,
        'others': {
            'phone': +6282215102034,
        },
        details: function () {
            console.log(`${this.nameCasier.firstNameCasier} ${this.nameCasier.lastNameCasier} ${this.age} ${this.address}`)
        }
    }
}

console.log(market)
market.casier.details()


// Madrid Object
const realMadrid = {
    headCoach: 'Carlo Anceloti',
    defender: {
        goalKepeer: 'Courtois',
        rightBack: 'Carvajal',
        leftBack: 'Ferland Mendy',
        centerBack: 'Alaba',

    },
    midFielders: {
        centralMidFielders: 'Kroos',
        attackMidFielders: 'Belingham'

    },
    forwards: {
        centralForward: 'Joselu',
        leftWingsForward: 'Vinicius',
        rightWingsForward: 'Rodrygo',
    }
}

// Soal 1 Informasi Mahasiswa
var mahasiswa = {
    name: "Radid Aditia",
    age: 17,
    jurusan: "Pertanian",
    nilai: 3.9
}
// Tampilan soal 1
console.log(`Nama: ${mahasiswa.name}`);
console.log(`Usia: ${mahasiswa.age} tahun`);
console.log(`Jurusan: ${mahasiswa.jurusan}`);
console.log(`Nilai: ${mahasiswa.nilai}`);

// Soal 2 Data Produk
const produk = {
    nama: 'Sambal Teri',
    amount: 25000,
    stok: 30
}

// Tampilan soal 2
console.log(`Nama produk: ${produk.nama}`);
console.log(`harga: ${produk.amount}`);
console.log(`Stok: ${produk.stok}`);

// Soal 3 Informasi Buku
let buku = {
    judul:'Tanah Para Bandit',
    penulis:'Tere Liye',
    tahunTerbit:2023
}
// Tampilan soal 3
console.log(`Judul: ${buku.judul}`);
console.log(`Penulis: ${buku.penulis}`);
console.log(`Tahun Terbit: ${buku.tahunTerbit}`);


// Soal 4 Informasi Mobil
var mobil = {
    merk:'Honda',
    tahunProduksi:2022,
    warna:'hitam',
    harga:198000000
}
console.log(`Merk: ${mobil.merk}`);
console.log(`Tahun Produksi: ${mobil.tahunProduksi}`);
console.log(`Warna: ${mobil.warna}`);
console.log(`harga: ${mobil.harga}`);

// Soal 5 Informasi Film
const film = {
    judul:'Suzana',
    genre:'Horor',
    tahunRilis:1988,
    durasi:'2 jam'
}
console.log(`Judul: ${film.judul}`);
console.log(`Genre: ${film.genre}`);
console.log(`Tahun Rilis: ${film.tahunRilis}`);
console.log(`Durasi: ${film.durasi}`);