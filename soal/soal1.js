const promt = require('prompt-sync')({sigint: true})

console.log("Program Akar Pangkat 2 dari x, dengan x merupakan bilangan genap")
console.log("================================================================")
var angka = promt("Input Angka : ")

if (angka % 2 == 0) {
    console.log("Bilangan Genap")
    console.log(Math.sqrt(angka))
} else if (angka < 0) {
    console.log("Tidak bisa input bilangan negatif")
} else {
    console.log("Tidak bisa input bilangan ganjil")
}