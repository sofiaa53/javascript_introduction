const prompt = require('prompt-sync')({ sigint: true });

const number = prompt('Silahkan masukan angka: ');
if (number < 0) {
    console.log("Tidak bisa input bilangan negatif");
}

else if (number % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
}

else {
    let x = Math.sqrt(number);
    console.log("Akar pangkat dua dari " + Number(number) + " adalah " + Number(x));
}