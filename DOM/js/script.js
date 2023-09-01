document.title = "Belajar DOM element"
const body = document.body;

const h1 = document.createElement("h1");
h1.innerHTML = "Belajar DOM element"
body.appendChild(h1)

const name = document.createElement("p")

name.innerHTML = "Anas Nasuha"
body.appendChild(name)

const clas = document.createElement("h2")

clas.innerHTML = "Kelas 11 SIJA SMK TI BAZMA"
body.appendChild(clas)

const btn1 = document.getElementById("btn1")
btn1.style.padding = "10px 25px"
btn1.style.background = "transparent"

function changeColor() {
    btn1.style.background = "red"
}   